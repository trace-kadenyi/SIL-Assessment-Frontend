import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBewyX5UxBVt5tUMN9v20jBDc0C7sAqe2M",
  authDomain: "sil-assessment-authentication.firebaseapp.com",
  projectId: "sil-assessment-authentication",
  storageBucket: "sil-assessment-authentication.appspot.com",
  messagingSenderId: "441034352262",
  appId: "1:441034352262:web:1112649768c647e436d307",
  measurementId: "G-HB4YR4GG7T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth, provider};
