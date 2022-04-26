import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDtUayf6IAibZM81EUoolG-B1X2AQY24L0",
    authDomain: "clone-294b2.firebaseapp.com",
    projectId: "clone-294b2",
    storageBucket: "clone-294b2.appspot.com",
    messagingSenderId: "1076160829139",
    appId: "1:1076160829139:web:b37676ba18511ec4526626"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();