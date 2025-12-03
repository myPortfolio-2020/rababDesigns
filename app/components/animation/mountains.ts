import { gsap, ScrollTrigger } from "./gsapSetup";

export const mountains = (
  path: HTMLElement | null,
  path2: HTMLElement | null
) => {
  gsap.to(path, {
    x: 999, // slide to left
    // yoyo: true,
    delay: 0,
    duration: 36, // slow & smooth
    repeat: -1, // infinite
    ease: "expo.out", // perfectly smooth, no easing bumps
  });
  gsap.from(path2, {
    x: -399, // slide to left
    delay: 0,
    // yoyo: true,
    duration: 20, // slow & smooth
    repeat: -1, // infinite
    ease: "expo.out", // perfectly smooth, no easing bumps
  });
};
