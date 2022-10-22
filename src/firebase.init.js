// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBbldO06yHrkldZe9IvXM6XkLSXWxd0pbw",
  authDomain: "tailwindcssauth.firebaseapp.com",
  projectId: "tailwindcssauth",
  storageBucket: "tailwindcssauth.appspot.com",
  messagingSenderId: "147104837936",
  appId: "1:147104837936:web:659b0cf1f225dabe0758f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth