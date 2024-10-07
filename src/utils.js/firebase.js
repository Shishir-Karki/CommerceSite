// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration (replace with your own)
const firebaseConfig = {
    apiKey: "AIzaSyCZ-_1V7f3XiWUdGPMylR6Gq9buoP4yS1Q",
    authDomain: "commerce-7c4d3.firebaseapp.com",
    projectId: "commerce-7c4d3",
    storageBucket: "commerce-7c4d3.appspot.com",
    messagingSenderId: "855125034217",
    appId: "1:855125034217:web:972577752b72a22c855c78",
    measurementId: "G-KZGEQ3BVHN"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
export const auth = getAuth(app);
