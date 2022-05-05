import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';

import {
  getDatabase,
  onValue,
  push,
  ref,
  remove,
  set,
  update,
} from 'firebase/database';
import { useEffect, useState } from 'react';

//config items
const firebaseConfig = {
  apiKey: 'AIzaSyBgZGQEgKg3iFCUDx1EPA4VAZM2yBYrEOQ',
  authDomain: 'fire-blog-app-f6ea3.firebaseapp.com',
  projectId: 'fire-blog-app-f6ea3',
  storageBucket: 'fire-blog-app-f6ea3.appspot.com',
  messagingSenderId: '693596403578',
  appId: '1:693596403578:web:a8d67593a8557ebd7cc8c3',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export const createUser = async (email, password, navigate, displayName) => {
  try {
    let userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await updateProfile(auth.currentUser, {
      displayName: displayName,
    });
    navigate('/');
  } catch (error) {
    alert(error.message);
  }
};

export const signIn = async (email, password, navigate) => {
  try {
    let userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    navigate('/');
    console.log(userCredential);
  } catch (error) {
    alert(error.message);
  }
};

export const logOut = () => {
  signOut(auth);
};

export const userObserver = (setCurrentUser) => {
  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      setCurrentUser(currentUser);
    } else {
      setCurrentUser(false);
    }
  });
};

export const signUpProviderGoogle = (navigate) => {
  const provider = new GoogleAuthProvider();

  const auth = getAuth();
  signInWithPopup(auth, provider)
    .then((result) => {
      navigate('/');
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
};

///////////////////////////////////
// ---------DATABASE----------
///////////////////////////////////

export const AddUser = (info) => {
  const db = getDatabase();

  const userRef = ref(db, 'baglanti');

  const newUserRef = push(userRef);

  set(newUserRef, {
    title: info.title,
    imageURL: info.imageURL,
    content: info.content,
    email: info.email,
    photoURL: info.photoURL,
    date: info.date,
  });
};

export const useFetch = () => {
  const [isLoading, setIsLoading] = useState();
  const [contactList, setContactList] = useState();

  useEffect(() => {
    setIsLoading(true);

    const db = getDatabase();
    const userRef = ref(db, 'baglanti');

    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      const blogArray = [];
      for (let id in data) {
        blogArray.push({ id: id, ...data[id] });
      }
      setContactList(blogArray);
      setIsLoading(false);
    });
  }, []);
  return { isLoading, contactList };
};

export const DeleteUser = (id) => {
  const db = getDatabase();
  // const userRef = ref(db, 'baglanti');
  remove(ref(db, 'baglanti/' + id));
};

export const EditUser = (info) => {
  const db = getDatabase();
  const updates = {};

  updates['baglanti/' + info.id] = info;
  return update(ref(db), updates);
};
