import { gsap, ScrollTrigger } from "./gsapSetup";

export function cardPatternAnimation(element: HTMLElement) {
  if (!element) return;

  // Create GSAP context (prevents cleanup bugs)
  const ctx = gsap.context(() => {
    gsap.set(element, { x: "30%" });

    gsap.to(element, {
      x: "-300%",
      // y: 0,
      // rotate: 2,
      // skewX: 1,
      duration: 2,
      ease: "power4.inOut",
      scrollTrigger: {
        trigger: ".forPin",
        start: "center -30%",
        end: "bottom 140%",
        scrub: true,
        pin: true,
        invalidateOnRefresh: true, // ⭐ important fix
      },
    });
  }, element);

  // Return a cleanup function to kill ScrollTrigger when component unmounts
  return () => {
    ctx.revert(); // kills animations safely
    ScrollTrigger.refresh();
  };
}
