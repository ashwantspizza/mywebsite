import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import firebase from 'firebase/app';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import reportWebVitals from './reportWebVitals';

const firebaseConfig = {
  apiKey: "AIzaSyDjRfjPFLAzg1AI28l_PqOdQTKvp5E1HAk",
  authDomain: "my-website-abs.firebaseapp.com",
  projectId: "my-website-abs",
  storageBucket: "my-website-abs.appspot.com",
  messagingSenderId: "1008582978239",
  appId: "1:1008582978239:web:cbcfe7a68e89b317a0b40a",
  measurementId: "G-06LDJ6SWXG"
};

//initialising firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
