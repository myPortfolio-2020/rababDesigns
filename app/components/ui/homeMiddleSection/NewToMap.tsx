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
        className="newToMap w-[260px] xl:ml-[200px] ml-[43%] xl:pt-39 pt-[120px]"
      >
        <div className="text-4xl pb-4">
          <span>Just new</span>
          <br />
          <span>to the map</span>
        </div>
        <div className="text-xl pb-4">
          Experienced in my field, new to this city — ready to learn its rhythm
          and contribute my voice.
        </div>
        <div className="bracketBox pb-4">
          A journey of continuous learning, evolving passions, and purposeful
          impact.
        </div>
        <div>
          <Image src="/assets/downArrow.png" alt="" width={28} height={70} />
        </div>
      </div>
    </>
  );
};

export default NewToMap;
