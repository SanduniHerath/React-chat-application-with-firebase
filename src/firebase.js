import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBS0cAarHmftPXt14RqMSjyBdq1LOokoUc",
  authDomain: "chatapp-7e4f1.firebaseapp.com",
  projectId: "chatapp-7e4f1",
  storageBucket: "chatapp-7e4f1.appspot.com",
  messagingSenderId: "88390215689",
  appId: "1:88390215689:web:d92975efc03329f41bf0d8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()