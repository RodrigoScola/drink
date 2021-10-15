import React from "react";
import firebase from "firebase/compat/app";
import { useAuthState } from "react-firebase-hooks/auth";
import app, { auth } from "./firebase";

export const SignIN = () => {
  const [user] = useAuthState(auth);
  const signInWithGoogle = () => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
    } catch (err) {}
  };
  return <button onClick={signInWithGoogle}>Sign in with google</button>;
};
export const GetUser = async () => {
  let user = await useAuthState(auth);
  if (user) {
    return user;
  }
};
