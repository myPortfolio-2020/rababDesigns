// components/MagneticCursor.js
"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function MagneticCursor() {
  const cursorRef = useRef(null);
  const dotRefs = useRef([]);
  const maskRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    // Initialize trailing dots
    dotRefs.current = dotRefs.current.slice(0, 3); // Three dots

    const moveCursor = (e) => {
      // Move main cursor
      gsap.to(cursor, {
        x: e.clientX - cursor.offsetWidth / 2,
        y: e.clientY - cursor.offsetHeight / 2,
        duration: 0.15,
        ease: "power2.out",
      });

      // Move trailing dots with stagger
      dotRefs.current.forEach((dot, i) => {
        gsap.to(dot, {
          x: e.clientX - dot.offsetWidth / 2,
          y: e.clientY - dot.offsetHeight / 2,
          duration: 0.25 + i * 0.9,
          ease: "power2.out",
        });
      });

      // Move mask spotlight
      gsap.to(maskRef.current, {
        x: e.clientX - 100, // center of mask
        y: e.clientY - 100,
        duration: 0.12,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  // Magnetic effect on buttons
  useEffect(() => {
    const buttons = document.querySelectorAll(".magnetic");
    buttons.forEach((btn) => {
      btn.addEventListener("mouseenter", () => {
        gsap.to(cursorRef.current, {
          scale: 2,
          duration: 0.3,
          ease: "power2.out",
        });
      });
      btn.addEventListener("mouseleave", () => {
        gsap.to(cursorRef.current, {
          scale: 3,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    });
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* Background */}

      {/* SVG Mask */}
      <svg className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <defs>
          <mask id="cursorMask">
            <rect width="100%" height="100%" fill="white" />
            <circle ref={maskRef} cx="100" cy="100" r="100" fill="black" />
          </mask>
        </defs>
        <rect width="100%" height="100%" fill="black" mask="url(#cursorMask)" />
      </svg>

      {/* Trailing dots */}
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          ref={(el) => (dotRefs.current[i] = el)}
          className={`fixed top-0 left-0 w-4 h-4 rounded-full bg-[var(--terminalBlue)] pointer-events-none z-50 opacity-${
            100 - i * 20
          }`}
        />
      ))}

      {/* Main cursor */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-6 h-6 rounded-full bg-[var(--supportingColorGreen)] pointer-events-none z-50"
      />
    </div>
  );
}
