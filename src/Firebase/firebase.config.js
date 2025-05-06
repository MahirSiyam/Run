// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEAfcBMPKgkHuqkAUi-1M4SpFakaAkwUo",
  authDomain: "marathon-run-project.firebaseapp.com",
  projectId: "marathon-run-project",
  storageBucket: "marathon-run-project.firebasestorage.app",
  messagingSenderId: "184280654562",
  appId: "1:184280654562:web:97be2b8afb36834f26f4bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;