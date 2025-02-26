import { app } from "../index";
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  getDocs,
} from "firebase/firestore";

const db = getFirestore(app);

//******************** FIRESTORE ********************//
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
export { readProblemSummaries, readProblemSingular };
