// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBoxo-HJXOMkFVp5FTBp6b3a9Uz_txC8Qk",
    authDomain: "elearning-ba6eb.firebaseapp.com",
    projectId: "elearning-ba6eb",
    storageBucket: "elearning-ba6eb.appspot.com",
    messagingSenderId: "48951181895",
    appId: "1:48951181895:web:9d56c9467e74be86c52762"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);