import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDaUitBcy17bNrIUZ1l5bI3yBkyAF_lSps",
  authDomain: "todoapp-cc8ba.firebaseapp.com",
  projectId: "todoapp-cc8ba",
  storageBucket: "todoapp-cc8ba.appspot.com",
  messagingSenderId: "327285561962",
  appId: "1:327285561962:web:afdbd615b7eb492b2f0813",
  measurementId: "G-YEJX4F991Q"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export {
  auth,
  db
}