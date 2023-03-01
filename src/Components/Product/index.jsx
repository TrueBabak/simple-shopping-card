import React from "react";

const Product = ({ name, price, quantity }) => {
  return (
    <div className="bg-[#282A3A] m-2 rounded-lg px-6 py-3 text-white flex">
      <div className="w-3/12 m-1 flex">
        <p className="px-1">Course: </p>
        <p className="px-1"> {name} </p>
      </div>
      <div className="w-3/12 m-1 flex">
        <p className="px-1">Price: </p>
        <p className="px-1">{price}</p>
      </div>
      <div className="w-1/12 m-1 flex text-[#C69749]">
        <p className="w-5 h-5 bg-[#735F32] flex justify-center items-center rounded-full p-3">
          {quantity}
        </p>
      </div>
      <div className="w-3/12 m-1 flex text-black">
        <input type="text" />
      </div>
      <div className="w-1/12 m-1 flex">
        <div className="w-7 h-7 rounded-lg border bg-[#7c6328] border-[#735F32] text-[#C69749] flex items-center justify-center mx-1">
          -
        </div>
        <div className="w-7 h-7 rounded-lg border bg-[#ac8938] border-[#735F32] text-[#ffc261] flex items-center justify-center mx-1">
          +
        </div>
      </div>
      <div className="w-1/12 flex justify-center items-center text-black ">
        <button className="mx-auto h-7 border text-[#735F32] border-[#C69749] px-2 rounded-lg">
          Delete!
        </button>
      </div>
    </div>
  );
};

export default Product;
