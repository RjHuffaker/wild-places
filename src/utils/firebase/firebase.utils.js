import { initializeApp } from 'firebase/app';

import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCdK3tdxqa4hX4geN0jM6tS4bG35cy9onE",
    authDomain: "wildplaces-951db.firebaseapp.com",
    projectId: "wildplaces-951db",
    storageBucket: "wildplaces-951db.appspot.com",
    messagingSenderId: "453339593868",
    appId: "1:453339593868:web:7980e81612542b19600fa9"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async(userAuth, additionalInfo={}) => {
    if(!userAuth) return;
    
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapShot = await getDoc(userDocRef);

    if(!userSnapShot.exists()){
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInfo
            })
        } catch(error){
            console.log('error creating user', error.message);
        }
    }

    return userDocRef;
}