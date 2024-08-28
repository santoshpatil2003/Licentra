import { doc, setDoc, updateDoc, deleteDoc, getDoc, getDocs, collection, query, where, increment, arrayUnion, runTransaction} from "firebase/firestore";
import { ref, uploadBytes, deleteObject, getDownloadURL,uploadBytesResumable } from "firebase/storage";
import { storage, db } from "../firebase";

// usernameTaken: async (name) => {
//     await db.collection("users").get().then(querySnapshot => {
//         querySnapshot.forEach(documentSnapshot => {
//             if (documentSnapshot.data().username === name) {
//                 return true;
//             }
//         });
//     });
//     return false;
// }


export async function getSeller(uid) {
    try {
        const sellerRef = doc(db, "seller", uid);
        const sellerSnap = await getDoc(sellerRef);

        if (sellerSnap.exists()) {
            const sellerData = sellerSnap.data();
            const { password, ...safeSellerData } = sellerData;
            return {
                success: true,
                message: 'Seller data retrieved successfully',
                data: safeSellerData
            };
        } else {
            return {
                success: false,
                message: 'No seller found with this ID'
            };
        }
    } catch (error) {
        console.error('Error getting seller:', error);
        return {
            success: false,
            error: error.message
        };
    }
}

export async function getUserBack2(uid) {
    try {
        const sellerRef = doc(db,'buyer', uid);
        const sellerSnap = await getDoc(sellerRef);

        if (sellerSnap.exists()) {
            const sellerData = sellerSnap.data();
            const { password, ...safeSellerData } = sellerData;
            return {
                success: true,
                user: 'buyer',
                message: 'buyer data retrieved successfully',
                data: safeSellerData
            };
        } else {
            return {
                success: false,
                message: 'No user found with this ID'
            };
        }
    } catch (error) {
        console.error('Error getting seller:', error);
        return {
            success: false,
            error: error.message
        };
    }
}

export async function getUserBack(uid) {
    try {
        const sellerRef = doc(db,'seller', uid);
        const sellerSnap = await getDoc(sellerRef);

        if (sellerSnap.exists()) {
            const sellerData = sellerSnap.data();
            const { password, ...safeSellerData } = sellerData;
            return {
                success: true,
                user: 'seller',
                message: `seller data retrieved successfully`,
                data: safeSellerData
            };
        } else {
            const result = getUserBack2(uid)
            return result
        }
    } catch (error) {
        console.error('Error getting seller:', error);
        return {
            success: false,
            error: error.message
        };
    }
}



async function addSeller(email, password, name, user_name, uid) {
    try {
        function name2(name){
            const date = Date.now()
            let n = name.split(' ')[0]
            date.toString().split('').slice(8).forEach((e)=>{
                n += e
            })
            // console.log(n)
            return n
        }

        let un = name2(name)

        console.log(email, password, name, un)

        const sellerRef = doc(db, "seller", uid);
        await setDoc(sellerRef, {
            name: name,
            user_name: un,
            email: email,
            password: password, // Note: In practice, never store plain text passwords
        });
        return { success: true, message: "Seller added successfully" };
    } catch (error) {
        console.error("Error adding seller:", error);
        return { success: false, error: error.message };
    }
}

// Function to add a new buyer
async function addBuyer(email, password, name, user_name, uid) {
    try {
        function name2(name){
            const date = Date.now()
            let n = name.split(' ')[0]
            date.toString().split('').slice(8).forEach((e)=>{
                n += e
            })
            // console.log(n)
            return n
        }

        let un = name2(name)

        const buyerRef = doc(db, "buyer", uid);
        await setDoc(buyerRef, {
            name: name,
            user_name: un,
            email: email,
            password: password, // Note: In practice, never store plain text passwords
        });
        return { success: true, message: "Buyer added successfully" };
    } catch (error) {
        console.error("Error adding buyer:", error);
        return { success: false, error: error.message };
    }
}

