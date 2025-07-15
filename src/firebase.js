// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FRAPI_KEY,
  authDomain: "visitor-counter-ebb3a.firebaseapp.com",
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: "visitor-counter-ebb3a.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FR_MSGID,
  appId: import.meta.env.VITE_FR_APPID,
  measurementId: import.meta.env.VITE_FR_MEASUREMENTID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export {db, app, analytics};