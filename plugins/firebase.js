// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALH0dq9__9rVPT-tLTePgBxHH-QpmHNdg",
  authDomain: "test-aws-f771d.firebaseapp.com",
  projectId: "test-aws-f771d",
  storageBucket: "test-aws-f771d.appspot.com",
  messagingSenderId: "269334710222",
  appId: "1:269334710222:web:e39d1e9254b56b31f40d9f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//firestore database //lưu trữ CSDL
const db = getFirestore(app);
const auth = getAuth(app);
export {db, auth};
