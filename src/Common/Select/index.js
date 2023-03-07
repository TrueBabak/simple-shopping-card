import React from "react";

const SelectComponent = ({ title, Main, Handler }) => {
  return (
    <div className="mt-4 flex">
      <p className="text-white">{title}</p>
      <select
        onChange={(e) => Handler(e)}
        className="rounded-full px-2 py-1 text-xs mx-3"
      >
        {Main.map((MainItem) => {
          return <option value={MainItem.value}>{MainItem.name}</option>;
        })}
      </select>
    </div>
  );
};

export default SelectComponent;
