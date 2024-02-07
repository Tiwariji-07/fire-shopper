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

const addIncome = async (amount: number, category: string) => {
  try {
    const doc = await addDoc(collection(db, "Income"), {
      amount: amount,
      category: category,
      timestamp: serverTimestamp(),
    });
    console.log(doc.id);
  } catch (error) {
    console.log("error");
  }
};

const getAllIncome = async () => {
  try {
    let docRef = await getDocs(
      query(collection(db, "Income"), orderBy("timestamp", "desc"))
    );
    docRef.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });
  } catch (error) {}
};

const updateIncome = async (id: string, amount: number, category: string) => {
  try {
    const docRef = await updateDoc(doc(db, "Income", id), {
      amount: amount,
      category: category,
      timestamp: serverTimestamp(),
    });
    console.log(docRef);
  } catch (error) {
    console.log("error");
  }
};

const deleteIncome = async (id: string) => {
  try {
    const docRef = await deleteDoc(doc(db, "Income", id));
    console.log(docRef);
  } catch (error) {}
};
export { addIncome, getAllIncome, updateIncome, deleteIncome };
