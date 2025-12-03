import React, { useEffect, useRef } from "react";
import { dottedLineAnimation } from "../../animation/dottedLineAnimation";

const DottedWavyLine: React.FC = () => {
  const pathRef = useRef<SVGPathElement | null>(null);

  useEffect(() => {
    if (!pathRef.current) return;
    dottedLineAnimation(pathRef.current);
  }, []);

  return (
    <svg
      className="absolute top-[100px] xl:left-[6%] left-[-19%] xl:rotate-0 rotate-312 xl:w-[800px] w-[70%] z-10"
      width="100%"
      height="800"
      viewBox="0 0 800 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        ref={pathRef}
        d="M750 0 C550 50 700 250 400 400 C200 550 500 700 50 800"
        stroke="#4D4D4D"
        strokeWidth="1"
        strokeLinecap="round"
        strokeDasharray="4 10"
      />
    </svg>
  );
};

export default DottedWavyLine;
