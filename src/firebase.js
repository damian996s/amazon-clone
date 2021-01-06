import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBD3Ps-DDrft_ky-10TP0AG9ShoM2hO7nk",
    authDomain: "clone-a8085.firebaseapp.com",
    databaseURL: "https://clone-a8085.firebaseio.com",
    projectId: "clone-a8085",
    storageBucket: "clone-a8085.appspot.com",
    messagingSenderId: "1089206499363",
    appId: "1:1089206499363:web:bd13ffabed36f3e0081996",
    measurementId: "G-HPDNGYZ3CL"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

export { db, auth };