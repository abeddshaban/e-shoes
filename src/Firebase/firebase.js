import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// import { onAuthStateChanged } from "firebase/auth";
import { getAuth } from "firebase/auth";

const app = initializeApp({
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID,
  // measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
  apiKey: "AIzaSyA-f3wgnW8k-hd7fEh3UM6_FPsRgrSxGQ4",
  authDomain: "e-shoes-development.firebaseapp.com",
  projectId: "e-shoes-development",
  storageBucket: "e-shoes-development.appspot.com",
  messagingSenderId: "523133246403",
  appId: "1:523133246403:web:30cc1e50d0f810afb3bb76",
  measurementId: "G-8YGY687DZW",
});

// const analytics = getAnalytics(firebaseApp);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
