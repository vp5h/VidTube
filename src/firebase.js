// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';

import 'firebase/compat/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNg-iP4zVaSfzxereUHi1yCzik6OtPd1A",
  authDomain: "vidtube-1d.firebaseapp.com",
  projectId: "vidtube-1d",
  storageBucket: "vidtube-1d.appspot.com",
  messagingSenderId: "648606889947",
  appId: "1:648606889947:web:a228fe554b4179b05399fe"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.auth()