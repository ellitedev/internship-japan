import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDFBvpf2EgCMP_QZ8orWbSDqpB_WB3zY9E",
    authDomain: "internship-japan-f842c.firebaseapp.com",
    databaseURL: "https://internship-japan-f842c-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "internship-japan-f842c",
    storageBucket: "internship-japan-f842c.appspot.com",
    messagingSenderId: "229575503830",
    appId: "1:229575503830:web:91335091c2a1b066f0fe77",
    measurementId: "G-H8FMP1N83Q"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
