// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA1z83ivYPEhwRB3jfpVcXvprGzSr_CKck",
    authDomain: "foji-react-project.firebaseapp.com",
    projectId: "foji-react-project",
    storageBucket: "foji-react-project.appspot.com",
    messagingSenderId: "931527001299",
    appId: "1:931527001299:web:d4b95768e81a20ecaf8026"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;