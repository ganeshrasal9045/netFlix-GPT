// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4HgZnNxKYpv5W6e377_JijBxfKECOUtI",
  authDomain: "netflix-gpt-ea0a5.firebaseapp.com",
  projectId: "netflix-gpt-ea0a5",
  storageBucket: "netflix-gpt-ea0a5.appspot.com",
  messagingSenderId: "1068391440727",
  appId: "1:1068391440727:web:9e89b91f72fef892a51e12",
  measurementId: "G-YNVQ5QK04Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();