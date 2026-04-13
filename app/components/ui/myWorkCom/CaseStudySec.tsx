"use client";
import React, { useEffect, useRef } from "react";
// Import GSAP modules here to ensure they are available before use
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { workList } from "../../animation/wordList";

// Ensure GSAP plugins are registered at the top level
gsap.registerPlugin(ScrollTrigger);

const CaseStudySec = ({ children }: { children: React.ReactNode }) => {
  const aniRef = useRef<HTMLDivElement | null>(null);
  // REMOVE: const [isMounted, setIsMounted] = useState(false);

  // This single useEffect handles both setup and cleanup,
  // running only ONCE after the initial render.
  useEffect(() => {
    // Check if the ref is available
    if (aniRef.current) {
      const element = aniRef.current;

      // 1. Force the container to not clip itself (moved from the second effect)
      element.style.overflowX = "hidden";

      // 2. Run the animation setup (moved from the second effect)
      workList(element as HTMLElement);

      // 3. Force ScrollTrigger to calculate everything correctly
      ScrollTrigger.refresh(true);
    }

    // Cleanup function to kill all related ScrollTriggers on unmount
    return () => {
      // Use the cleanup logic from your original code
      ScrollTrigger.getAll().forEach((trigger) => {
        if (
          trigger.vars.trigger === aniRef.current ||
          aniRef.current?.contains(trigger.trigger as Node)
        ) {
          trigger.kill();
        }
      });
      gsap.killTweensOf(aniRef.current);
    };
  }, []); // Empty dependency array ensures it runs only once

  return (
    <div ref={aniRef} className="w-full relative">
      {children}
    </div>
  );
};

export default CaseStudySec;
