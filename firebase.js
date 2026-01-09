import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDgPQeRU2jNolPUmZ_rg5llOJwxvw8iuss",
  authDomain: "pointercrate-clone.firebaseapp.com",
  projectId: "pointercrate-clone",
  storageBucket: "pointercrate-clone.firebasestorage.app",
  messagingSenderId: "993434156064",
  appId: "1:993434156064:web:224cdc1be9531f40309045",
  measurementId: "G-HQ55QGKGP2"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
