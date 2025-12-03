"use client";
import { gsap, ScrollTrigger } from "./gsapSetup";
export const TrainHightlight = (hi: HTMLElement | null) => {
  gsap.from(hi, {
    x: 1,
    keyframes: {
      fill: ["#242425", "#484848", "#242425", "#242425", "#353E49", "#242425"],
    },

    scale: 1.025,
    duration: 0.5,
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
