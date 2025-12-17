import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function cardPatternAnimation(
  element: HTMLElement,
  distance: number = 100
) {
  if (!element) return;

  // Create GSAP context (prevents cleanup issues)
  const ctx = gsap.context(() => {
    gsap.to(element, {
      y: distance, // move down by `distance` px
      ease: "power1.out", // smooth easing
      scrollTrigger: {
        trigger: element,
        start: "top bottom", // start when top of element hits bottom of viewport
        end: "bottom top", // end when bottom of element hits top of viewport
        scrub: true, // moves element along with scroll
        markers: false, // set true if you want debug markers
        invalidateOnRefresh: true,
      },
    });
  }, element);

  // Return cleanup function
  return () => {
    ctx.revert();
    ScrollTrigger.refresh();
  };
}
