"use client";
import { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../lib/firebase';
import { useRouter } from 'next/navigation';
import Preloader from '../components/Preloader'; // <--- IMPORT THIS

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser ? currentUser : null);
      // Keep the loader visible for at least 1.5 seconds so it looks cool
      setTimeout(() => setLoading(false), 1500); 
    });
    return () => unsubscribe();
  }, []);

  const logOut = async () => {
    try {
      await signOut(auth);
      router.push('/');
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, logOut }}>
      {loading ? <Preloader /> : children} {/* <--- SHOW PRELOADER HERE */}
    </AuthContext.Provider>
  );
};