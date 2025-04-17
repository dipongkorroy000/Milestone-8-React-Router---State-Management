import React, { useState } from "react";

const ProductForm = ({ handleAddProduct }) => {
  const [error, setError] = useState("");

  const handProductSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;
    // console.log(name, price, quantity);
    const newProduct = {
      name,
      price,
      quantity,
    };
    // console.log(newProduct);
    if (name.length < 3) {
      setError("please Enter your full name");
      return;
    } else if (price <= 0) {
      setError("please enter your current price");
      return;
    } else if (quantity <= 0) {
      setError("select your product quantity");
      return;
    } else {
      setError("");
    }
    if (!error) {
      handleAddProduct(newProduct);
    }
  };

  return (
    <div>
      <h3>Add a Product</h3>
      <form onSubmit={handProductSubmit} action="">
        <input type="text" name="name" id="1" placeholder="Product Name" />
        <br />
        <input type="number" name="price" id="2" placeholder="price" />
        <br />
        <input type="number" name="quantity" id="3" placeholder="quantity" />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <p style={{ color: "red" }}>
        <small>{error}</small>
      </p>
    </div>
  );
};

export default ProductForm;
