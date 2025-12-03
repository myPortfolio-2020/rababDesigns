"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRefs = useRef<HTMLDivElement[]>([]);
  const TRAIL_DOTS_COUNT = 3;

  // --- 1. Cursor Movement Effect ---
  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    dotRefs.current = dotRefs.current.slice(0, TRAIL_DOTS_COUNT);

    const moveCursor = (e: MouseEvent) => {
      const { clientX, clientY } = e;

      // Move main cursor
      gsap.to(cursor, {
        x: clientX - cursor.offsetWidth / 2,
        y: clientY - cursor.offsetHeight / 2,
        duration: 0.1,
        ease: "power2.out",
      });

      // Move trailing dots
      dotRefs.current.forEach((dot, i) => {
        gsap.to(dot, {
          x: clientX - dot.offsetWidth / 2,
          y: clientY - dot.offsetHeight / 2,
          duration: 0.2 + i * 0.05,
          ease: "linear",
        });
      });
    };

    window.addEventListener("mousemove", moveCursor);
    document.body.style.cursor = "none";

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.body.style.cursor = "default";
    };
  }, []);

  // --- 2. Interactive Hover Effect ---
  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const interactiveElements = document.querySelectorAll<
      HTMLAnchorElement | HTMLButtonElement | HTMLElement
    >(".interactive-hover, a, button");

    const cleanup: (() => void)[] = [];

    interactiveElements.forEach((el) => {
      const handleMouseEnter = () => {
        gsap.to(cursor, {
          scale: 1.8,
          duration: 0.3,
          ease: "power2.out",
        });
      };
      const handleMouseLeave = () => {
        gsap.to(cursor, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      };

      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);

      cleanup.push(() => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    });

    return () => cleanup.forEach((fn) => fn());
  }, []);

  // --- Component Styles ---
  const cursorStyle =
    "fixed top-0 left-0 rounded-full pointer-events-none z-[9999] will-change-transform";

  return (
    <>
      {/* Trailing dots */}
      {[...Array(TRAIL_DOTS_COUNT)].map((_, i) => (
        <div
          key={i}
          ref={(el) => (dotRefs.current[i] = el!)}
          className={`${cursorStyle} w-3 h-3 bg-[var(--terminalBlue)]`}
          style={{ opacity: 1 - i * 0.2, transform: "translate(-50%, -50%)" }}
        />
      ))}

      {/* Main cursor */}
      <div
        ref={cursorRef}
        className={`${cursorStyle} w-5 h-5 border-2 border-[var(--supportingColorGreen)]`}
        style={{ transform: "translate(-50%, -50%)" }}
      />
    </>
  );
}
