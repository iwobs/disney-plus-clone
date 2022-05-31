import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBzufyWyTbvQCLSwJS5HUtonMSzMU8gTis",
  authDomain: "disney-plus-7f835.firebaseapp.com",
  projectId: "disney-plus-7f835",
  storageBucket: "disney-plus-7f835.appspot.com",
  messagingSenderId: "848179997342",
  appId: "1:848179997342:web:32ab0c6efecde08757698f",
  measurementId: "G-KSFNJWNZCD"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;