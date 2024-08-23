import { signOut ,getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { addBuyer, addSeller } from "./Data";
// import { db } from "..";
// import { doc, setDoc } from "firebase/firestore"; 
// import { ManageAccountsRounded } from "@mui/icons-material";



// const add_user_seller = async (uid) => {
//     await setDoc(doc(db, "users", "seller", uid), {
//         name: "Los Angeles",
//         state: "CA",
//         country: "USA"
//     });
// }

const auth = getAuth();

export const sign_out = () => {
    signOut(auth).then(() => {
        return { success: true, message: "Seller SignOut successfully" };
      }).catch((error) => {
        return { success: false, message: "Seller SignOut failed" };
      });
}



export const sign_up_seller = (email, password, name, user_name) => {
    // const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            addSeller(email, password, name, user_name, user.uid.toString())
            return user.uid.toString()
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
}

export const sign_up_buyer = (email, password, name, user_name) => {
    // const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            addBuyer(email, password, name, user_name, user.uid.toString())
            return user.uid.toString()
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
}

export const sign_in_seller = (email, password) => {
    // const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            return user.uid.toString()
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
}





export const sign_in_buyer = (email, password) => {
    // const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            return user.uid.toString()
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
}
























// {
//     "users" : {
//         "seller" : {
//             "uid" : {
//                 "name" : "String",
//                 "user_name" : "String",
//                 "email" : "String",
//                 "password" : "String",
//                 "sold_to" : {
//                     "uid" : {
//                         "uid" : "String",
//                         "name" : "String",
//                         "user_name" : "String",
//                         "email" : "String",
//                         "song_by" : "String",
//                         "song_name" : "String",
//                         "song_price" : "String",
//                         "song_id" : "String",
//                         "time" : "String"
//                     }
//                 },
//                 "s_song_list": {
//                     "song_id": {
//                         "song_id": "String",
//                         "song_by": "String",
//                         "song_name": "String",
//                         "song_price": "String",
//                         "restrictions": "String",
//                         "collaborators" : {
//                             "uid": {
//                                 "uid": "String",
//                                 "name": "String",
//                                 "user_name": "String",
//                                 "email": "String",
//                         }
//                     }
//                 }

//             }
//         },
//         "buyer" : {
//             "uid" : {
//                 "name" : "String",
//                 "user_name" : "String",
//                 "email" : "String",
//                 "password" : "String",
//                 "b_song_list": {
//                     "song_id": {
//                         "song_id": "String",
//                         "song_by": "String",
//                         "song_name": "String",
//                         "song_price": "String",
//                         "restrictions": "String",
//                         "collaborators" : {
//                             "uid": {
//                                 "uid": "String",
//                                 "name": "String",
//                                 "user_name": "String",
//                                 "email": "String",
//                         }
//                     }
//                 }

//             }
//         },
//         },
//     } 
// } 

// write firebase code to add, update, delete items. the above is the hierarchal structure of how
// i want to store my data. write functions to add user data for seller and buyer, please write a optimal code. 




// Store Files in Firebase Cloud Storage
// {
//     "user_files" : {
//         "buyer": {
//             "uid": {
//                 "songs": {
//                     "song_id": {
//                         "song_pic": "picture, stored in a file",
//                         "song": ".mp3 file, stored in a file"
//                     }
//                 },
//                 "profile_pic": "picture, stored in a file",
//             }
//         },
//         "seller": {
//             "uid": {
//                 "songs": {
//                     "song_id": {
//                         "song_pic": "picture, stored in a file",
//                         "song": ".mp3 file, stored in a file"
//                     }
//                 },
//                 "profile_pic": "picture, stored in a file",
//             }
//         }
//     }
// }

// above is the hierarchal structure for storing files in firebase cloud store, write a code to store files of 
// both seller and buyer in the above manner. 

// sometimes adding, deleting and updating data to firestore and files to cloud storage goes hand in hand, i want you to
// write a function that can handle both operations at the same time but accourding to its need.