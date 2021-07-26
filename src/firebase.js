import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD9d0h1faXKcvZpzJelSHTuq7arCDCQmBk",
    authDomain: "clone-8fb77.firebaseapp.com",
    projectId: "clone-8fb77",
    storageBucket: "clone-8fb77.appspot.com",
    messagingSenderId: "1023585862441",
    appId: "1:1023585862441:web:e99bd43b7a0bf56e6bad38",
    measurementId: "G-0YK2HXEQ5Y"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig); 
  const db =firebaseApp.firestore();
  const auth=firebase.auth();

  export{db,auth};