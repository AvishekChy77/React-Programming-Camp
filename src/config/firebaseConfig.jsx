import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB_4lqrzTwXxS-hK5ikIV6Dmb2iwvA1kyE",
  authDomain: "programming-camp-46990.firebaseapp.com",
  projectId: "programming-camp-46990",
  storageBucket: "programming-camp-46990.appspot.com",
  messagingSenderId: "1007174848657",
  appId: "1:1007174848657:web:b524ad47fa66c48f212f30",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
