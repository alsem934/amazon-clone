//
// 



//  Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMAR-cjj3HQqhUqH7sTskagvNTB3gHAKE",
  authDomain: "clone-5a47c.firebaseapp.com",
  projectId: "clone-5a47c",
  storageBucket: "clone-5a47c.firebasestorage.app",
  messagingSenderId: "257563183410",
  appId: "1:257563183410:web:afcdb448a5aa3e23d4af2b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth and Firestore
export const auth = getAuth(app);
export const db = getFirestore(app);