export async function getBuyer(uid) {
    try {
        const buyerRef = doc(db, "buyer", uid);
        const buyerSnap = await getDoc(buyerRef);

        if (buyerSnap.exists()) {
            const buyerData = buyerSnap.data();
            const { password, ...safeBuyerData } = buyerData;
            return {
                success: true,
                message: 'Buyer data retrieved successfully',
                data: safeBuyerData
            };
        } else {
            return {
                success: false,
                message: 'No buyer found with this ID'
            };
        }
    } catch (error) {
        console.error('Error getting buyer:', error);
        return {
            success: false,
            error: error.message
        };
    }
}

async function addSongToGlobal(uid, songData, songid) {
    try {
        // console.log(date.toString()) 
        const songRef = doc(
            db,
            "musics",
            "seller",
            "music_list",
            songid
        );

        // Add song data to Firestore
        await setDoc(songRef, {
            song_id: songid,
            song_by: songData.song_by,
            seller_id: uid,
            song_pic_url: songData.song_pic_url,
            song_name: songData.song_name,
            song_price: songData.song_price,
            restrictions: songData.restrictions,
            collaborators: songData.collaborators || [],
            song_url: songData.song_url,
        });

        return { success: true, message: "Song added successfully" };
    } catch (error) {
        console.error("Error adding song:", error);
        return { success: false, error: error.message };
    }
}


export async function getSongOfFromGlobal(songId) {
    try {
        const songRef = doc(db, "musics", "seller", "music_list", songId);
        const songSnap = await getDoc(songRef);

        if (songSnap.exists()) {
            const songData = songSnap.data();
            return {
                success: true,
                message: "Song data retrieved successfully",
                data: songData
            };
        } else {
            return {
                success: false,
                message: "No song found with this ID"
            };
        }
    } catch (error) {
        console.error("Error getting song:", error);
        return {
            success: false,
            error: error.message
        };
    }
}


export async function getAllSongsFromGlobal() {
    try {
        const musicListRef = collection(db, "musics", "seller", "music_list");
        const q = query(musicListRef);
        const querySnapshot = await getDocs(q);

        const songs = [];
        querySnapshot.forEach((doc) => {
            songs.push({
                id: doc.id,
                ...doc.data()
            });
        });

        return {
            success: true,
            message: "All songs retrieved successfully",
            data: songs
        };
    } catch (error) {
        console.error("Error getting songs:", error);
        return {
            success: false,
            error: error.message
        };
    }
}

// async function downloadSong(uid, songId, songName) {
//     try {
//         const songFileRef = ref(
//             storage,
//             `user_files/seller/${uid}/songs/${songId}/${songName}.mp3`
//         );

//         // Get the download URL
//         const downloadURL = await getDownloadURL(songFileRef);

//         // Fetch the song file
//         const response = await fetch(downloadURL);
//         const blob = await response.blob();

//         // Create a temporary URL for the blob
//         const blobUrl = URL.createObjectURL(blob);

//         // Create a temporary anchor element to trigger the download
//         const link = document.createElement('a');
//         link.href = blobUrl;
//         link.download = `${songName}.mp3`;
//         document.body.appendChild(link);
//         link.click();
//         document.body.removeChild(link);

//         // Clean up the temporary URL
//         URL.revokeObjectURL(blobUrl);

//         return { success: true, message: "Song download initiated" };
//     } catch (error) {
//         console.error("Error downloading song:", error);
//         return { success: false, error: error.message };
//     }
// }

