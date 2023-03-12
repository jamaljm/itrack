import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import firebase from "firebase/app";
import "firebase/database";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCX-qWZk8GN0GAAHb74sQx-EDhPAOeBFh0",
  authDomain: "itrack-21808.firebaseapp.com",
  projectId: "itrack-21808",
  storageBucket: "itrack-21808.appspot.com",
  messagingSenderId: "821765722995",
  appId: "1:821765722995:web:042cd336a6bf8dd55cab06",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app);
