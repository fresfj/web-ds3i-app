import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyALub_JyRvssOyBq6D41mtxTJWJvIDiqlk",
  authDomain: "apps-ds3i.firebaseapp.com",
  databaseURL: "https://apps-ds3i.firebaseio.com",
  projectId: "apps-ds3i",
  storageBucket: "apps-ds3i.appspot.com",
  messagingSenderId: "451395175562",
  appId: "1:451395175562:web:4bd1f16710f719fe2b1973"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, app };