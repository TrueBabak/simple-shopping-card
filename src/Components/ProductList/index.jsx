import React, { useContext } from "react";
import { Context } from "../Context";
import Product from "../Product";

const ProductList = () => {
  const {
    shopItem,
    incrementHandler,
    decrementHandler,
    removeHandler,
    ProductLength,
  } = useContext(Context);
  return (
    <div className="bg-[#735F32] w-4/6 m-auto px-6 py-4 rounded-xl mt-4">
      {ProductLength > 0 ? (
        shopItem.map((product) => (
          <Product
            product={product}
            increment={() => incrementHandler(product.id)}
            decrement={() => decrementHandler(product.id)}
            remove={() => removeHandler(product.id)}
            key={product.key}
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
