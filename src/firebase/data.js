// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsNDiFC2UAsCsdz8-jyZ2jSiMwiIl72KM",
  authDomain: "tecnob-c7d6a.firebaseapp.com",
  projectId: "tecnob-c7d6a",
  storageBucket: "tecnob-c7d6a.appspot.com",
  messagingSenderId: "528333295029",
  appId: "1:528333295029:web:d07a32d65e953385929dfc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);