import React from "react";

interface Product {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
}

const Productcard = ({ product }) => {
  return (
    <div className="card">
      <img src={product.data.imageUrl} alt="product" />
      <div className="top">
        <h3 className="heading">{product.data.name}</h3>
        <h5 className="user-price">{`User Price : ${product.data.userPrice}`}</h5>
        <h5 className="customer-price">{`Customer Price : ${product.data.customerPrice}`}</h5>
      </div>
      <div className="middle">
        <p className="description">{product.data.description}</p>
      </div>
      <div className="bottom">
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default Productcard;
