import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
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

  const signInWithGoggle = (provider) => {
    return signInWithPopup(auth, provider);
  };

  // update user profile
  const updateUserProfile = (name,photoURL)=>{
    return updateProfile(auth.currentUser,{
      displayName:name,
      photoURL:photoURL
    });
  }

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
    return signOut(auth);
  };
  const authInformation = {
    user,
    handleSignOut,
    createUserWithPassword,
    signInWithEmailPass,
    signInWithGoggle,
    updateUserProfile
  };
  return (
    <AuthContext.Provider value={authInformation}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
