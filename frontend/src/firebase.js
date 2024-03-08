// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-826c1.firebaseapp.com",
  projectId: "mern-blog-826c1",
  storageBucket: "mern-blog-826c1.appspot.com",
  messagingSenderId: "426336555472",
  appId: "1:426336555472:web:02a392fb81611d3a4269d5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);