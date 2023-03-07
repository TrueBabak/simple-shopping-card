import React from "react";

const Offer = ({ Handler }) => {
  return (
    <div className="mt-4">
      <input
        className="bg-[#282A3A] placeholder:text-gray-500 w-full px-2 py-1 rounded-lg outline-0 text-white"
        type="text"
        onChange={(e) => Handler(e)}
        placeholder="Enter your key..."
      />
    </div>
  );
};

export default Offer;
