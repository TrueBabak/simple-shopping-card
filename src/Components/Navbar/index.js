import React, { useContext } from "react";
import SelectComponent from "../../Common/Select";
import { Context } from "../Context";

const Navbar = () => {
  const { offerHandler, shopItemLength, filterItem, SortItem } =
    useContext(Context);
  const sizeObject = [
    { name: "All", value: "All" },
    { name: "S", value: "S" },
    { name: "L", value: "L" },
    { name: "X", value: "X" },
    { name: "XL", value: "XL" },
    { name: "XXl", value: "XXL" },
  ];
  const priceSort = [
    { name: "Defualt", value: "Defualt" },
    { name: "Highest", value: "Highest" },
    { name: "Lowest", value: "Lowest" },
  ];
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
      <SelectComponent
        title="Filter by size:"
        Main={sizeObject}
        Handler={filterItem}
      />
      <SelectComponent
        title="Sort item by price:"
        Main={priceSort}
        Handler={SortItem}
      />
    </div>
  );
};

export default Navbar;
