import { gsap } from "./gsapSetup";

export function shapeAnimation() {
  const tline = gsap.timeline({
    repeat: -1,
  });

  // INITIAL RESET
  tline.set(".shape1", {
    transformOrigin: "center center",
    scaleX: 0,
    height: 0,
  });
  tline.set(".shape2, .shape3, .shape4", { scaleX: 0, width: "100%" });
  tline.set(".shape5", { scaleX: 0, scaleY: 0 });
  tline.set(".shape6", { scaleX: 0, height: 0 });
  tline.set(".shape7, .shape8", { scaleX: 0, height: 0 });
  tline.set(".shape9", { scaleX: 0, width: 0, height: 0, borderRadius: 0 });
  tline.set(".shape10, .shape11, .shape12, .shape13", {
    scaleX: 0,
    width: 0,
    height: 0,
    borderRadius: 0,
    opacity: 0,
  });
  tline.set(".shape101", { opacity: 0, width: 0 });

  // ANIMATIONS
  tline.to(".shape1", {
    scaleX: 1,
    borderRadius: 4,
    backgroundColor: "#fff",
    duration: 0.5,
    ease: "power2.out",
  });
  tline.to(".shape2", {
    scaleX: 1,
    borderRadius: 4,
    backgroundColor: "#D9D9D9",
    ease: "power2.out",
  });
  tline.to(".shape3", {
    scaleX: 1,
    borderRadius: 4,
    backgroundColor: "#EFEFEF",
    ease: "power2.out",
  });
  tline.to(".shape4", {
    scaleX: 1,
    borderRadius: 4,
    backgroundColor: "#AED2F0",
    ease: "power2.out",
  });
  tline.to(".shape5", {
    scaleX: 1,
    scaleY: 1,
    height: "289px",
    borderRadius: 4,
    backgroundColor: "#D9D9D9",
    ease: "power2.out",
  });
  tline.to(".shape6", {
    scaleX: 1,
    height: "9px",
    borderRadius: 4,
    backgroundColor: "#fff",
    ease: "power2.out",
  });
  tline.to(".shape7", {
    scaleX: 0.75,
    height: "6px",
    borderRadius: 4,
    backgroundColor: "#fff",
    ease: "power2.out",
  });
  tline.to(".shape8", {
    scaleX: 0.5,
    height: "4px",
    borderRadius: 4,
    backgroundColor: "#fff",
    ease: "power2.out",
  });
  tline.to(".shape9", {
    scaleX: 1,
    width: "46px",
    height: "46px",
    borderRadius: "50%",
    backgroundColor: "#fff",
    ease: "power2.out",
  });

  // Collapse shapes 6,7,8
  tline.to(".shape6, .shape7, .shape8", {
    scaleX: 0,
    height: 0,
    borderRadius: 0,
    ease: "power2.out",
  });

  // Remove shape9
  tline.to(".shape9", {
    y: 130,
    borderRadius: 0,
    rotate: 180,
    opacity: 0,
    ease: "power2.out",
  });

  // Collapse shape5
  tline.to(".shape5", {
    y: 130,
    height: 0,
    borderRadius: 0,
    opacity: 0,
    ease: "power2.out",
  });

  // Adjust shape1 width
  tline.to(".shape1", { width: "50%", ease: "power2.out" });

  // Collapse shape2,3,4 using only scale
  tline.to(".shape2, .shape3 , .shape4", { width: "200%", ease: "power2.out" });

  // // Fade in shape101
  // tline.to(".shape101", { opacity: 1, width: "100%", ease: "power2.out" });

  // // Animate shapes 10–13
  // tline.to(".shape10", {
  //   scaleX: 1,
  //   height: "60px",
  //   width: "93%",
  //   opacity: 1,
  //   backgroundColor: "#D9D9D9",
  //   ease: "power2.out",
  // });
  // tline.to(".shape11", {
  //   scaleX: 1,
  //   height: "60px",
  //   width: "93%",
  //   opacity: 1,
  //   backgroundColor: "#EFEFEF",
  //   ease: "power2.out",
  // });
  // tline.to(".shape12", {
  //   scaleX: 1,
  //   height: "60px",
  //   width: "93%",
  //   opacity: 1,
  //   backgroundColor: "#AED2F0",
  //   ease: "power2.out",
  // });
  // tline.to(".shape13", {
  //   scaleX: 1,
  //   height: "60px",
  //   width: "93%",
  //   opacity: 1,
  //   backgroundColor: "#D9D9D9",
  //   ease: "power2.out",
  // });

  tline.to(".shape1", { opacity: 1 });

  // // Fade out the last group
  // tline.to(".shape101, .shape10, .shape11, .shape12, .shape13", { opacity: 0 });

  // FINAL RESET inside timeline for clean loop
  tline.set(".shape2, .shape3, .shape4", {
    scaleX: 0,
    width: "100%",
    transformOrigin: "left center",
  });
  tline.set(".shape1", { scaleX: 0, height: 0 });
  tline.set(".shape5", {
    scaleX: 0,
    scaleY: 0,
    y: 0,
    height: "369px",
    opacity: 1,
  });
  tline.set(".shape6, .shape7, .shape8", { scaleX: 0, height: 0, y: 0 });
  tline.set(".shape9", {
    scaleX: 0,
    width: 0,
    height: 0,
    borderRadius: 0,
    y: 0,
    rotate: 0,
    opacity: 1,
  });
}
