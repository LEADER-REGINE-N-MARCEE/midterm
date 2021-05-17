import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCYfH3VOIEYRZKLDXkfoO_K5X8fITEvGGw",
  authDomain: "activity4-brody.firebaseapp.com",
  projectId: "activity4-brody",
  storageBucket: "activity4-brody.appspot.com",
  messagingSenderId: "352378937492",
  appId: "1:352378937492:web:b5e7e17261d17400b49481",
  measurementId: "G-SG51Y6Q9SW",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
