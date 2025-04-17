import React, { useState } from "react";
import ProductForm from "./ProductForm";
import ProductTable from "./ProductTable";

const ProductManage = () => {
  const [products, setProducts] = useState([]);
  const handleAddProduct = (nawProduct) => {
    setProducts([...products, nawProduct]);
  };
//   console.log(products);
  return (
    <div>
      <ProductForm handleAddProduct={handleAddProduct}></ProductForm>
      <ProductTable products={products}></ProductTable>
    </div>
  );
};

export default ProductManage;
