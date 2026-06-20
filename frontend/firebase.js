// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "vingo-4f5b4.firebaseapp.com",
  projectId: "vingo-4f5b4",
  storageBucket: "vingo-4f5b4.firebasestorage.app",
  messagingSenderId: "732320279605",
  appId: "1:732320279605:web:f8be3bb5a659c23228157c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export {app,auth}