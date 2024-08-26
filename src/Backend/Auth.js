import { signOut ,getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { addBuyer, addSeller } from "./Data";














const auth = getAuth();

export const sign_out = () => {
    signOut(auth).then(() => {
        return { success: true, message: ".." };
      }).catch((error) => {
        return { success: false, message: "firebase/firestore" };
      });
}



export const sign_up_seller = (email, password, name, user_name) => {
    
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            addSeller(email, password, name, user_name, user.uid.toString())
            return user.uid.toString()
            
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            
        });
}

export const sign_up_buyer = (email, password, name, user_name) => {
    
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            
            const user = userCredential.user;
            addBuyer(email, password, name, user_name, user.uid.toString())
            return user.uid.toString()
            
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            
        });
}

export const sign_in_seller = (email, password) => {
    
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            
            const user = userCredential.user;
            return user.uid.toString()
            
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            
        });
}





export const sign_in_buyer = (email, password) => {
    
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            
            const user = userCredential.user;
            return user.uid.toString()
            
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            
        });
}



































































































































