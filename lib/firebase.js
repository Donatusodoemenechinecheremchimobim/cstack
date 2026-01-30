import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // <--- ADDED THIS

// Your Configuration
const firebaseConfig = {
  apiKey: "AIzaSyDelrl0hgsrMWWELg4YXcHW_HlrLWBAPkM",
  authDomain: "cstack-6288e.firebaseapp.com",
  projectId: "cstack-6288e",
  storageBucket: "cstack-6288e.firebasestorage.app",
  messagingSenderId: "927804433300",
  appId: "1:927804433300:web:de5239edd80806f748a581",
  measurementId: "G-TJDTKFLNQJ"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Initialize Services
const auth = getAuth(app);
const db = getFirestore(app); // <--- ADDED THIS (The Database Connection)
const googleProvider = new GoogleAuthProvider();

// Export them so other files can use them
export { auth, googleProvider, db };