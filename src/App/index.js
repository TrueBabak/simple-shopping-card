import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import ProductList from "../Components/ProductList";

const App = () => {
  const [Products, setProducts] = useState([
    { name: "React js", price: "120$", quantity: 1, id: 1 },
    { name: "Vue js", price: "220$", quantity: 2, id: 2 },
    { name: "Angular js", price: "180$", quantity: 3, id: 3 },
  ]);
  const ProductLength = Products.length;
  console.log(ProductLength);
  return (
    <div className="h-screen w-full bg-[#C69749] pt-5 relative">
      <h1 className="font-mono text-3xl text-center">Shopping App</h1>
      <ProductList Products={Products} setProducts={setProducts} />
      <Navbar ProductLength={ProductLength} />
    </div>
  );
};

export default App;
