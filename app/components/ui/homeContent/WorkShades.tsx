import React from "react";
import WorkDone from "./WorkDone";

const WorkShades = () => {
  return (
    <>
      <div className="pages">
        <div className="h-screen bg-[var(--supportingColorBlue)] flex xl:flex-row flex-col justify-center items-center rounded-2xl">
          <div className="w-full xl:w-3/5 flex justify-end">
            <WorkDone />
          </div>
          <div className="w-full xl:w-2/5 flex pl-[80px] xl:mt-0 mt-10">
            <div>
              <div className=" text-3xl">I can’t wait to show you</div>
              <div className="text-xl leading-[34px]">
                what I’ve been up to.
              </div>
              <div className="text-sm  leading-[34px]">
                I design for all screen sizes—mobile & desktop
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkShades;