export async function downloadSong(uid, songId, songName) {
    try {
        const songFileRef = ref(
            storage,
            `user_files/seller/${uid}/songs/${songId}/${songName}.mp3`
        );

        // Get the download URL
        const downloadURL = await getDownloadURL(songFileRef);

        // console.log(downloadURL)

        // Fetch the song file
        // const response = await fetch(downloadURL);
        // const blob = await response.blob();

        // // Create a temporary URL for the blob
        // const blobUrl = URL.createObjectURL(blob);

        // // Create a temporary anchor element to trigger the download
        // const link = document.createElement('a');
        // link.href = blobUrl;
        // link.download = `${songName}.mp3`;
        // document.body.appendChild(link);
        // link.click();
        // document.body.removeChild(link);

        // // Clean up the temporary URL
        // URL.revokeObjectURL(blobUrl);

        return { success: true, message: "Song download initiated", song: downloadURL };
    } catch (error) {
        console.error("Error downloading song:", error);
        return { success: false, error: error.message };
    }
}

// // Function to add a song to a seller's song list
// async function addSongToSeller(uid, songData, songFile, songPicFile) {
//     const date = Date.now()
//     let songid = date.toString()
//     try {
//         // console.log(date.toString()) 
//         const songRef = doc(db,"seller",uid,"s_song_list",songid);

//         // Upload song file to Cloud Storage
//         const songFileRef = ref(
//             storage,
//             `user_files/seller/${uid}/songs/${songid}/${songData.song_name}.mp3`
//         );
//         const metadata = {
//             contentType: 'audio/mpeg',
//         };
//         await uploadBytes(songFileRef, songFile,);

//         // Upload song picture to Cloud Storage
//         const songPicFileRef = ref(
//             storage,
//             `user_files/seller/${uid}/songs/${songid}/${songData.song_name}.jpg`
//         );
//         await uploadBytes(songPicFileRef, songPicFile);

//         const songPicUrl = await getDownloadURL(songPicFileRef);

//         // Add song data to Firestore
//         await setDoc(songRef, {
//             song_id: songid,
//             song_by: songData.song_by,
//             song_pic_url: songPicUrl,
//             song_name: songData.song_name,
//             song_price: songData.song_price,
//             restrictions: songData.restrictions,
//             collaborators: songData.collaborators || [],
//         });

//         let d = {
//             song_id: songid,
//             song_by: songData.song_by,
//             seller_id: uid,
//             song_pic_url: songPicUrl,
//             song_name: songData.song_name,
//             song_price: songData.song_price,
//             restrictions: songData.restrictions,
//             collaborators: songData.collaborators || [],
//         }

//         let result = await addSongToGlobal(uid, d, songid)

//         return { success: result.success, message: result.message };
//     } catch (error) {
//         console.error("Error adding song:", error);
//         return { success: false, error: error.message };
//     }
// }


async function addSongToSeller(uid, songData, songFile, songPicFile) {
    const date = Date.now();
    const songid = date.toString();

    try {
        const songRef = doc(db, "seller", uid, "s_song_list", songid);

        // Upload song file to Cloud Storage
        const songFileRef = ref(
            storage,
            `user_files/seller/${uid}/songs/${songid}/${songData.song_name}.mp3`
        );
        const songMetadata = {
            contentType: 'audio/mpeg',
        };
        await uploadBytes(songFileRef, songFile, songMetadata);

        // Upload song picture to Cloud Storage
        const songPicFileRef = ref(
            storage,
            `user_files/seller/${uid}/songs/${songid}/${songData.song_name}.jpg`
        );
        await uploadBytes(songPicFileRef, songPicFile);

        // Get the download URL for the song picture
        const songPicUrl = await getDownloadURL(songPicFileRef);

        const downloadSongURL = await getDownloadURL(songFileRef);

        // Add song data to Firestore
        await setDoc(songRef, {
            song_id: songid,
            song_by: songData.song_by,
            song_pic_url: songPicUrl,
            song_name: songData.song_name,
            song_price: songData.song_price,
            restrictions: songData.restrictions,
            collaborators: songData.collaborators || [],
            song_url: downloadSongURL,
        });

        // Prepare the data to add to global
        let d = {
            song_id: songid,
            song_by: songData.song_by,
            seller_id: uid,
            song_pic_url: songPicUrl,
            song_name: songData.song_name,
            song_price: songData.song_price,
            restrictions: songData.restrictions,
            collaborators: songData.collaborators || [],
            song_url: downloadSongURL,
        };

        let result = await addSongToGlobal(uid, d, songid);

        return { success: result.success, message: result.message };
    } catch (error) {
        console.error("Error adding song:", error);
        return { success: false, error: error.message };
    }
}


