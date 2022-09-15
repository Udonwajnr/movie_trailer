// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8qGP1JQQX5uy1bnfnvmcxn8v4-RpsMXY",
  authDomain: "movie-time-37410.firebaseapp.com",
  projectId: "movie-time-37410",
  storageBucket: "movie-time-37410.appspot.com",
  messagingSenderId: "409152225597",
  appId: "1:409152225597:web:d53569c4214432a3f0c554",
  measurementId: "G-CP70WH9FLK"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
