// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// 🔥 Replace the below config with YOUR Firebase project details
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_APP.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_APP.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Authentication & Firestore
const auth = getAuth(app);
const db = getFirestore(app);

// Export so other files can use it
export { auth, db };
