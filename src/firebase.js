// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAUS3XFapG2nS5uZMBlBmM_bdBtfqCPOVM",
    authDomain: "clone-fc814.firebaseapp.com",
    projectId: "clone-fc814",
    storageBucket: "clone-fc814.appspot.com",
    messagingSenderId: "676053938562",
    appId: "1:676053938562:web:b5608a62d554bd8faf1f9b",
    measurementId: "G-3QFENX0Z7V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();