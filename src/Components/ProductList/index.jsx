import React, { useContext } from "react";
import { Context } from "../Context";
import Product from "../Product";

const ProductList = () => {
  const {
    Products,
    incrementHandler,
    decrementHandler,
    removeHandler,
    changeHandler,
    ProductLength,
  } = useContext(Context);
  return (
    <div className="bg-[#735F32] w-3/6 m-auto px-6 py-4 rounded-xl mt-4">
      {ProductLength > 0 ? (
        Products.map((product) => (
          <Product
            product={product}
            increment={() => incrementHandler(product.id)}
            decrement={() => decrementHandler(product.id)}
            remove={() => removeHandler(product.id)}
            change={(e) => changeHandler(product.id, e)}
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
