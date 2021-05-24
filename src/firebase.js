import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDvooNRt-Z5T53dmE37g0LoPnSuN0myVzc",
    authDomain: "whatsa-6f8c7.firebaseapp.com",
    projectId: "whatsa-6f8c7",
    storageBucket: "whatsa-6f8c7.appspot.com",
    messagingSenderId: "715435271182",
    appId: "1:715435271182:web:68be4e4b232fefd099885f",
    measurementId: "G-45V45C9N5G"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;