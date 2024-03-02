// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmpesQf4QdryTQnFZFj5YP5BTQYhmj3iI",
  authDomain: "startup2-a08a8.firebaseapp.com",
  projectId: "startup2-a08a8",
  storageBucket: "startup2-a08a8.appspot.com",
  messagingSenderId: "69934795768",
  appId: "1:69934795768:web:329628a6fe6d7c892a240d",
  measurementId: "G-JRE9P1QGWF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default firebaseConfig;