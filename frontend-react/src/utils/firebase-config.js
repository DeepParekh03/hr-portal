// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBjpMx6w9j8q0XAOBpL7P1lerTu8C5J9Dw",
  authDomain: "csi-hojayega.firebaseapp.com",
  databaseURL: "https://csi-hojayega-default-rtdb.firebaseio.com/",
  projectId: "csi-hojayega",
  storageBucket: "csi-hojayega.appspot.com",
  messagingSenderId: "650017040853",
  appId: "1:650017040853:web:7510913688939d5da9f55c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
export const storage = getStorage(app);
