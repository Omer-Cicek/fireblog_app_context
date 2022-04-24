import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

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

export default auth;
