import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyArIR6hrdAUhskCSU1hwzdCYVS99T0eplg",
  authDomain: "pureessence-e936f.firebaseapp.com",
  projectId: "pureessence-e936f",
  storageBucket: "pureessence-e936f.firebasestorage.app",
  messagingSenderId: "977947625558",
  appId: "1:977947625558:web:b5f3c2a607d0519571d3f7",
  measurementId: "G-S4PGBCLYPC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
