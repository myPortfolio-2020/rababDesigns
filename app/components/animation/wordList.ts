// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export const workList = (element: HTMLElement) => {
//   const comeInElement = element.querySelector(".comeIn");

//   if (!comeInElement) return;

//   gsap.fromTo(
//     comeInElement,
//     { x: "-100%" }, // Start position
//     {
//       x: "0%", // End position
//       ease: "power1.out",
//       duration: 0.5,
//       scrollTrigger: {
//         trigger: comeInElement,
//         start: "top 100%",
//         end: "top 50%",
//         // start: "top center",
//         // end: "top 50%",
//         scrub: 1,
//         // markers: true,
//       },
//     }
//   );
// };

// workList.ts
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const workList = (element: HTMLElement) => {
  // Use querySelectorAll to find ALL instances
  const comeInElements = element.querySelectorAll(".comeIn");

  if (comeInElements.length === 0) {
    console.warn("GSAP: Could not find any elements with class '.comeIn'");
    return;
  }

  // No need to kill by ID here, as the component effect handles cleanup

  ScrollTrigger.matchMedia({
    // --- DESKTOP / TABLET (Min 768px) ---
    "(min-width: 768px)": function () {
      comeInElements.forEach((comeInElement, index) => {
        gsap.fromTo(
          comeInElement as HTMLElement,
          { x: "-100%" },
          {
            x: "0%",
            ease: "power1.out",
            scrollTrigger: {
              trigger: comeInElement,
              start: "top 80%",
              end: "top 20%",
              scrub: 0.5,
              markers: {
                startColor: "red",
                endColor: "red",
                indent: index * 10,
              }, // Unique marker for each item
            },
          }
        );
      });
    },

    // --- MOBILE (Max 767px) ---
    "(max-width: 767px)": function () {
      comeInElements.forEach((comeInElement, index) => {
        gsap.fromTo(
          comeInElement as HTMLElement,
          { x: "-100%" },
          {
            x: "0%",
            ease: "power1.out",
            scrollTrigger: {
              trigger: comeInElement,
              start: "top bottom",
              end: "center center",
              scrub: 0.5,
              markers: {
                startColor: "blue",
                endColor: "blue",
                indent: index * 10,
              }, // Unique marker for each item
            },
          }
        );
      });
    },
  });
};
