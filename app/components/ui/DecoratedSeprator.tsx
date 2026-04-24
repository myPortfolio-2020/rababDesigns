import React from "react";

const DecoratedSeprator = () => {
  return (
    <>
      <div className="w-full flex items-center gap-1 py-4 bg-[var(--background)] mt-20 mb-20">
        <div className="w-2 h-2 rounded-full bg-gray-500"></div>
        <div className="flex-1 h-px bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700"></div>
        <div className="w-2 h-2 rounded-full bg-gray-500"></div>
      </div>
    </>
  );
};

export default DecoratedSeprator;
