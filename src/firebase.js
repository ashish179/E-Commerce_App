import firebase from 'firebase';



const firebaseConfig = {
    apiKey: "AIzaSyB-6miNeX68pSVZqr05qN-Yz6DV3UYV0_M",
    authDomain: "clone-941df.firebaseapp.com",
    projectId: "clone-941df",
    storageBucket: "clone-941df.appspot.com",
    messagingSenderId: "826708468910",
    appId: "1:826708468910:web:9ee1c7a7c5a22a2a8ab93f"
  };


  const firebaseApp=   firebase.initializeApp(firebaseConfig);

  const db= firebaseApp.firestore();
  const auth= firebase.auth();


  export {db,auth};