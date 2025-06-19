// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBX4znutXi-XC6EUbwdSLngPqIjtsCZGM8",
  authDomain: "visitor-counter-ebb3a.firebaseapp.com",
  projectId: "visitor-counter-ebb3a",
  storageBucket: "visitor-counter-ebb3a.firebasestorage.app",
  messagingSenderId: "989294870737",
  appId: "1:989294870737:web:da780be3e97f8b8a6705f0",
  measurementId: "G-M2KQVCVLLM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export {db, app, analytics};