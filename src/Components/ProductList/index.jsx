import React, { useContext } from "react";
import { Context } from "../Context";
import Product from "../Product";

const ProductList = () => {
  const {
    Products,
    getId,
    incrementHandler,
    decrementHandler,
    removeHandler,
    changeHandler,
  } = useContext(Context);
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
