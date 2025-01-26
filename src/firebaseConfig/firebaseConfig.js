// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIY5vmslVBnDeT0TdaDBQIgWHwPZ0MArk",
  authDomain: "react-assignment-bc540.firebaseapp.com",
  projectId: "react-assignment-bc540",
  storageBucket: "react-assignment-bc540.firebasestorage.app",
  messagingSenderId: "489500281260",
  appId: "1:489500281260:web:1143426df1588cfe801209",
  measurementId: "G-XD15WBVEH4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//init firestore
const db = getFirestore(app);
const analytics = getAnalytics(app);

// export default db;
export {app, db};

