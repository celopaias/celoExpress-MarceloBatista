import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDGKE9FpXXeMLjpN5-YDTKt9uxesJlXo0U',
  authDomain: 'celoexpress-cdhouseexercise.firebaseapp.com',
  projectId: 'celoexpress-cdhouseexercise',
  storageBucket: 'celoexpress-cdhouseexercise.appspot.com',
  messagingSenderId: '472747746270',
  appId: '1:472747746270:web:f64de4b2d0944a6046f34f',
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
