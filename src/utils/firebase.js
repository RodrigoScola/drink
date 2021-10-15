import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBoZHU8r-kx5e7Km4cFeVfPofadrARlh1I",
  authDomain: "drink0-dev.firebaseapp.com",
  projectId: "drink0-dev",
  storageBucket: "drink0-dev.appspot.com",
  messagingSenderId: "985581200176",
  appId: "1:985581200176:web:13e0db70296da9fa35def5",
  measurementId: "G-C917XYJBJK",
});
export const auth = app.auth();
export default app;
