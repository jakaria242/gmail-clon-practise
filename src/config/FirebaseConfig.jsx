
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBzRbwrq3j5_xQDU_BSWDZMhhr8Dp2lpYw",
  authDomain: "clon-98453.firebaseapp.com",
  projectId: "clon-98453",
  storageBucket: "clon-98453.appspot.com",
  messagingSenderId: "707305495092",
  appId: "1:707305495092:web:4b0713b5617706c25fc861"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

export const googleProvider = new GoogleAuthProvider(app)