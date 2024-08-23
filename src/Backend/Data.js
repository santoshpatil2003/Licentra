import { doc, setDoc, updateDoc, deleteDoc, getDoc, getDocs, collection, query } from "firebase/firestore";
import { ref, uploadBytes, deleteObject, getDownloadURL } from "firebase/storage";
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


export async function getSeller(sellerId) {
    try {
        const sellerRef = doc(db, 'users', 'seller', sellerId, 'data');
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

export async function getUserBack2(sellerId) {
    try {
        const sellerRef = doc(db, 'users', 'buyer', sellerId, 'data');
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

export async function getUserBack(sellerId) {
    try {
        const sellerRef = doc(db, 'users', 'seller', sellerId, 'data');
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
            const result = getUserBack2(sellerId)
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
        const sellerRef = doc(db, "users", "seller", uid, 'data');
        await setDoc(sellerRef, {
            name: name,
            user_name: user_name,
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
        const buyerRef = doc(db, "users", "buyer", uid, 'data');
        await setDoc(buyerRef, {
            name: name,
            user_name: user_name,
            email: email,
            password: password, // Note: In practice, never store plain text passwords
        });
        return { success: true, message: "Buyer added successfully" };
    } catch (error) {
        console.error("Error adding buyer:", error);
        return { success: false, error: error.message };
    }
}

export async function getBuyer(buyerId) {
    try {
        const buyerRef = doc(db, 'users', 'buyer', buyerId, 'data');
        const buyerSnap = await getDoc(buyerRef);

        if (buyerSnap.exists()) {
            const buyerData = buyerSnap.data();
            // Omit sensitive information like password
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

        return { success: true, message: "Song download initiated", song : downloadURL };
    } catch (error) {
        console.error("Error downloading song:", error);
        return { success: false, error: error.message };
    }
}

// Function to add a song to a seller's song list
async function addSongToSeller(uid, songData, songFile, songPicFile) {
    const date = Date.now()
    let songid = date.toString()
    try {
        // console.log(date.toString()) 
        const songRef = doc(
            db,
            "users",
            "seller",
            uid,
            'data',
            "s_song_list",
            songid
        );

        // Upload song file to Cloud Storage
        const songFileRef = ref(
            storage,
            `user_files/seller/${uid}/songs/${songid}/${songData.song_name}.mp3`
        );
        await uploadBytes(songFileRef, songFile);

        // Upload song picture to Cloud Storage
        const songPicFileRef = ref(
            storage,
            `user_files/seller/${uid}/songs/${songid}/${songData.song_name}.jpg`
        );
        await uploadBytes(songPicFileRef, songPicFile);

        const songPicUrl = await getDownloadURL(songPicFileRef);

        // Add song data to Firestore
        await setDoc(songRef, {
            song_id: songid,
            song_by: songData.song_by,
            song_pic_url: songPicUrl,
            song_name: songData.song_name,
            song_price: songData.song_price,
            restrictions: songData.restrictions,
            collaborators: songData.collaborators || [],
        });

        let d = {
            song_id: songid,
            song_by: songData.song_by,
            seller_id: uid,
            song_pic_url: songPicUrl,
            song_name: songData.song_name,
            song_price: songData.song_price,
            restrictions: songData.restrictions,
            collaborators: songData.collaborators || [],
        }

        let result = await addSongToGlobal(uid, d, songid)

        return { success: result.success, message: result.message };
    } catch (error) {
        console.error("Error adding song:", error);
        return { success: false, error: error.message };
    }
}


async function getSongDataOfSeller(uid, songid) {
    try {
        const songRef = doc(
            db,
            "users",
            "seller",
            uid,
            'data',
            "s_song_list",
            songid
        );

        // Get song data from Firestore
        const songDoc = await getDoc(songRef);

        if (!songDoc.exists()) {
            return { success: false, error: "Song not found" };
        }

        const songData = songDoc.data();

        // Get song file URL from Cloud Storage
        const songFileRef = ref(
            storage,
            `user_files/seller/${uid}/songs/${songid}/${songData.song_name}.mp3`
        );
        const songUrl = await getDownloadURL(songFileRef);

        // Get song picture URL from Cloud Storage
        const songPicFileRef = ref(
            storage,
            `user_files/seller/${uid}/songs/${songid}/${songData.song_name}.jpg`
        );
        const songPicUrl = await getDownloadURL(songPicFileRef);

        return {
            success: true,
            songData: {
                ...songData,
                songUrl,
                songPicUrl
            }
        };
    } catch (error) {
        console.error("Error getting song data:", error);
        return { success: false, error: error.message };
    }
}

export async function getSongDataSellerAll(uid) {
    try {
        const songListRef = collection(
            db,
            "users",
            "seller",
            uid,
            'data',
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

// Function to update a song
async function updateSong(
    uid,
    songId,
    updateData,
    newSongFile,
    newSongPicFile
) {
    try {
        const songRef = doc(db, "users", "seller", uid, "s_song_list", songId);

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
        const songRef = doc(db, "users", "seller", uid, "s_song_list", songId);
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
            "users",
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
