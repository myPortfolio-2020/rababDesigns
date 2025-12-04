import React, { useEffect, useRef } from "react";
import { shapeAnimation } from "../../animation/ShapeAnimations";

const WorkDone = () => {
  // ✅ Use HTMLDivElement here
  const shape1 = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!shape1.current) return;
    shapeAnimation(); // your animation function
  }, []);

  return (
    <div
      ref={shape1}
      className="shape1 relative bg-[#fff] border-24 border-[#EEEEEE] rounded w-[80%] xl:mx-0 mx-auto min-h-[360px]"
    >
      <div className="absolute bottom-[-12px] right-[-62px] p-3 rounded rotate-[-34deg] overflow-auto bg-[var(--supportingColorGreen)] z-10 text-[var(--background)]">
        Desktop & Mobile
      </div>

      <div className="flexx justify-betweenx text-center relative">
        <div className="h-[300px] pt-3 xl:pl-3 pl-0 w-1/2 gap-3 flex flex-col float-left">
          <div className="shape2 flex-1 p-4 gap-3">
            <div className="shape6 text-left mt-3"></div>
            <div className="shape7 text-left mt-3"></div>
            <div className="shape8 text-left mt-3"></div>
          </div>
          <div className="shape3 flex-1 p-4 gap-3">
            <div className="shape6 text-left mt-3"></div>
            <div className="shape7 text-left mt-3"></div>
            <div className="shape8 text-left mt-3"></div>
          </div>
          <div className="shape4 flex-1 p-4 gap-3">
            <div className="shape6 text-left mt-3"></div>
            <div className="shape7 text-left mt-3"></div>
            <div className="shape8 text-left mt-3"></div>
          </div>
        </div>
        <div className="w-1/2 xl:pl-3 pl-0 pt-3 pr-3 float-right top-0">
          <div className="shape5">
            <div className="flex justify-between items-center ml-3">
              <div className="shape9 text-left mt-3"></div>
              <div className="shape6 text-left mt-3"></div>
            </div>
            <div className="ml-3 mr-3">
              <div className="shape6 text-left mt-3"></div>
              <div className="shape7 text-left mt-3"></div>
              <div className="shape8 text-left mt-3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkDone;
