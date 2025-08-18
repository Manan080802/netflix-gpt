// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyBeB17rlpWtYGNi_piZpKRxj43nO9wtW_k",
  authDomain: "netflixgpt-45bc2.firebaseapp.com",
  projectId: "netflixgpt-45bc2",
  storageBucket: "netflixgpt-45bc2.firebasestorage.app",
  messagingSenderId: "604414320640",
  appId: "1:604414320640:web:2917d421a9edfe32d638e5",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth();
