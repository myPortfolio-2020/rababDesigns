import { gsap, ScrollTrigger } from "./gsapSetup";

export const hiThereAnimation = (hi: HTMLElement | null) => {
  gsap.from(hi, {
    y: 107,
    keyframes: {
      // scale: [1.1, 4, 1.1],
      letterSpacing: ["11px", "12px"],
    },
    scale: 1.1,
    duration: 8,
    ease: "power1.out",
    scrollTrigger: {
      trigger: ".hi",
      start: "2% center",
      end: "2% 20%",
      toggleActions: "play none none reverse",
      scrub: true,
    },
  });
};
