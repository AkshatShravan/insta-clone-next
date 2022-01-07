// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAO8NI0dYu8a7FRDkqmDur7wx8hUj10PXE",
  authDomain: "instagram-clone-88b19.firebaseapp.com",
  projectId: "instagram-clone-88b19",
  storageBucket: "instagram-clone-88b19.appspot.com",
  messagingSenderId: "110790558136",
  appId: "1:110790558136:web:b3029f280f27ebf3b1cf4d"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export {app, db, storage}