"use client";
import React, { useEffect, useRef } from "react";
import { hiThereAnimation } from "../../animation/hiThereAnimation";

const HiThere = () => {
  const hiThereRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    // gsap.from(".hi", {
    //   y: 130,
    //   keyframes: {
    //     // scale: [1.1, 4, 1.1],
    //     letterSpacing: ["11px", "12px"],
    //   },
    //   scale: 1.1,
    //   duration: 8,
    //   ease: "power1.out",
    //   scrollTrigger: {
    //     trigger: ".hi",
    //     start: "2% center",
    //     end: "2% 20%",
    //     toggleActions: "play none none reverse",
    //     scrub: true,
    //   },
    // });

    hiThereAnimation(hiThereRef.current);
  }, []);
  return (
    <>
      <div className="flex justify-center mt-10 mb-30 text-[19px] tracking-[9]">
        <div className="hi" ref={hiThereRef}>
          <span className="mr-2 text-[var(--sharpRed)]"> Hi </span>
          <span className="text-[var(--terminalBlue)]">There .</span>
        </div>
      </div>
    </>
  );
};

export default HiThere;
