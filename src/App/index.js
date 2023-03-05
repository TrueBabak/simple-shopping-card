import React from "react";
import Navbar from "../Components/Navbar";
import ProductList from "../Components/ProductList";

const App = () => {
  return (
    <div className="h-screen w-full bg-[#C69749] pt-5 relative">
      <h1 className="font-mono text-3xl text-center">Shopping App</h1>
      <ProductList />
      <Navbar />
    </div>
  );
};

export default App;
