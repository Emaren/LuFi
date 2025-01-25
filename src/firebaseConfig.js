// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics"; // Optional: Analytics
import { getAuth } from "firebase/auth"; // For authentication
import { getDatabase } from "firebase/database"; // For Realtime Database
import { getFirestore } from "firebase/firestore"; // For Firestore Database

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJbpNARrIxdUTCGm2xgcQ_lUwZuZkURCQ",
  authDomain: "lufi-6bcbc.firebaseapp.com",
  databaseURL: "https://lufi-6bcbc-default-rtdb.firebaseio.com",
  projectId: "lufi-6bcbc",
  storageBucket: "lufi-6bcbc.appspot.com",
  messagingSenderId: "883059154331",
  appId: "1:883059154331:web:d05835d66525e26cf0553e",
  measurementId: "G-0S3E6V8ZT5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); // Initialize Analytics (Optional)
export const auth = getAuth(app); // Export Firebase Authentication
export const db = getDatabase(app); // Export Realtime Database
export const firestore = getFirestore(app); // Export Firestore Database
