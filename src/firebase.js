import * as firebase from 'firebase'
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDYzgB7S3ZeMs8B4XPb6gTTHPN833Nji5Q",
  authDomain: "disney-plus-darko.firebaseapp.com",
  projectId: "disney-plus-darko",
  storageBucket: "disney-plus-darko.appspot.com",
  messagingSenderId: "237595518489",
  appId: "1:237595518489:web:595d7db2a3c32cf3baec88"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;