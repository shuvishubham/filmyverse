import { initializeApp } from "firebase/app";
import {getFirestore, collection} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCtD5gFfO9Bwu4YXCgmZtpNQc9h2y1sjwY",
  authDomain: "filmyverse-85261.firebaseapp.com",
  projectId: "filmyverse-85261",
  storageBucket: "filmyverse-85261.appspot.com",
  messagingSenderId: "321991045980",
  appId: "1:321991045980:web:10c03c5c285bdca6538799"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const moviesRef = collection(db, "movies");
export const reviewsRef = collection(db, "reviews");
export const usersRef = collection(db, "users");

export default app;