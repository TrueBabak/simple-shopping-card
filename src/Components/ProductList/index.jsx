import React, { useState } from "react";
import Product from "../Product";

const ProductList = () => {
  const [Products, setProducts] = useState([
    { name: "React js", price: "120$", quantity: 1, id: 1 },
    { name: "Vue js", price: "220$", quantity: 2, id: 2 },
    { name: "Angular js", price: "180$", quantity: 3, id: 3 },
  ]);
  const getId = (id) => {
    console.log(id);
  };
  return (
    <div className="bg-[#735F32] w-3/6 m-auto px-6 py-4 rounded-xl mt-4">
      {Products.map((product) => (
        <Product
          name={product.name}
          price={product.price}
          quantity={product.quantity}
          productId={() => {
            getId(product.id);
          }}
        />
      ))}
    </div>
  );
};

export default ProductList;
