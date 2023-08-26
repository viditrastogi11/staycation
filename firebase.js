// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUS37l-_4281j3JdzL2ScAWdH3H74uWmg",
  authDomain: "hodo-travel.firebaseapp.com",
  projectId: "hodo-travel",
  storageBucket: "hodo-travel.appspot.com",
  messagingSenderId: "536887019713",
  appId: "1:536887019713:web:8a0f8c3a26eec339616c40",
  measurementId: "G-8LQ591Y9QP"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);