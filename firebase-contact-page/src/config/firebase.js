// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCn6xL6ZLfBHiQ0MfyEliqwYANy0NGuzSs",
  authDomain: "vite-contact-a3d3c.firebaseapp.com",
  projectId: "vite-contact-a3d3c",
  storageBucket: "vite-contact-a3d3c.appspot.com",
  messagingSenderId: "327086499298",
  appId: "1:327086499298:web:e3152a15b2000243ef05bb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);