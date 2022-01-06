import firebase from 'firebase';

// add SDK Firebase

    var firebaseConfig = {
        apiKey: "AIzaSyCbsTGj3H4C87lf0l2jYhUFlljzNNpvZXA",
        authDomain: "project-67-86095.firebaseapp.com",
        databaseURL: "https://project-67-86095-default-rtdb.firebaseio.com",
        projectId: "project-67-86095",
        storageBucket: "project-67-86095.appspot.com",
        messagingSenderId: "873981820727",
        appId: "1:873981820727:web:dd92e9c91658934bcae4b2"
      };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();