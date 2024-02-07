import { Field, Form, Formik, FormikHelpers } from "formik";
import React, { useState } from "react";
import { addProduct } from "../../../api/product";
import { storage } from "../../../firebase.config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

interface Product {
  name: string;
  description: string;
  imageUrl: string;
  userPrice: number;
  customerPrice: number;
}

const ProductForm = () => {
  const [productData, setProductData] = useState<Product>({
    name: "",
    description: "",
    imageUrl: "",
    userPrice: 0,
    customerPrice: 0,
  });
  const [image, setImage] = useState<File>();
  const [imageUrl, setImageUrl] = useState("");

  const handleAddProduct = async (value: Product) => {
    const productImageRef = ref(storage, `files/${v4()}`);
    await uploadBytes(productImageRef, image);
    await getDownloadURL(productImageRef).then((imgUrl) => {
      setImageUrl(imgUrl);
      value.imageUrl = imgUrl;
      console.log(value);
      addProduct(value);
    });
  };
  return (
    <Formik
      initialValues={productData}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          //   values.imageUrl = imageUrl;
          handleAddProduct(values);
          actions.setSubmitting(false);
          actions.resetForm();
        }, 1000);
      }}
    >
      <Form className="row ">
        <div className="col">
          <label htmlFor="name">Name</label>
          <Field id="name" name="name" placeholder="Product Name" />
        </div>
        <div className="col">
          <label htmlFor="description">Description</label>
          <Field
            id="description"
            name="description"
            placeholder="Description of product"
          />
        </div>
        {/* <div className="col">
          <label htmlFor="imageUrl">Image URL</label>
          <Field id="imageUrl" name="imageUrl" placeholder="Url of image" />
        </div> */}
        <div className="col">
          <label htmlFor="userPrice">User Price</label>
          <Field
            id="userPrice"
            name="userPrice"
            placeholder="User Price of the product"
            type="number"
            min="0"
          />
        </div>
        <div className="col">
          <label htmlFor="customerPrice">Customer Price</label>
          <Field
            id="customerPrice"
            name="customerPrice"
            placeholder="Customer Price of the product"
            type="number"
            min="0"
          />
        </div>
        <div className="col">
          <input
            type="file"
            name="image"
            id="image"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />
          {/* <button onClick={handleUploadImage}>Upload</button> */}
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default ProductForm;
