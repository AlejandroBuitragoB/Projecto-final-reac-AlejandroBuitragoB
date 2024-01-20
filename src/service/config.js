import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAx_STdn8zqhWZaja8Rbs882DT4ZsteGU0",
  authDomain: "endurance-fit.firebaseapp.com",
  projectId: "endurance-fit",
  storageBucket: "endurance-fit.appspot.com",
  messagingSenderId: "833473961174",
  appId: "1:833473961174:web:451ad3e87f60288f6dbd77"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);