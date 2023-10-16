// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref , get} from 'firebase/database';

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrvV4t_7EghXTfQeQtCDm6wfZgKuw3TbQ",
  authDomain: "bets-store.firebaseapp.com",
  databaseURL: "https://bets-store-default-rtdb.firebaseio.com",
  projectId: "bets-store",
  storageBucket: "bets-store.appspot.com",
  messagingSenderId: "660449082719",
  appId: "1:660449082719:web:030c032f453f31c9cdcaea",
  measurementId: "G-SJ4K4XM39W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export {app, database, ref, get }; // Change the export statement to export it as a default export
