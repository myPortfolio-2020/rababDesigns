import React, { useEffect, useRef } from "react";
import { cardPatternAnimation } from "./../../animation/cardPatternAnimation";
import Image from "next/image";
import Interests from "./Interests";

const CardPattern = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    cardPatternAnimation(containerRef.current);
  }, []);
  return (
    <>
      <div className="forPin h-[110vh] overflow-hidden">
        <div className="pt-[80px] pl-[70px] pb-[19px]">
          <h1>
            <span className="text-3xl">Deeply </span>
            <br />
            <span className="text-2xl">interested in..</span>.
          </h1>
        </div>
        <div ref={containerRef} className="flex  items-center gap-3">
          <Interests />
        </div>
      </div>
    </>
  );
};

export default CardPattern;
