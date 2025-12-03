import React from "react";
import HiThere from "../homeMiddleSection/HiThere";
import Transit from "./Transit";
import Mountains from "../homeMiddleSection/Mountains";
import NewToMap from "../homeMiddleSection/NewToMap";
import Pole from "../homeMiddleSection/Pole";

const JourneyFrame = () => {
  return (
    <>
      <div className="relative">
        <div className="lg:block hidden absolute top-[100px] left:[0] -z-10">
          <Mountains />
        </div>

        <HiThere />
        <div className="flex lg:flex-row flex-col justify-center">
          <div className="lg:w-1/3 w-full relative">
            {/* <Pole /> */}
            <NewToMap />
          </div>
          <div className="lg:w-2/3 w-full">
            <Transit />
          </div>
        </div>
      </div>
    </>
  );
};

export default JourneyFrame;
