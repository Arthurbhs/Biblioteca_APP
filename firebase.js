// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage'; // Adicionado aqui ✅

const firebaseConfig = {
  apiKey: "AIzaSyCfEokwytgFDGPLTHhNq4cNpjcr0B8K5z8",
  authDomain: "bibliotecaapp-f404f.firebaseapp.com",
  projectId: "bibliotecaapp-f404f",
  storageBucket: "bibliotecaapp-f404f.appspot.com", // Corrigido aqui ✅
  messagingSenderId: "850942372224",
  appId: "1:850942372224:web:3798dddb52ed83d3e43965"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app); // Adicionado aqui ✅

export { auth, db, storage }; // Exportando também o storage ✅