export async function getSongDataOfSeller(uid, songid) {
    try {
        const songRef = doc(
            db,
            "seller",
            uid,
            "s_song_list",
            songid
        );

        // Get song data from Firestore
        const songDoc = await getDoc(songRef);

        if (!songDoc.exists()) {
            return { success: false, error: "Song not found" };
        }

        const songData = songDoc.data();

        return { success: true, data:songData};
    } catch (error) {
        console.error("Error getting song data:", error);
        return { success: false, error: error.message };
    }
}



export async function getSongCollectionDataOfBuyer(uid) {
    try {
        const songRef = collection(db, "buyer", uid, "b_song_list");

        // Get song data from Firestore
        const songDocs = await getDocs(songRef);

        let songList = []

        songDocs.forEach((doc)=>{
            songList.push(doc.data())
        })



        return { success: true, songs: songList };
    } catch (error) {
        console.error("Error getting song data:", error);
        return { success: false, error: error.message };
    }
}






export async function getSoldSongDataSeller(uid) {
    try {
        const songRef = collection(
            db,
            "seller",
            uid,
            "sold_song_list",
        );

        // Get song data from Firestore
        const songDoc = await getDocs(songRef);

        let songList = [];

        songDoc.forEach((doc) => {
            songList.push({
                // song_id: doc.id,
                ...doc.data()
            });
        });

        return { success: true, data:songList};
    } catch (error) {
        console.error("Error getting song data:", error);
        return { success: false, error: error.message };
    }
}
// first function
// async function updateAmountMadeOn(uid, newAmount, month, year) {
//     const userDocRef = doc(db,"seller",uid);

//     try {
//         await runTransaction(db, async (transaction) => {
//             const userDoc = await transaction.get(userDocRef);
//             // if (!userDoc.exists()) {
//             //     throw "Document does not exist!";
//             // }

//             const amountMadeOn = userDoc.data().amount_made_on || [];
//             let updated = false;

//             const updatedAmountMadeOn = amountMadeOn.map(entry => {
//                 if (entry.month === month && entry.year === year) {
//                     updated = true;
//                     return { ...entry, amount: entry.amount + newAmount };
//                 }
//                 return entry;
//             });

//             if (!updated) {
//                 updatedAmountMadeOn.push({ amount: newAmount, month, year });
//             }

//             transaction.update(userDocRef, { amount_made_on: updatedAmountMadeOn });
//         });

//         return { success: true, message: "Amount made on updated successfully" };
//     } catch (error) {
//         console.error("Error updating amount made on:", error);
//         return { success: false, error: error.message };
//     }
// }

async function updateAmountMadeOn(uid, newAmount, month, year) {
    const userDocRef = doc(db,"seller",uid);

    try {
        await runTransaction(db, async (transaction) => {
            const userDoc = await transaction.get(userDocRef);
            if (!userDoc.exists()) {
                throw "Document does not exist!";
            }

            const amountMadeOn = userDoc.data().amount_made_on || [];
            let updated = false;

            const updatedAmountMadeOn = amountMadeOn.map(entry => {
                if (entry.month === month && entry.year === year) {
                    updated = true;
                    // Convert both amounts to numbers before adding
                    const updatedAmount = Number(entry.amount) + Number(newAmount);
                    return { ...entry, amount: updatedAmount.toString() };
                }
                return entry;
            });

            if (!updated) {
                updatedAmountMadeOn.push({ amount: newAmount.toString(), month, year });
            }

            transaction.update(userDocRef, { amount_made_on: updatedAmountMadeOn });
        });

        return { success: true, message: "Amount made on updated successfully" };
    } catch (error) {
        console.error("Error updating amount made on:", error);
        return { success: false, error: error.message };
    }
}


