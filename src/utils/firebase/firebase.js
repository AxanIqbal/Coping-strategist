// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyArcefHqC_Q-HIba-e6AK6bwhj6smoLyIM',
  authDomain: 'coping-strategist.firebaseapp.com',
  projectId: 'coping-strategist',
  storageBucket: 'coping-strategist.appspot.com',
  messagingSenderId: '690592260860',
  appId: '1:690592260860:web:7d54c906eae14042b1ed79',
  measurementId: 'G-MW9L28NTMM',
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const firestore = getFirestore(firebaseApp);
