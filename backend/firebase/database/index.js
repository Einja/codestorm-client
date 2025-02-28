import { app } from "../index";
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  setDoc,
  getDocs,
} from "firebase/firestore";

const db = getFirestore(app);
//********************* USERS **********************//
const addUserInfo = async (uid, username, email) => {
    await setDoc(doc(db, "users", uid), {
        username: username,
        email: email,
        isAdmin: false,
        createdAt: new Date()
    });
}

export { addUserInfo }



//******************** PROBLEMS ********************//
const readProblemSummaries = async () => {
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
    inputs: data.inputs || [],
    memoryLimit: data.memoryLimit,
    name: data.name,
    output: data.output,
    runtimeLimit: data.runtimeLimit,
    tags: data.tags || [],
  };
};

// input: problem (Problem struct)
// output: none
// purpose: adds a problem doc to the problems collection in the database
async function addProblem(problem) {
    try {
      const docRef = doc(db, "problems", problem.id);
      await setDoc(docRef, problem);
      console.log(`Added problem ${problem.id} to collections`);
    } catch (error) {
      console.error("Error adding problem: ", error);
    }
  }
export { readProblemSummaries, readProblemSingular, addProblem };
