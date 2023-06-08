// import firebase from "firebase";
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
const firebaseConfig = {
  apiKey: "AIzaSyDBhZWC3yGMhhCvQgP1T4sDDHxcFhb2U2g",
  authDomain: "disney-plus-clone-aj.firebaseapp.com",
  projectId: "disney-plus-clone-aj",
  storageBucket: "disney-plus-clone-aj.appspot.com",
  messagingSenderId: "370854592934",
  appId: "1:370854592934:web:dc17bdc50044964996cf67",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider =  new GoogleAuthProvider();
const storage =getStorage(firebaseApp);

export { auth, provider, storage };
export default db;
