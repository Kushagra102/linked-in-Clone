import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAQ5klogNsV6CEdwRAMBczLWLdmbPQwfoY",
    authDomain: "linkedin-clone-97b67.firebaseapp.com",
    projectId: "linkedin-clone-97b67",
    storageBucket: "linkedin-clone-97b67.appspot.com",
    messagingSenderId: "564577270568",
    appId: "1:564577270568:web:823cb579da3952d2e66e1d"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};