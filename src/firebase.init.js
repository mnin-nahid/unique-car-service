// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgWAanfAcpxhpUjCbN0lAByxE6-bDejiY",
  authDomain: "unique-car-service.firebaseapp.com",
  projectId: "unique-car-service",
  storageBucket: "unique-car-service.appspot.com",
  messagingSenderId: "218222334532",
  appId: "1:218222334532:web:262e2fd3b8e7052b3d2211"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;