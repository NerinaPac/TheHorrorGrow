// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "thehorrorgrow-a30cc.firebaseapp.com",
  projectId: "thehorrorgrow-a30cc",
  storageBucket: "thehorrorgrow-a30cc.firebasestorage.app",
  messagingSenderId: "874329819790",
  appId: "1:874329819790:web:d3201dc12c8289bb7fd7df",
  measurementId: "G-E1FQ615ZNN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
