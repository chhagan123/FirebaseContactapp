// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdrmgwi836weMFa9Wc3ck8ut7lN82A9VM",
  authDomain: "vite-project-96556.firebaseapp.com",
  projectId: "vite-project-96556",
  storageBucket: "vite-project-96556.appspot.com",
  messagingSenderId: "345163674490",
  appId: "1:345163674490:web:e1fe4593738495ed3bdcc3",
  measurementId: "G-PQ139152T5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);