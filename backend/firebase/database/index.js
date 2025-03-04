import { app } from "../index";
import {
  getFirestore,
  collection,
  doc,
  query,
  where,
  getDoc,
  addDoc,
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
    createdAt: new Date(),
  });
};

export { addUserInfo };

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

// input: id (string)
// output: Problem struct
// purpose: get the information and details about a single problem in the database for display on problem page.
const readProblemById = async (id) => {
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
const addProblem = async (problem) => {
  try {
    const docRef = doc(db, "problems", problem.id);
    await setDoc(docRef, problem);
    console.log(`Added problem ${problem.id} to collections`);
  } catch (error) {
    console.error("Error adding problem: ", error);
  }
};

//******************* TESTCASES ********************//

// input: problemId (string)
// output: array of testcase data
// purpose: extract all testcases that are deemed sample cases.
const readSampleTestcasesById = async (problemId) => {
    const collectionRef = collection(db, "testcases");
    const q = query(collectionRef, where('problemId', '==', problemId), where('sampleCase', '==', true));
    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map(doc => doc.data());
    return data;
}

const readTestCasesById = async (problemId) => {
  const collectionRef = collection(db, "testcases");
  const q = query(collectionRef, where('problemId', '==', problemId));
  const querySnapshot = await getDocs(q);
  const data = querySnapshot.docs.map(doc => doc.data());
  return data;
}


//***************** SUBMISSIONS ********************//
const addSubmission = async (submissionData) => {
  try {
    await addDoc(collection(db, "submissions"), submissionData);
    console.log(`Added submission to collections`);
  } catch (error) {
    console.error("Error adding submission: ", error);
  }
}
export { readProblemSummaries, readProblemById, addProblem, readSampleTestcasesById, readTestCasesById, addSubmission };
