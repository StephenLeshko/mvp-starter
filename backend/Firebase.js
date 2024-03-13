import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = process.env.NODE_ENV === 'production' ? {
    //production firebase info here
} : {
  apiKey: "AIzaSyC_H9APonZaBU6LgpqxpR3A1ZTXcia5kvQ",
  authDomain: "test-e633b.firebaseapp.com",
  projectId: "test-e633b",
  storageBucket: "test-e633b.appspot.com",
  messagingSenderId: "364205235657",
  appId: "1:364205235657:web:20bda43a53eb68074adc18"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const database = getFirestore(app);
export const analytics = () => getAnalytics(app);

export default app