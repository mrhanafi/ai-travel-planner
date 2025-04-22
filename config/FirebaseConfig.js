// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBShqkHhFD8xV2UqvEh-WvsT0-n3yP-dgY",
  authDomain: "ai-travel-planner-aa6e7.firebaseapp.com",
  projectId: "ai-travel-planner-aa6e7",
  storageBucket: "ai-travel-planner-aa6e7.firebasestorage.app",
  messagingSenderId: "699260516970",
  appId: "1:699260516970:web:8a610cf6ba17f21e0e2813"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);