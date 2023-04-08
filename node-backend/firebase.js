// Import the functions you need from the SDKs you need
import { initializeApp} from "firebase/app";
import { getDatabase } from "firebase/database";

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
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

