import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { newToMapAnimation } from "../../animation/newToMapAnimation";

const NewToMap = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    newToMapAnimation(containerRef.current);
  }, []);

  return (
    <>
      <div
        ref={containerRef}
        className="newToMap w-[260px] xl:ml-[200px] ml-[38%] xl:pt-49 pt-[120px]"
      >
        <div className="pb-4">
          <span className="text-xl">Every Journey</span>
          <br />
          <span className="text-3xl"> Has a Direction</span>
        </div>
        {/* <div className="text-xl pb-4">
          Experienced in my field, new to this city — ready to learn its rhythm
          and contribute my voice.
        </div> */}
        <div className="bracketBox pb-4">
          I design for the moments that matter most — when a nurse needs
          clarity, when a patient feels lost, when a system needs to just work.
        </div>
        <div className="animate-bounce">
          <Image src="/assets/downArrow.png" alt="" width={28} height={70} />
        </div>
      </div>
    </>
  );
};

export default NewToMap;
