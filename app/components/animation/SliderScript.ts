import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const useSliderAnimation = (
  sectionRef: React.RefObject<HTMLElement | null>,
  cardSelector = ".card"
) => {
  useEffect(() => {
    if (!sectionRef.current) return;

    const stickySection = sectionRef.current;
    const cards = stickySection.querySelectorAll(cardSelector);
    const totalCards = cards.length;
    const stickyHeight = window.innerHeight * 12;

    const arcAngle = Math.PI * 0.4;
    const startAngle = Math.PI / 2 - arcAngle / 2;

    const getRadius = () =>
      window.innerWidth < 900
        ? window.innerWidth * 7.5
        : window.innerWidth * 2.5;

    const positionCards = (progress = 0) => {
      const radius = getRadius();
      const totalTravel = 1 + totalCards / 7.5;
      const adjustedProgress = (progress * totalTravel - 1) * 0.75;

      cards.forEach((card, i) => {
        const normalizedProgress = (totalCards - 1 - i) / totalCards;
        const cardProgress = normalizedProgress + adjustedProgress;
        const angle = startAngle + arcAngle * cardProgress;

        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        const rotation = (angle - Math.PI / 2) * (180 / Math.PI);

        gsap.set(card, {
          x,
          y: -y + radius,
          rotation: -rotation,
          transformOrigin: "center center",
        });
      });
    };

    // Create ScrollTrigger (no Lenis)
    const st = ScrollTrigger.create({
      trigger: stickySection,
      start: "top top",
      end: `+=${stickyHeight}px`,
      pin: true,
      onUpdate: (self) => positionCards(self.progress),
    });

    positionCards(0);

    return () => {
      st.kill();
    };
  }, [sectionRef, cardSelector]);
};

export default useSliderAnimation;
