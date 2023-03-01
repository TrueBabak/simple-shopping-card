import React from "react";
import ProductList from "../Components/ProductList";

const App = () => {
  return (
    <div className="h-screen w-full bg-[#C69749] pt-5">
      <h1 className="font-mono text-3xl text-center">Shopping App</h1>
      <ProductList />
    </div>
  );
};

export default App;
