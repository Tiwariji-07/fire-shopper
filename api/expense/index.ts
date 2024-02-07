import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebase.config";

// interface Cash{
//   amount: number,
//   timestamp:Date
// }

const addExpense = async (amount: number, category: string) => {
  try {
    const doc = await addDoc(collection(db, "Expense"), {
      amount: amount,
      category: category,
      timestamp: serverTimestamp(),
    });
    console.log(doc.id);
  } catch (error) {
    console.log("error");
  }
};

const getAllExpense = async () => {
  try {
    let docRef = await getDocs(
      query(collection(db, "Expense"), orderBy("timestamp", "desc"))
    );
    docRef.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });
  } catch (error) {}
};

const updateExpense = async (id: string, amount: number, category: string) => {
  try {
    const docRef = await updateDoc(doc(db, "Expense", id), {
      amount: amount,
      category: category,
      timestamp: serverTimestamp(),
    });
    console.log(docRef);
  } catch (error) {
    console.log("error");
  }
};

const deleteExpense = async (id: string) => {
  try {
    const docRef = await deleteDoc(doc(db, "Expense", id));
    console.log(docRef);
  } catch (error) {}
};
export { addExpense, getAllExpense, updateExpense, deleteExpense };
