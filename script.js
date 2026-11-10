// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiz9EgMseugEBSriGwt8AvzHA29lYtTJ8",
  authDomain: "royalindiabyspicytwist.firebaseapp.com",
  projectId: "royalindiabyspicytwist",
  storageBucket: "royalindiabyspicytwist.firebasestorage.app",
  messagingSenderId: "141505812599",
  appId: "1:141505812599:web:8002e0dd7e0e950e034e72",
  measurementId: "G-1XGWKKY03J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
