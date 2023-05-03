import React, { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/firebase.config";
import { GithubAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const GoogleProvider = new GoogleAuthProvider();
const GithubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [userLogin, setUserLogin] = useState("");
  const [loading, setLoading] = useState(true);

  const EmailRegister = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const EmailLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const GoogleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, GoogleProvider);
  };

  const LogOut = () => {
    return signOut(auth);
  };

  const GithubLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, GithubProvider);
  };

  const profileUpdate = (updatedUser, displayProfileName, displayPhotoURL) => {
    return updateProfile(updatedUser, {
      displayName: displayProfileName,
      photoURL: displayPhotoURL,
    });
  };

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      setUserLogin(user);
      setLoading(false);
    });
    return () => unSub();
  }, []);

  const authData = {
    userLogin,
    EmailRegister,
    EmailLogin,
    GoogleLogin,
    LogOut,
    loading,
    profileUpdate,
    GithubLogin,
  };

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
