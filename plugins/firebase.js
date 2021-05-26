import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0r2FNMUynBqvUSGdT7K6rvbwmND3eWGg",
  authDomain: "fir-todo-2ca53.firebaseapp.com",
  projectId: "fir-todo-2ca53",
  storageBucket: "fir-todo-2ca53.appspot.com",
  messagingSenderId: "156861669641",
  appId: "1:156861669641:web:308f14d1dae686ae64b3d8",
  measurementId: "G-Q32D7CW1XD"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()
export default firebase
