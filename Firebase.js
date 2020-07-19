import * as firebase from 'firebase';
// Optionally import the services that you want to use
//import "firebase/auth";
//import "firebase/database";
import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAqc9NU4ziFWn3cXomXiHCS8OrHxjOaPsE",
    authDomain: "facultyrecruitment-8987a.firebaseapp.com",
    databaseURL: "https://facultyrecruitment-8987a.firebaseio.com",
    projectId: "facultyrecruitment-8987a",
    storageBucket: "facultyrecruitment-8987a.appspot.com",
    messagingSenderId: "849162350396",
    appId: "1:849162350396:web:1c4e85f3d7e4e8ec8f7839"
};

const Firebase = firebase.initializeApp(firebaseConfig);
export const userRef = Firebase.firestore().collection('users')
export const jobsRef = Firebase.firestore().collection('jobs')
export default Firebase;
