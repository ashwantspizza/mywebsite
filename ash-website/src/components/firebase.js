import firebase from 'firebase';
import 'firebase/firestore';

// firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCVHp6kZxclpVl74qy8934CK27I6o3dw6o",
    authDomain: "ash-website-abs.firebaseapp.com",
    projectId: "ash-website-abs",
    storageBucket: "ash-website-abs.appspot.com",
    messagingSenderId: "195738044640",
    appId: "1:195738044640:web:9061744075eebc0222e885"
  };
  
  // initialize firebase
  const app = firebase.initializeApp(firebaseConfig);
  const db = app.firestore();
  
  export { db };