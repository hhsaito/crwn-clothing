import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDXzZp87SmmjP42Uh0_iKz6Fhv94fxBnI8",
    authDomain: "crwn-db-c06ea.firebaseapp.com",
    projectId: "crwn-db-c06ea",
    storageBucket: "crwn-db-c06ea.appspot.com",
    messagingSenderId: "697589170673",
    appId: "1:697589170673:web:d6a896aa58720719fdc450"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;