//third function
// async function updateAmountMadeOn(uid, newAmount, month, year) {
//     const userDocRef = doc(db,"seller",uid);

//     try {
//         await runTransaction(db, async (transaction) => {
//             const userDoc = await transaction.get(userDocRef);
//             if (!userDoc.exists()) {
//                 throw "Document does not exist!";
//             }

//             const amountMadeOn = userDoc.data().amount_made_on || [];
//             let entryIndex = amountMadeOn.findIndex(entry => entry.month === month && entry.year === year);

//             if (entryIndex !== -1) {
//                 // Update existing entry
//                 transaction.update(userDocRef, {
//                     [`amount_made_on.${entryIndex}.amount`]: increment(newAmount)
//                 });
//             } else {
//                 // Add new entry
//                 transaction.update(userDocRef, {
//                     amount_made_on: [...amountMadeOn, { amount: newAmount, month, year }]
//                 });
//             }
//         });

//         return { success: true, message: "Amount made on updated successfully" };
//     } catch (error) {
//         console.error("Error updating amount made on:", error);
//         return { success: false, error: error.message };
//     }
// }

export async function TransactionSellerAndBuyer(b_uid, s_uid, songid, price, use_case) {
    // const date = Date.now()           b_uid, s_uid, songid, price
    // let songid = date.toString()
    function CreateDate(){
        const date = Date()
        let l = date.toString().split(' ').slice(1,4)
        let d = ''
        l.forEach((e)=>{
            d = `${d} ` + e
        })
        return {date: d, month: l[0], year: l[2]}
    }

    try {
        let musicData = await getSongDataOfSeller(s_uid,songid)

        const b_songRef = doc(db,"buyer",b_uid,"b_song_list",songid);
        const s_songRef = doc(db,"seller",s_uid,"sold_song_list",songid);
        const global_songRef = doc(db,"musics","transactions","musics_list",songid);

        const sellerRef = doc(db,"seller",s_uid);

        const date = CreateDate()
        
        await updateDoc(sellerRef, {
            sold: increment(1)
        });
        await updateAmountMadeOn(s_uid, price, date.month, date.year)
        
        await setDoc(b_songRef, {
            buyer_id: b_uid,
            seller_id: s_uid,
            use_case: use_case,
            date: date.date,
            ...musicData.data
        });

        await setDoc(s_songRef, {
            buyer_id: b_uid,
            seller_id: s_uid,
            use_case: use_case,
            date: date.date,
            ...musicData.data
        });

        await setDoc(global_songRef, {
            buyer_id: b_uid,
            seller_id: s_uid,
            use_case: use_case,
            date: date.date,
            ...musicData.data
        });

        return { success: false, message:  "Transaction completed" };

    } catch (error) {
        console.error("Error adding song:", error);
        return { success: false, error: error.message };
    }
}

export async function getSongDataSellerAll(uid) {
    try {
        const songListRef = collection(
            db,
            "seller",
            uid,
            "s_song_list"
        );

        const querySnapshot = await getDocs(songListRef);
        const songList = [];

        // const songPicFileRef = ref(
        //     storage,
        //     `user_files/seller/${uid}/songs/${songid}/${songData.song_name}.jpg`
        // );
        // const songPicUrl = await getDownloadURL(songPicFileRef);

        querySnapshot.forEach((doc) => {
            songList.push({
                // song_id: doc.id,
                ...doc.data()
            });
        });

        return { success: true, songs: songList };
    } catch (error) {
        console.error("Error getting song data:", error);
        return { success: false, error: error.message };
    }
}

