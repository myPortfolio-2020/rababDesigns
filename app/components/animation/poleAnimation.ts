import { gsap, ScrollTrigger } from "./gsapSetup";

export const poleAnimation = (pole: HTMLElement | null) => {
  gsap.to(pole, {
    y: 130,
    duration: 1,
    ease: "expo.inOut",
    scrollTrigger: {
      trigger: pole,
      start: "top 90%",
      end: "bottom bottom",
      scrub: true,
    },
  });
};
