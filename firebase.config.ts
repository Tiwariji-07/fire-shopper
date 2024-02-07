// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIWC2zo-WxKQYj_-6NsIcp-05RqwOwIyQ",
  authDomain: "dukaan-94180.firebaseapp.com",
  projectId: "dukaan-94180",
  storageBucket: "dukaan-94180.appspot.com",
  messagingSenderId: "528962618523",
  appId: "1:528962618523:web:4654dc58fa9384f6d3f23e",
  measurementId: "G-Y5LBTEEYJD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);

const storage = getStorage(app);

export { db, storage };
