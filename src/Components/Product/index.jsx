import React from "react";
import { BsFillTrashFill } from "react-icons/bs";

const Product = ({ increment, decrement, remove, item }) => {
  return (
    <div className="bg-[#282A3A] m-2 rounded-lg px-6 py-3 text-white flex">
      <div className="w-3/12 m-1 flex">
        <p className="px-1">Course: </p>
        <p className="px-1"> {item.title} </p>
      </div>
      <div className="w-2/12 m-1 flex">
        <p className="px-1">Price: </p>
        <p className="px-1 flex">{item.price}</p>
      </div>
      <div className="w-2/12 m-1 flex">
        <p className="px-1">Size: </p>
        <p className="px-1 flex">
          {item.availableSize.map((i) => {
            return <p className="px-2">{i}</p>;
          })}
        </p>
      </div>
      <div className="m-1 flex text-[#C69749]">
        <p className="w-5 h-5 bg-[#735F32] flex justify-center items-center rounded-full p-3">
          {item.quantity}
        </p>
      </div>
      <div className="w-2/12 m-1 flex">
        <div
          className="select-none cursor-pointer w-7 h-7 rounded-lg border bg-[#7c6328] border-[#735F32] text-[#C69749] flex items-center justify-center mx-1"
          onClick={decrement}
        >
          {item.quantity === 1 ? (
            <BsFillTrashFill className="text-red-500" />
          ) : (
            "-"
          )}
        </div>
        <div
          className="select-none cursor-pointer w-7 h-7 rounded-lg border bg-[#ac8938] border-[#735F32] text-[#ffc261] flex items-center justify-center mx-1"
          onClick={increment}
        >
          +
        </div>
      </div>
      <div className="w-2/12 flex justify-center items-center text-black ">
        <button
          className="mx-auto h-7 border text-[#735F32] border-[#C69749] px-2 rounded-lg"
          onClick={remove}
        >
          Delete!
        </button>
      </div>
    </div>
  );
};

export default Product;
