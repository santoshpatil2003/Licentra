// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCgmeH-qVOWAzuFmVk-G624HV5zPJvRmVU",
    authDomain: "licentra.firebaseapp.com",
    projectId: "licentra",
    storageBucket: "licentra.appspot.com",
    messagingSenderId: "1013334045085",
    appId: "1:1013334045085:web:64d13310d04a0e9366bf74",
    measurementId: "G-P4P70MLCCW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
