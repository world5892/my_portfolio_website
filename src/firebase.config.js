// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBgpASOtAANSX4-m4MZYzRjCikBgnbEJsY',
  authDomain: 'my-portfolio-ead7a.firebaseapp.com',
  projectId: 'my-portfolio-ead7a',
  storageBucket: 'my-portfolio-ead7a.appspot.com',
  messagingSenderId: '815611491196',
  appId: '1:815611491196:web:2520c0cce45b4513952af9',
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
