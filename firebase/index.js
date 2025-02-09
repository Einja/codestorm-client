import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
  onAuthStateChanged
} from "firebase/auth";


const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// const firebaseConfig = {
//   apiKey: "AIzaSyA5Ei4hwwbetW4kQfe-J4CHE_UriHwKlUo",
//   authDomain: "codestorm-server.firebaseapp.com",
//   projectId: "codestorm-server",
//   storageBucket: "codestorm-server.firebasestorage.app",
//   messagingSenderId: "225457811104",
//   appId: "1:225457811104:web:77366449e47f66d889a3c5",
//   measurementId: "G-90X6G76ERG",
// }

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const signUp = async (username, email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    await updateProfile(user, { displayName: username });
    return user;
  } catch (error) {
    console.error("An error occurred while signing up.");
    throw error;
  }
};

const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    console.error("An error occurred while logging in.");
    throw error;
  }
};

const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Logout Error:", error);
    throw error;
  }
};

const listenForAuthChanges = (callback) => {
  return onAuthStateChanged(auth, callback);
};
export { auth, signUp, login, logout, listenForAuthChanges };
