import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/analytics";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqs-qcKPdaKs--HEYD3umBYnEvISFnOlg",
  authDomain: "subi-note-app.firebaseapp.com",
  projectId: "subi-note-app",
  storageBucket: "subi-note-app.appspot.com",
  messagingSenderId: "398491519461",
  appId: "1:398491519461:web:89f5c37a930e0e2f6ac70c",
  measurementId: "G-NPK040L43X"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


