import React, { useContext } from "react";
import { Context } from "../Context";
import { shopItemLength } from "../Database";
import Product from "../Product";

const ProductList = () => {
  const { shopItem, incrementHandler, decrementHandler, removeHandler } =
    useContext(Context);
  return (
    <div className="bg-[#735F32] w-9/12 ml-10 px-6 py-4 rounded-xl mt-4">
      {shopItemLength > 0 ? (
        shopItem.map((item) => (
          <Product
            item={item}
            increment={() => incrementHandler(item.id)}
            decrement={() => decrementHandler(item.id)}
            remove={() => removeHandler(item.id)}
            key={item.key}
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
