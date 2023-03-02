import React, { useState } from "react";
import Product from "../Product";

const ProductList = () => {
  const [Products, setProducts] = useState([
    { name: "React js", price: "120$", quantity: 1, id: 1 },
    { name: "Vue js", price: "220$", quantity: 2, id: 2 },
    { name: "Angular js", price: "180$", quantity: 3, id: 3 },
  ]);
  const getId = () => {
    console.log("ff");
  };
  const incrementHandler = (id) => {
    const TestProducts = [...Products];
    const selectedProduct = TestProducts.find((pro) => pro.id === id);
    selectedProduct.quantity++;
    setProducts(TestProducts);
    // selectedProduct.quantity++;
    console.log(Products.length);
  };
  const decrementHandler = (id) => {
    const customProducts = [...Products];
    const selectedProduct = customProducts.find((pro) => pro.id === id);
    if (selectedProduct.quantity > 1) {
      selectedProduct.quantity--;
    } else {
      selectedProduct.quantity = 0;
      removeHandler();
    }
    setProducts(customProducts);
  };
  const removeHandler = (productId) => {
    const filteredProduct = Products.filter(
      (myProduct) => myProduct.id !== productId
    );
    setProducts(filteredProduct);
  };
  const changeHandler = (id, e) => {
    const TestProducts = [...Products];
    const selectedProduct = TestProducts.find((p) => p.id === id);
    selectedProduct.name = e.target.value;
    console.log(selectedProduct);
    setProducts(TestProducts);
  };
  return (
    <div className="bg-[#735F32] w-3/6 m-auto px-6 py-4 rounded-xl mt-4">
      {Products.length > 0 ? (
        Products.map((product) => (
          <Product
            name={product.name}
            price={product.price}
            quantity={product.quantity}
            productId={() => {
              getId(product.id);
            }}
            increment={() => incrementHandler(product.id)}
            decrement={() => decrementHandler(product.id)}
            remove={() => removeHandler(product.id)}
            change={(e) => changeHandler(product.id, e)}
          />
        ))
      ) : (
        <div className="text-white text-center text-4xl font-mono underline">
          Adding item..!
        </div>
      )}
    </div>
  );
};

export default ProductList;
