import React, { useEffect, useState } from "react";
import ProductForm from "../../../components/Product/ProductForm";
import { getAllProduct } from "../../../../api/product";
import { DocumentData } from "firebase/firestore";
import Productcard from "../../../components/Product/Productcard";

interface Product {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
}

const Products = () => {
  const [products, setProducts] = useState<
    { id: string; data: DocumentData }[]
  >([]);

  const getProducts = async () => {
    let allItems: { id: string; data: DocumentData }[] = [];
    await getAllProduct().then((docs) => {
      if (docs) {
        docs.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          //   allItems[doc.id] = doc.data()
          let data = doc.data();
          let product = {
            id: doc.id,
            data,
          };
          allItems.push(product);
          // console.log(doc.id, " => ", doc.data());
        });
      }
    });
    console.log(allItems);
    setProducts(allItems);
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      <h1>Products</h1>
      <div className="form_container">
        {/* <ProductForm /> */}
        {products.map((product, index) => (
          <Productcard product={product} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Products;
