import { gsap, ScrollTrigger } from "./gsapSetup";

export const newToMapAnimation = (container: HTMLElement | null) => {
  if (!container) return;

  // Only select the divs you want to animate
  const items = container.querySelectorAll(".text-3xl, .text-xl, .bracketBox");

  gsap.fromTo(
    items,
    {
      y: 160,
      opacity: 0.3,
      // color: "var(--terminalBlue)",
      scale: 0.3,
    },
    {
      y: 0,

      scale: 1,
      opacity: 1,
      duration: 1.4,
      // 🌊 Strong ripple effect
      stagger: {
        each: 0.25,
        from: "center",
        ease: "power3.out",
      },
      // 🟥 Dramatic end color so it's VERY visible
      color: "var(--foreground)",
      ease: "power3.out",

      scrollTrigger: {
        trigger: container,
        start: "top 40%",
        end: "bottom 80%",
        scrub: true,
        toggleActions: "play none none reverse",
      },
    }
  );
};
