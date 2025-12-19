"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRefs = useRef<HTMLDivElement[]>([]);
  const TRAIL_DOTS_COUNT = 3;

  // --- Cursor Movement + Hide Cursor ---
  useEffect(() => {
    // Run only on client
    if (typeof window === "undefined") return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    dotRefs.current = dotRefs.current.slice(0, TRAIL_DOTS_COUNT);

    const moveCursor = (e: MouseEvent) => {
      const { clientX, clientY } = e;

      const cursorWidth = cursor.offsetWidth || 0;
      const cursorHeight = cursor.offsetHeight || 0;

      gsap.to(cursor, {
        x: clientX - cursorWidth / 2,
        y: clientY - cursorHeight / 2,
        duration: 0.1,
        ease: "power2.out",
      });

      dotRefs.current.forEach((dot, i) => {
        if (!dot) return;
        const dotWidth = dot.offsetWidth || 0;
        const dotHeight = dot.offsetHeight || 0;

        gsap.to(dot, {
          x: clientX - dotWidth / 2,
          y: clientY - dotHeight / 2,
          duration: 0.2 + i * 0.05,
          ease: "linear",
        });
      });
    };

    // Hide native cursor safely after hydration
    document.body.style.cursor = "none";
    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.body.style.cursor = "default";
    };
  }, []);

  // --- Interactive Hover Effect ---
  useEffect(() => {
    if (typeof window === "undefined") return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    const interactiveElements = document.querySelectorAll<HTMLElement>(
      ".interactive-hover, a, button"
    );

    const enter = () =>
      gsap.to(cursor, { scale: 1.8, duration: 0.3, ease: "power2.out" });

    const leave = () =>
      gsap.to(cursor, { scale: 1, duration: 0.3, ease: "power2.out" });

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    return () =>
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
  }, []);

  // --- Component Rendering ---
  const cursorStyle =
    "fixed top-0 left-0 rounded-full  z-[9999] will-change-transform";

  return (
    <>
      {/* Trailing dots */}
      {[...Array(TRAIL_DOTS_COUNT)].map((_, i) => (
        <div
          key={i}
          ref={(el) => {
            if (el) dotRefs.current[i] = el;
          }}
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
