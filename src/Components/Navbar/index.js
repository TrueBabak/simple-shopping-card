import React, { useContext } from "react";
import Offer from "../../Common/Offer";
import SelectComponent from "../../Common/Select";
import { Context } from "../Context";
import { priceSort, shopItemLength, sizeObject } from "../Database";

const Navbar = () => {
  const { offerHandler, filterItem, SortItem } = useContext(Context);
  return (
    <div className="bg-[#735F32] absolute w-1/6 right-0 top-0 m-4 px-6 py-4 rounded-xl">
      <div className="text-center text-white font-mono text-lg flex items-center justify-between">
        Number of products:
        <div className="underline bg-[#C69749] w-5 h-5 rounded-full flex justify-center items-center p-4">
          {shopItemLength}
        </div>
      </div>
      <Offer Handler={offerHandler} />
      <Offer Handler={offerHandler} />
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
