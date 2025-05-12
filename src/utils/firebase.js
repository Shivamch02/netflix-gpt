// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9gx8twZJ2JxLRU0-mufYPIarDlwZaOEY",
  authDomain: "netflixgpt-2edc4.firebaseapp.com",
  projectId: "netflixgpt-2edc4",
  storageBucket: "netflixgpt-2edc4.appspot.com",
  messagingSenderId: "1093012228828",
  appId: "1:1093012228828:web:cca2349c6bd59dcda30219",
  measurementId: "G-7WXWF1FM0W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