export async function getSales(uid) {
    try {
        // console.log(uid)
        console.log("getSales", uid)
        const songListRef = doc(db,"seller",uid);

        const querySnapshot = await getDoc(songListRef);
        // const songList = [];

        let data = querySnapshot.data()

        return { success: true, songs: data.amount_made_on};
    } catch (error) {
        console.error("Error getting song data:", error);
        return { success: false, error: error.message };
    }
}

// usernameTaken: async (name) => {
//     await db.collection("users").get().then(querySnapshot => {
//         querySnapshot.forEach(documentSnapshot => {
//             if (documentSnapshot.data().username === name) {
//                 return true;
//             }
//         });
//     });
//     return false;
// }

export async function searchSeller(searchTerm) {
    try {
        // Create a reference to the users collection
        const usersRef = collection(db, 'seller');

        // Create a query against the collection
        const q = query(usersRef, where('name', '==', searchTerm));

        // Execute the query
        const querySnapshot = await getDocs(q);
        // console.log(querySnapshot.docs.length)

        // Array to store matching users
        const matchingUsers = [];

        querySnapshot.forEach((doc) => {
            // doc.data() //is never undefined for query doc snapshots
            matchingUsers.push({ id: doc.id, ...doc.data() });
            // console.log({id: doc.id,...doc.data()})
        });
        console.log(matchingUsers)

        return matchingUsers;
    } catch (error) {
        console.error("Error searching for user: ", error);
        return [];
    }
}

export async function getSellers(searchTerm) {
    try {
        // Create a reference to the users collection
        const usersRef = collection(db, 'seller');

        // Create a query against the collection
        // const q = query(usersRef, where('name', '==', searchTerm));

        // Execute the query
        const querySnapshot = await getDocs(usersRef);
        // console.log(querySnapshot.docs.length)

        // Array to store matching users
        const matchingUsers = [];

        querySnapshot.forEach((doc) => {
            // doc.data() //is never undefined for query doc snapshots
            matchingUsers.push({ id: doc.id, ...doc.data() });
            // console.log({id: doc.id,...doc.data()})
        });
        console.log(matchingUsers)

        return matchingUsers;
    } catch (error) {
        console.error("Error searching for user: ", error);
        return [];
    }
}




async function updateSong(
    uid,
    songId,
    updateData,
    newSongFile,
    newSongPicFile
) {
    try {
        const songRef = doc(db, "seller", uid, "s_song_list", songId);

        // Update song data in Firestore
        await updateDoc(songRef, updateData);

        // If new song file is provided, update it in Cloud Storage
        if (newSongFile) {
            const songFileRef = ref(
                storage,
                `user_files/seller/${uid}/songs/${songId}/song.mp3`
            );
            await uploadBytes(songFileRef, newSongFile);
        }

        // If new song picture is provided, update it in Cloud Storage
        if (newSongPicFile) {
            const songPicFileRef = ref(
                storage,
                `user_files/seller/${uid}/songs/${songId}/song_pic.jpg`
            );
            await uploadBytes(songPicFileRef, newSongPicFile);
        }

        return { success: true, message: "Song updated successfully" };
    } catch (error) {
        console.error("Error updating song:", error);
        return { success: false, error: error.message };
    }
}

// Function to delete a song
async function deleteSong(uid, songId) {
    try {
        // Delete song data from Firestore
        const songRef = doc(db, "seller", uid, "s_song_list", songId);
        await deleteDoc(songRef);

        // Delete song files from Cloud Storage
        const songFileRef = ref(
            storage,
            `user_files/seller/${uid}/songs/${songId}/song.mp3`
        );
        const songPicFileRef = ref(
            storage,
            `user_files/seller/${uid}/songs/${songId}/song_pic.jpg`
        );
        await deleteObject(songFileRef);
        await deleteObject(songPicFileRef);

        return { success: true, message: "Song deleted successfully" };
    } catch (error) {
        console.error("Error deleting song:", error);
        return { success: false, error: error.message };
    }
}

