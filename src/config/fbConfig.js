import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var config = {
  apiKey: "AIzaSyDFBvpf2EgCMP_QZ8orWbSDqpB_WB3zY9E",
  authDomain: "internship-japan-f842c.firebaseapp.com",
  databaseURL:
    "https://internship-japan-f842c-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "internship-japan-f842c",
  storageBucket: "internship-japan-f842c.appspot.com",
  messagingSenderId: "229575503830",
  appId: "1:229575503830:web:91335091c2a1b066f0fe77",
  measurementId: "G-H8FMP1N83Q",
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });
export default firebase;
