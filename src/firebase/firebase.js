/** @format */
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyC_WCHL3tq1z8RCQdDChKKorZfPhx5QLTM",
	authDomain: "clone-e91f1.firebaseapp.com",
	projectId: "clone-e91f1",
	storageBucket: "clone-e91f1.appspot.com",
	messagingSenderId: "359202158640",
	appId: "1:359202158640:web:b5bb419c98e3b62af3d5f5",
	measurementId: "G-EQP039VPZQ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();
const auth = firebase.auth();

export { database, auth };
