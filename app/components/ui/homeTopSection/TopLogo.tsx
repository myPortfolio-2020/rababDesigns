import React from "react";
import Pole from "../homeMiddleSection/Pole";

const TopLogo = () => {
  return (
    <>
      <div className="relative">
        <div className="absolute top-[250px] xl:left-[-60px] left-[-240px]">
          <Pole />
        </div>
      </div>
      <div className="flex flex-col xl:pt-60 pt-[40px]">
        <div className="text-7xl yearGredient -skew-4 bg-sky-300/75">2025</div>
        <div className="text-3xl font-light text-[var(--supportingColorGreen)] mt-1 mb-2 -skew-4">
          Rabab Designs
        </div>
        <div className="text-xl  text-[var(--terminalBlue)] -skew-3">
          From Here to Form
        </div>
      </div>
    </>
  );
};

export default TopLogo;
