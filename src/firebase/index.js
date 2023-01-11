// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Crear la base de datos
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIovlEGcYqxAIKaBOcmPhBgSUL_XxYx5k",
  authDomain: "task-list-5f8d4.firebaseapp.com",
  projectId: "task-list-5f8d4",
  storageBucket: "task-list-5f8d4.appspot.com",
  messagingSenderId: "84985469664",
  appId: "1:84985469664:web:a6f89877cecd1ee5320e85"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Inicializar Firestore
export const db = getFirestore();