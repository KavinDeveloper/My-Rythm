// Firebase web configuration is public and safe to place in GitHub Pages.
// Replace null with the config object from Firebase Console > Project settings > Your apps.
window.MY_RHYTHM_FIREBASE_CONFIG = // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCK9oOo2d9y-8fotWXmr-jkplLK5e1sI74",
  authDomain: "my-rythm-c0dfa.firebaseapp.com",
  projectId: "my-rythm-c0dfa",
  storageBucket: "my-rythm-c0dfa.firebasestorage.app",
  messagingSenderId: "78731741204",
  appId: "1:78731741204:web:d91651a0e12b74a4963f01",
  measurementId: "G-MBNL6GMP2F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);;
