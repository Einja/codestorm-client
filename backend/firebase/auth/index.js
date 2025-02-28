import { app } from "../index";
import { addUserInfo } from "../database";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const auth = getAuth(app);


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
    await addUserInfo(user.uid, username, email);
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
    console.error("Incorrect username and/or password.");
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
