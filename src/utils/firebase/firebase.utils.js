import { initializeApp } from 'firebase/app';

import firebase from "firebase/app";

import "firebase/firestore";

import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth';

import {
    getFirestore,
    doc,
    addDoc,
    getDoc,
    setDoc,
    deleteDoc,
    collection,
    writeBatch,
    query,
    getDocs
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCdK3tdxqa4hX4geN0jM6tS4bG35cy9onE",
    authDomain: "wildplaces-951db.firebaseapp.com",
    projectId: "wildplaces-951db",
    storageBucket: "wildplaces-951db.appspot.com",
    messagingSenderId: "453339593868",
    appId: "1:453339593868:web:7980e81612542b19600fa9"
};

//const firebaseApp = 
initializeApp(firebaseConfig);

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

export const addDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objectsToAdd.forEach((object) => {
        createDocument(collectionKey, object)
    });

    console.log('done');
}

export const getAllDocuments = async (collectionKey) => {
    const collectionRef = collection(db, collectionKey);
    const q = query(collectionRef);

    const querySnapShot = await getDocs(q);
    
    return querySnapShot.docs.map((docSnapShot) => docSnapShot.data());
}

export const createDocument = async (collectionKey, document) => {
    const docRef = await addDoc(collection(db, collectionKey), document);
    document.id = docRef.id;
    try {
        await setDoc(docRef, document);
    } catch(error){
        console.log('error creating document', error.message);
    }
    const newDoc = await getDoc(docRef);
    return newDoc.data();
}

export const updateDocument = async (collectionKey, document) => {
    const docRef = doc(db, collectionKey, document.id);
    try {
        await setDoc(docRef, document);
    } catch(error){
        console.log('error updating document', error.message);
    }
    const newDoc = await getDoc(docRef);
    return newDoc.data();
}

export const deleteDocument = async (collectionKey, document) => {
    const docRef = doc(db, collectionKey, document.id);
    try {
        await deleteDoc(docRef, document);
    } catch(error){
        console.log('error deleting document', error.message);
    }
    return docRef.id;
}
