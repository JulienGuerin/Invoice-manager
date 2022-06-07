// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_AK,
  authDomain: "invoices-1659e.firebaseapp.com",
  projectId: "invoices-1659e",
  storageBucket: "invoices-1659e.appspot.com",
  messagingSenderId: "615516416972",
  appId: "1:615516416972:web:17a247141c39694c3b0b69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;