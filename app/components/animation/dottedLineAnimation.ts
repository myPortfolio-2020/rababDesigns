import { gsap } from "./gsapSetup";
export const dottedLineAnimation = (path: SVGPathElement | null) => {
  gsap.to(path, {
    strokeDashoffset: -14,
    duration: 0.5,
    repeat: -1,
    ease: "linear",
  });
  if (!path) return;
  const dAttr = path.getAttribute("d");
  if (!dAttr) return;

  const coordsMatch = dAttr.match(/-?\d+\.?\d*/g);
  if (!coordsMatch) return;

  const coords = coordsMatch.map(Number);
  const points: { x: number; y: number }[] = [];
  for (let i = 0; i < coords.length; i += 2) {
    points.push({ x: coords[i], y: coords[i + 1] });
  }

  const base = points.map((p) => ({ ...p }));
  let t = 0;

  gsap.ticker.add(() => {
    t += 0.03;
    points.forEach((p, i) => {
      const wave = Math.sin(t + i * 0.4) * 12;
      p.y = base[i].y + wave;
    });

    const d = `M${points[0].x} ${points[0].y} C${points
      .slice(1)
      .map((pt) => `${pt.x} ${pt.y}`)
      .join(" ")}`;

    path.setAttribute("d", d);
  });
};
