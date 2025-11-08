// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// 🔥 Your Firebase config (from google-services.json)
const firebaseConfig = {
  apiKey: "AIzaSyBku2qgN1ftioVdfNcvnDgCWSkN9mwx0iA",
  authDomain: "pulse-f5547.firebaseapp.com",
  projectId: "pulse-f5547",
  storageBucket: "pulse-f5547.firebasestorage.app",
  messagingSenderId: "748217789233",
  appId: "1:748217789233:android:245256b646a47bcb129e10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
