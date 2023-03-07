import React, { useContext } from "react";
import { Context } from "../Context";

const Navbar = () => {
  const { offerHandler, shopItemLength, filterItem, SortItem } =
    useContext(Context);
  return (
    <div className="bg-[#735F32] absolute w-1/6 right-0 top-0 m-4 px-6 py-4 rounded-xl">
      <div className="text-center text-white font-mono text-lg flex items-center justify-between">
        Number of products:
        <div className="underline bg-[#C69749] w-5 h-5 rounded-full flex justify-center items-center p-4">
          {shopItemLength}
        </div>
      </div>
      <div className="mt-4">
        <input
          className="bg-[#282A3A] placeholder:text-gray-500 w-full px-2 py-1 rounded-lg outline-0 text-white"
          type="text"
          onChange={(e) => offerHandler(e)}
          placeholder="Enter your key..."
        />
      </div>
      <div className="mt-4 flex">
        <p className="text-white">Filter by size:</p>
        <select
          onChange={(e) => filterItem(e)}
          className="rounded-full px-2 py-1 text-xs mx-3"
        >
          <option value="All" defaultChecked>
            All
          </option>
          <option value="S">S</option>
          <option value="L">L</option>
          <option value="X">X</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
        </select>
      </div>
      <div className="mt-4 flex">
        <p className="text-white">Sort item by price:</p>
        <select
          onChange={(e) => SortItem(e)}
          className="rounded-full px-2 py-1 text-xs mx-3"
        >
          <option value="Defualt" defaultChecked>
            Defualt
          </option>
          <option value="Highest">Highest</option>
          <option value="Lowest">Lowest</option>
        </select>
      </div>
    </div>
  );
};

export default Navbar;
