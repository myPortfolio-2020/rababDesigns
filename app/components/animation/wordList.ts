import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const workList = (element: HTMLElement) => {
  const comeInElement = element.querySelector(".comeIn");

  if (!comeInElement) return;

  gsap.fromTo(
    comeInElement,
    { x: "-100%" }, // Start position
    {
      x: "0%", // End position
      ease: "power1.out",
      duration: 0.5,
      scrollTrigger: {
        trigger: comeInElement,
        // start: "top 100%",
        // end: "top 50%",
        start: "top center",
        end: "top 50%",
        scrub: 1,
        // markers: true,
      },
    }
  );
};
