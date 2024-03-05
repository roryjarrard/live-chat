import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBucEKGmjpRtuKQ9u7a69nV--H2xW_vQWI',
  authDomain: 'udemy-vue-firebase-sites-e8f6b.firebaseapp.com',
  projectId: 'udemy-vue-firebase-sites-e8f6b',
  storageBucket: 'udemy-vue-firebase-sites-e8f6b.appspot.com',
  messagingSenderId: '192033433315',
  appId: '1:192033433315:web:a2fe54d75e7b26585e07d6',
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, timestamp }
