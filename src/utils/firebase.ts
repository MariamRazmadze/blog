// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-489117.firebaseapp.com",
  projectId: "blog-489117",
  storageBucket: "blog-489117.firebasestorage.app",
  messagingSenderId: "471526852798",
  appId: "1:471526852798:web:b695a968273608c00476ef",
  measurementId: "G-GX44VS7MGN",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