// Function to add a purchased song to a buyer's song list
async function addPurchasedSongToBuyer(
    buyerId,
    songData,
    songFile,
    songPicFile
) {
    try {
        const songRef = doc(
            db,
            "buyer",
            buyerId,
            "b_song_list",
            songData.song_id
        );

        // Add song data to Firestore
        await setDoc(songRef, {
            song_id: songData.song_id,
            song_by: songData.song_by,
            song_name: songData.song_name,
            song_price: songData.song_price,
            restrictions: songData.restrictions,
            collaborators: songData.collaborators || {},
            song_url: songData.song_url,
        });

        // Upload song file to Cloud Storage
        const songFileRef = ref(
            storage,
            `user_files/buyer/${buyerId}/songs/${songData.song_id}/song.mp3`
        );
        await uploadBytes(songFileRef, songFile);

        // Upload song picture to Cloud Storage
        const songPicFileRef = ref(
            storage,
            `user_files/buyer/${buyerId}/songs/${songData.song_id}/song_pic.jpg`
        );
        await uploadBytes(songPicFileRef, songPicFile);

        return { success: true, message: "Purchased song added successfully" };
    } catch (error) {
        console.error("Error adding purchased song:", error);
        return { success: false, error: error.message };
    }
}

// Function to update user profile picture
async function updateProfilePic(userType, userId, profilePicFile) {
    try {
        const fileRef = ref(
            storage,
            `user_files/${userType}/${userId}/profile_pic.jpg`
        );
        await uploadBytes(fileRef, profilePicFile);
        return { success: true, message: "Profile picture updated successfully" };
    } catch (error) {
        console.error("Error updating profile picture:", error);
        return { success: false, error: error.message };
    }
}

// Export the functions
export {
    addSeller,
    addBuyer,
    addSongToSeller,
    updateSong,
    deleteSong,
    addPurchasedSongToBuyer,
    updateProfilePic,
};












































































// // Function to add a new seller
// async function addSeller(userData) {
//     try {
//       const sellerRef = db.collection('users').doc('seller').doc(userData.uid);
//       await sellerRef.set({
//         name: userData.name,
//         user_name: userData.user_name,
//         email: userData.email,
//         password: userData.password // Note: In practice, never store plain text passwords
//       });
//       return { success: true, message: 'Seller added successfully' };
//     } catch (error) {
//       console.error('Error adding seller:', error);
//       return { success: false, error: error.message };
//     }
//   }

//   // Function to add a new buyer
//   async function addBuyer(userData) {
//     try {
//       const buyerRef = db.collection('users').doc('buyer').doc(userData.uid);
//       await buyerRef.set({
//         name: userData.name,
//         user_name: userData.user_name,
//         email: userData.email,
//         password: userData.password // Note: In practice, never store plain text passwords
//       });
//       return { success: true, message: 'Buyer added successfully' };
//     } catch (error) {
//       console.error('Error adding buyer:', error);
//       return { success: false, error: error.message };
//     }
//   }

//   // Function to add a song to a seller's song list
//   async function addSongToSeller(sellerId, songData, songFile, songPicFile) {
//     try {
//       const songRef = doc(db, 'users', 'seller', sellerId, 's_song_list', songData.song_id);

//       // Add song data to Firestore
//       await setDoc(songRef, {
//         song_id: songData.song_id,
//         song_by: songData.song_by,
//         song_name: songData.song_name,
//         song_price: songData.song_price,
//         restrictions: songData.restrictions,
//         collaborators: songData.collaborators || {}
//       });

//       // Upload song file to Cloud Storage
//       const songFileRef = ref(storage, `user_files/seller/${sellerId}/songs/${songData.song_id}/song.mp3`);
//       await uploadBytes(songFileRef, songFile);

