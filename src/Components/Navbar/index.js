import React from "react";

const Navbar = ({ ProductLength }) => {
  console.log(ProductLength);
  return (
    <div className="bg-[#735F32] absolute w-1/6 right-0 top-0 m-4 px-6 py-4 rounded-xl">
      <div className="text-center text-white font-mono text-lg flex items-center justify-between">
        Number of products:
        <div className="underline bg-[#C69749] w-5 h-5 rounded-full flex justify-center items-center p-4">
          {ProductLength}
        </div>
      </div>
      <div>salam</div>
    </div>
  );
};

export default Navbar;
