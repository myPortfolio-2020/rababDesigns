import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const workList = (element: HTMLElement) => {
  gsap.set(element, { x: "-100%" }); // fixed

  gsap.to(element, {
    x: "10%",
    duration: 1,
    ease: "power4.inOut",
    scrollTrigger: {
      trigger: element, // ✅ real element, not a string
      start: "top center",
      end: "bottom 10%",
      scrub: true,
      markers: true,
      invalidateOnRefresh: true,
    },
  });
};
