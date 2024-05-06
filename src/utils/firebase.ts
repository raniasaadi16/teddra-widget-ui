// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from '@firebase/auth'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDevXr_yYz-Pyu9mkQ1cakTaXFFlSccDWs",

//   authDomain: "teddra-api-dev.firebaseapp.com",

//   databaseURL: "https://teddra-api-dev-default-rtdb.europe-west1.firebasedatabase.app",

//   projectId: "teddra-api-dev",

//   storageBucket: "teddra-api-dev.appspot.com",

//   messagingSenderId: "627617925666",

//   appId: "1:627617925666:web:e817727161fb18d3f1187b"

// };  
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH,
  projectId: process.env.REACT_APP_FIREBASE_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING,
  appId: process.env.REACT_APP_FIREBASE_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)




