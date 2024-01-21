import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCkmO0H1ridZkav1Aleh18AYEEb4JoUoYE",
  authDomain: "chat-89130.firebaseapp.com",
  projectId: "chat-89130",
  storageBucket: "chat-89130.appspot.com",
  messagingSenderId: "801043327752",
  appId: "1:801043327752:web:04cd2e431891f203771abd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();