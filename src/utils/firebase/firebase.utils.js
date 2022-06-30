import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDTPubLGUtRT4LfJltg9B49k1fcArRkVgs',
  authDomain: 'crwn-shop-db-8bf78.firebaseapp.com',
  projectId: 'crwn-shop-db-8bf78',
  storageBucket: 'crwn-shop-db-8bf78.appspot.com',
  messagingSenderId: '791977207010',
  appId: '1:791977207010:web:b83132eb9569850f75aabb',
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (error) {
      console.error('error creating the user', error.message);
    }
  }

  return userDocRef;
};
