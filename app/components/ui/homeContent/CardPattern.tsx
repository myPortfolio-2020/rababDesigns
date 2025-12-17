import React, { useEffect, useRef } from "react";
import { cardPatternAnimation } from "./../../animation/cardPatternAnimation";

import Interests from "./Interests";

const CardPattern = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const cleanup = cardPatternAnimation(containerRef.current, 150); // move 150px
    return cleanup; // cleanup on unmount
  }, []);
  return (
    <>
      <div className="down pt-[80px] pl-[70px] pb-[19px]">
        <div className="text-3xl">
          Deeply
          <br />
          <span className="text-2xl">
            interested in <span className="tracking-[6px]">...</span>
          </span>
        </div>
      </div>
      <div>
        <Interests />
      </div>
    </>
  );
};

export default CardPattern;