//       // Upload song picture to Cloud Storage
//       const songPicFileRef = ref(storage, `user_files/seller/${sellerId}/songs/${songData.song_id}/song_pic.jpg`);
//       await uploadBytes(songPicFileRef, songPicFile);

//       return { success: true, message: 'Song added successfully' };
//     } catch (error) {
//       console.error('Error adding song:', error);
//       return { success: false, error: error.message };
//     }
//   }

//   // Function to update a song
//   async function updateSong(sellerId, songId, updateData, newSongFile, newSongPicFile) {
//     try {
//       const songRef = db.collection('users').doc('seller').doc(sellerId).collection('s_song_list').doc(songId);

//       // Update song data in Firestore
//       await songRef.update(updateData);

//       // If new song file is provided, update it in Cloud Storage
//       if (newSongFile) {
//         const songFileName = `user_files/seller/${sellerId}/songs/${songId}/song.mp3`;
//         await bucket.file(songFileName).save(newSongFile);
//       }

//       // If new song picture is provided, update it in Cloud Storage
//       if (newSongPicFile) {
//         const songPicFileName = `user_files/seller/${sellerId}/songs/${songId}/song_pic.jpg`;
//         await bucket.file(songPicFileName).save(newSongPicFile);
//       }

//       return { success: true, message: 'Song updated successfully' };
//     } catch (error) {
//       console.error('Error updating song:', error);
//       return { success: false, error: error.message };
//     }
//   }

//   // Function to delete a song
//   async function deleteSong(sellerId, songId) {
//     try {
//       // Delete song data from Firestore
//       const songRef = doc(db, 'users', 'seller', sellerId, 's_song_list', songId);
//       await deleteDoc(songRef);

//       // Delete song files from Cloud Storage
//       const songFileRef = ref(storage, `user_files/seller/${sellerId}/songs/${songId}/song.mp3`);
//       const songPicFileRef = ref(storage, `user_files/seller/${sellerId}/songs/${songId}/song_pic.jpg`);
//       await deleteObject(songFileRef);
//       await deleteObject(songPicFileRef);

//       return { success: true, message: 'Song deleted successfully' };
//     } catch (error) {
//       console.error('Error deleting song:', error);
//       return { success: false, error: error.message };
//     }
//   }

//   // Function to add a purchased song to a buyer's song list
//   async function addPurchasedSongToBuyer(buyerId, songData, songFile, songPicFile) {
//     try {
//       const songRef = db.collection('users').doc('buyer').doc(buyerId).collection('b_song_list').doc(songData.song_id);

//       // Add song data to Firestore
//       await songRef.set({
//         song_id: songData.song_id,
//         song_by: songData.song_by,
//         song_name: songData.song_name,
//         song_price: songData.song_price,
//         restrictions: songData.restrictions,
//         collaborators: songData.collaborators || {}
//       });

//       // Upload song file to Cloud Storage
//       const songFileName = `user_files/buyer/${buyerId}/songs/${songData.song_id}/song.mp3`;
//       await bucket.file(songFileName).save(songFile);

//       // Upload song picture to Cloud Storage
//       const songPicFileName = `user_files/buyer/${buyerId}/songs/${songData.song_id}/song_pic.jpg`;
//       await bucket.file(songPicFileName).save(songPicFile);

//       return { success: true, message: 'Purchased song added successfully' };
//     } catch (error) {
//       console.error('Error adding purchased song:', error);
//       return { success: false, error: error.message };
//     }
//   }

//   // Function to update user profile picture
//   async function updateProfilePic(userType, userId, profilePicFile) {
//     try {
//       const fileName = `user_files/${userType}/${userId}/profile_pic.jpg`;
//       await bucket.file(fileName).save(profilePicFile);
//       return { success: true, message: 'Profile picture updated successfully' };
//     } catch (error) {
//       console.error('Error updating profile picture:', error);
//       return { success: false, error: error.message };
//     }
//   }
