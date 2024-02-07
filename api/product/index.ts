import {
  DocumentData,
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

interface Product {
  name: string;
  description: string;
  imageUrl: string;
  userPrice: number;
  customerPrice: number;
}

const addProduct = async (req: Product) => {
  try {
    // console.log(req);
    const doc = await addDoc(collection(db, "Product"), {
      ...req,
      timestamp: serverTimestamp(),
    });
    console.log(doc.id);
  } catch (error) {
    console.log("error");
  }
};

const getAllProduct = async () => {
  try {
    let docRef = await getDocs(
      query(collection(db, "Product"), orderBy("timestamp", "desc"))
    );
    // let allItems = [];
    // docRef.forEach((doc) => {
    //   // doc.data() is never undefined for query doc snapshots
    //   //   allItems[doc.id] = doc.data()
    //   let product = {
    //     id: doc.id,
    //     ...doc.data(),
    //   };
    //   allItems.push(product);
    //   console.log(doc.id, " => ", doc.data());
    // });
    return docRef;
  } catch (error) {}
};

export { addProduct, getAllProduct };
