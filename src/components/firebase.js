import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCUjFpjkSRotFkATdqjKqcOVBfc8j8kQps",
  authDomain: "twitter-clone-bfdf1.firebaseapp.com",
  projectId: "twitter-clone-bfdf1",
  storageBucket: "twitter-clone-bfdf1.appspot.com",
  messagingSenderId: "322814103983",
  appId: "1:322814103983:web:6080a8c0a2e67a60c11f5a",
  measurementId: "G-DT1SYJXJ7Q",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export default db;
