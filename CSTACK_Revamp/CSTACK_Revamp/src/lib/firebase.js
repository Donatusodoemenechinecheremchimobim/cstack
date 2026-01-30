import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// 🔴 REPLACE THESE WITH YOUR REAL FIREBASE KEYS
const firebaseConfig = {
  apiKey: "YOUR_API_KEY_HERE",
  authDomain: "cstack-project.firebaseapp.com",
  projectId: "cstack-project",
  storageBucket: "cstack-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:12345:web:abc"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

export { auth, db, googleProvider };
