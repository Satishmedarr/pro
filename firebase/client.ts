
import { initializeApp, getApp, getApps } from "firebase/app";
import {getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyD3Q8cEEzLe6NQOV8zF_zyc-dDsN3ktXfk",
  authDomain: "prepwise-2839d.firebaseapp.com",
  projectId: "prepwise-2839d",
  storageBucket: "prepwise-2839d.firebasestorage.app",
  messagingSenderId: "486913190463",
  appId: "1:486913190463:web:180f122c1451ab8d1b668a",
  measurementId: "G-2FGVCCLCEW"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
