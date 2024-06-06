// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: 'x-next-424108.firebaseapp.com',
    projectId: 'x-next-424108',
    storageBucket: 'x-next-424108.appspot.com',
    messagingSenderId: '211617359109',
    appId: '1:211617359109:web:6b09c1c08b783ad647036c',
    measurementId: 'G-0E1EEEBK25',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app)
