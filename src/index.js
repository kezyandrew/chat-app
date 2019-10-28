import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
  apiKey: "AIzaSyB6YPt9tkqt86XUcxKmAjrXE0hT3Nl_Gxw",
  authDomain: "chat-app-6b8c6.firebaseapp.com",
  databaseURL: "https://chat-app-6b8c6.firebaseio.com",
  projectId: "chat-app-6b8c6",
  storageBucket: "chat-app-6b8c6.appspot.com",
  messagingSenderId: "419526459126",
  appId: "1:419526459126:web:91e1b6161a3812acb4f6d7",
  measurementId: "G-KQ8RZ5KF0Z"
});

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
