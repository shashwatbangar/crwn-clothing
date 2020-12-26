import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyB_nEUXfxv4RH93h64TabHuvGXwJgyDTUs",
    authDomain: "crwn-db-a6ca8.firebaseapp.com",
    projectId: "crwn-db-a6ca8",
    storageBucket: "crwn-db-a6ca8.appspot.com",
    messagingSenderId: "757719189222",
    appId: "1:757719189222:web:d1a96fd81848d13bc9dd27",
    measurementId: "G-SQ6BBKKZJC"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;