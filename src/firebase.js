import {initializeApp} from "firebase/app";
import {getFirestore, serverTimestamp} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyC3s-GtR7AhC3bnEMnyBppuph5qnGL5TM4",
  authDomain: "trello-board-clone-882f3.firebaseapp.com",
  projectId: "trello-board-clone-882f3",
  storageBucket: "trello-board-clone-882f3.appspot.com",
  messagingSenderId: "971274274129",
  appId: "1:971274274129:web:f8b1d1ff9b41e8e8557f70"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const timestamp = serverTimestamp();

export  {app, db, timestamp};