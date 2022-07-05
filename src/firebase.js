// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "XXXXXXXXX-XXXXXXXXX-XXXXXXXXXX",
  authDomain: "clone-uz-9fd7d.firebaseapp.com",
  projectId: "clone-uz-9fd7d",
  storageBucket: "clone-uz-9fd7d.appspot.com",
  messagingSenderId: "128354011056",
  appId: "1:128354011056:web:6304bb7b58ffb1a8863875"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
