// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAivklZsQlTqMY42fF5PmbJyORQcEF79fw",
  authDomain: "ema-jhon-simple-64002.firebaseapp.com",
  projectId: "ema-jhon-simple-64002",
  storageBucket: "ema-jhon-simple-64002.appspot.com",
  messagingSenderId: "593691943592",
  appId: "1:593691943592:web:d479e0e861e1811aa6989d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app)

export default auth;