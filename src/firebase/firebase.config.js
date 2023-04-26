// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZ1XkyoFVQW637I3CFixhja3gY8y00W38",
  authDomain: "the-news-dragon-9e4f5.firebaseapp.com",
  projectId: "the-news-dragon-9e4f5",
  storageBucket: "the-news-dragon-9e4f5.appspot.com",
  messagingSenderId: "625511836564",
  appId: "1:625511836564:web:ca6a3ca1827a2e9c587d81"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;