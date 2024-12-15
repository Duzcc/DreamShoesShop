import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore, doc, getDoc, getDocs } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";


const firebaseConfig = {
    apiKey: "AIzaSyBbWX5R5SbV3Wpiy_W02Giwm6RQe2btlLM",
    authDomain: "jsi03-4ae63.firebaseapp.com",
    projectId: "jsi03-4ae63",
    storageBucket: "jsi03-4ae63.appspot.com",
    messagingSenderId: "1000693069688",
    appId: "1:1000693069688:web:d2af3ce446b1de18fb3a8d"
};
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();


signin.addEventListener('click', (e) => {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            alert('Log in successfully ')
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
        });
})