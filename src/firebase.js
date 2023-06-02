// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrbaaflnC1E2rcLTctTmNH0ZYjNWpIiuA",
  authDomain: "realtor-clone-react-4f5d9.firebaseapp.com",
  projectId: "realtor-clone-react-4f5d9",
  storageBucket: "realtor-clone-react-4f5d9.appspot.com",
  messagingSenderId: "683345064945",
  appId: "1:683345064945:web:f96645626f7e5907350a50"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();