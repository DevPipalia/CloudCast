import React from "react";

const TopButtons = () => {
  return (
    <>
      <div className="flex justify-around items-center my-6 ">
        <button className="text-lg font-medium hover:bg-gray-700/20 px-3 py-2 rounded-md transition ease-in">
          London
        </button>
        <button className="text-lg font-medium hover:bg-gray-700/20 px-3 py-2 rounded-md transition ease-in">
          Sydney
        </button>
        <button className="text-lg font-medium hover:bg-gray-700/20 px-3 py-2 rounded-md transition ease-in">
          Tokyo
        </button>
        <button className="text-lg font-medium hover:bg-gray-700/20 px-3 py-2 rounded-md transition ease-in">
          Mumbai
        </button>
        <button className="text-lg font-medium hover:bg-gray-700/20 px-3 py-2 rounded-md transition ease-in">
          New York
        </button>
      </div>
    </>
  );
};

export default TopButtons;
