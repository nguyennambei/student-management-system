import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBVY8Q0yk5jeUiQlSD5unaADWErwdsc324",
    authDomain: "fir-rn-4fd7b.firebaseapp.com",
    databaseURL: "https://fir-rn-4fd7b.firebaseio.com",
    projectId: "fir-rn-4fd7b",
    storageBucket: "fir-rn-4fd7b.appspot.com",
    messagingSenderId: "807154887529",
    appId: "1:807154887529:web:73b26687d0c031378f6bf8",
    measurementId: "G-MG8W0GHGNW"
  };
  // Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig);
