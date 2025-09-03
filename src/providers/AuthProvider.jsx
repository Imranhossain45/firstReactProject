import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const createUserWithPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInWithEmailPass = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("Logged in user");
        setUser(user);
      } else {
        console.log("User not found");
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);
  const handleSignOut = () => {
    signOut(auth);
  };
  const authInformation = {
    user,
    handleSignOut,
    createUserWithPassword,
    signInWithEmailPass,
  };
  return (
    <AuthContext.Provider value={authInformation}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
