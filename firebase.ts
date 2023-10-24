// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: 'chatgpt-messenger-d3d3d.firebaseapp.com',
  projectId: 'chatgpt-messenger-d3d3d',
  storageBucket: 'chatgpt-messenger-d3d3d.appspot.com',
  messagingSenderId: '403077572258',
  appId: '1:403077572258:web:8a5398526150c6e58999fb',
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
const db = getFirestore(app);

export { db }
