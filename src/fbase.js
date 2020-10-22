import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyACqpUVTJ6KhUNAuAGachScOtL67xzqgO0",
  authDomain: "everyones-341cc.firebaseapp.com",
  databaseURL: "https://everyones-341cc.firebaseio.com",
  projectId: "everyones-341cc",
  storageBucket: "everyones-341cc.appspot.com",
  messagingSenderId: "393034949536",
  appId: "1:393034949536:web:b49ea991ad321a78c23ac5",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;
export const rdService = firebase.database();
export const authService = firebase.auth();
export const storeService = firebase.firestore();
