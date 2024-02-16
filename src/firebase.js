

import firebase from 'firebase/compat/app'
import 'firebase/compat/database'
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyCMqGqsB1g583KrToDJmeyG9JQAlmh-Ps4",
  authDomain: "coding-crafters-6af4a.firebaseapp.com",
  databaseURL: "https://coding-crafters-6af4a-default-rtdb.firebaseio.com",
  projectId: "coding-crafters-6af4a",
  storageBucket: "coding-crafters-6af4a.appspot.com",
  messagingSenderId: "571618682184",
  appId: "1:571618682184:web:5a0d80d4ec8c23db8d7f7d",
  measurementId: "G-700JFMKQ60"
};

firebase.initializeApp(firebaseConfig)

export const database =firebase.database();
export const storage=getStorage();
export default firebase;