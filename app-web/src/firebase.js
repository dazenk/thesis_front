// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtR87uIAD5JuBMIavMXpaBvi7TMuHuUuY",
  authDomain: "prueba-tesis-8e65c.firebaseapp.com",
  projectId: "prueba-tesis-8e65c",
  storageBucket: "prueba-tesis-8e65c.appspot.com",
  messagingSenderId: "961014574135",
  appId: "1:961014574135:web:4349de69d7a2f7856b63b2",
  measurementId: "G-Y3CMD963GP"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);