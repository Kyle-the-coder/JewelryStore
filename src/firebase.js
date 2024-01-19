// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnZTZ2ScR17z6g5HyNn2p4WMDXfmzsn8A",
  authDomain: "jewelrystore-c8dfc.firebaseapp.com",
  projectId: "jewelrystore-c8dfc",
  storageBucket: "jewelrystore-c8dfc.appspot.com",
  messagingSenderId: "199273816776",
  appId: "1:199273816776:web:340d2b78c7a2aea01e7bfd",
  measurementId: "G-9MCFR2H0D0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
