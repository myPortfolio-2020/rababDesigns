// "use client";
// import React, { useEffect, useRef } from "react";
// import { workList } from "../../animation/wordList";

// const CaseStudySec = ({ children }: { children: React.ReactNode }) => {
//   const aniRef = useRef<HTMLDivElement | null>(null);
//   useEffect(() => {
//     if (aniRef.current) {
//       workList(aniRef.current as HTMLElement);
//     }
//   }, []);
//   return <div ref={aniRef}>{children}</div>;
// };

// export default CaseStudySec;
// CaseStudySec.tsx
"use client";
import React, { useEffect, useRef, useState } from "react";
// Import GSAP modules here to ensure they are available before use
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { workList } from "../../animation/wordList";

// Ensure GSAP plugins are registered at the top level
gsap.registerPlugin(ScrollTrigger);

const CaseStudySec = ({ children }: { children: React.ReactNode }) => {
  const aniRef = useRef<HTMLDivElement | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  // This effect runs ONCE when the component mounts
  useEffect(() => {
    setIsMounted(true);

    // Cleanup function to kill all related ScrollTriggers when component unmounts
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        // Only kill triggers associated with this component's ref
        if (
          trigger.vars.trigger === aniRef.current ||
          aniRef.current?.contains(trigger.trigger as Node)
        ) {
          trigger.kill();
        }
      });
      gsap.killTweensOf(aniRef.current);
    };
  }, []);

  // This effect runs only when isMounted changes to true
  useEffect(() => {
    if (isMounted && aniRef.current) {
      // 1. Force the container to not clip itself
      aniRef.current.style.overflowX = "hidden";

      // 2. Run the animation setup
      workList(aniRef.current as HTMLElement);

      // 3. Force ScrollTrigger to calculate everything correctly
      ScrollTrigger.refresh(true);
    }
  }, [isMounted]); // Dependency on isMounted

  // Crucial CSS Check: w-full and relative are generally needed for GSAP
  return (
    <div ref={aniRef} className="w-full relative">
      {children}
    </div>
  );
};

export default CaseStudySec;
