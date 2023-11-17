// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDR0eiZhswnpBusEBVxSn3AF-0mMzrq66I",
  authDomain: "netflixgpt-7e789.firebaseapp.com",
  projectId: "netflixgpt-7e789",
  storageBucket: "netflixgpt-7e789.appspot.com",
  messagingSenderId: "529612988231",
  appId: "1:529612988231:web:fc342ea5e598500c723662",
  measurementId: "G-6K0DTLCVYB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//exporting this method from here, since every firebase api requires this auth data
export const auth = getAuth();
