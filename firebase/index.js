import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  getDocs,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
//******************** AUTHENTICATION ********************//
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

//******************** FIRESTORE ********************//

const readProblems = async () => {
  const collectionRef = collection(db, "problems");
  const querySnapshot = await getDocs(collectionRef);
  const problems = querySnapshot.docs.map((doc) => {
    const data = doc.data();
    return { id: doc.id, name: data.name, difficulty: data.difficulty };
  });
  return problems;
};

const readProblemSingular = async (id) => {
  const docRef = doc(db, "problems", id);
  const docSnap = await getDoc(docRef);
  const data = docSnap.data();
  return {
    id: docSnap.id,
    constraints: data.constraints,
    description: data.description,
    difficulty: data.difficulty,
    examples: new Map(Object.entries(data.examples || {})),
    inputs: new Map(Object.entries(data.inputs || {})),
    memoryLimit: data.memoryLimit,
    name: data.name,
    output: data.output,
    runtimeLimit: data.runtimeLimit,
    tags: data.tags || [],
  };
};
export { readProblems, readProblemSingular };
