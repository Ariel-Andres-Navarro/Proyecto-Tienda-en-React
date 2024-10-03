import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBdKlcVSMvmU1ojGYqemJI5XjIgx1xAJcs",
  authDomain: "proyecto-tienda-navarro.firebaseapp.com",
  projectId: "proyecto-tienda-navarro",
  storageBucket: "proyecto-tienda-navarro.appspot.com",
  messagingSenderId: "222498699299",
  appId: "1:222498699299:web:0dbc34d73eb2a72da59996"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { app, db};