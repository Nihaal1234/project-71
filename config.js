import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyC6lz9WP4LEbW025EWLK54_r05BEZcH55k",
    authDomain: "e-ride-df43b.firebaseapp.com",
    databaseURL: "https://e-ride-df43b-default-rtdb.firebaseio.com",
    projectId: "e-ride-df43b",
    storageBucket: "e-ride-df43b.appspot.com",
    messagingSenderId: "246602908990",
    appId: "1:246602908990:web:abfc20298c182f0d6a986f"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
