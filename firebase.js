import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAMFuu7tNLPZuj93VV3T53IW9yDLi-caJc",
  authDomain: "whatsapp-80bb6.firebaseapp.com",
  projectId: "whatsapp-80bb6",
  storageBucket: "whatsapp-80bb6.appspot.com",
  messagingSenderId: "811096141317",
  appId: "1:811096141317:web:44d77c63d5e3a71955b66c",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { db, auth, provider };
