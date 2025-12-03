"use client";
import React, { useRef } from "react";
import useSliderAnimation from "../../animation/SliderScript";

const SliderCard = () => {
  const sectionRef = useRef(null);

  // Hook handles all animation logic
  useSliderAnimation(sectionRef);

  return (
    <>
      <section ref={sectionRef} className="section w-full">
        <div className="cards">
          <div className="card">
            <div className="cardInner cardNumber1">1.</div>
            <div className="w-full h-full text-center flex justify-center items-center">
              <div className="text-3xl tracking-[1]">
                Crafting Seamless
                <span className="text-[#06829d]"> Experiences</span>
                <br />
                <span className="text-sm font-light m-10">
                  Yes, a product where everything flows smoothly!
                </span>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="cardInner cardNumber2">2.</div>
            <div className="h-full flex flex-col justify-center items-center">
              <div className="text-3xl tracking-[1]">
                User <span className="text-[#00a6a8]">Empathy</span>
              </div>
              <div className="p-6 text-center">
                I care about what users feel, want, or struggle with.
              </div>
            </div>
          </div>
          <div className="card">
            <div className="cardInner cardNumber3">3.</div>
            <div className="h-full flex flex-col justify-center items-center">
              <div className="text-3xl tracking-[1]">
                Visual <span className="text-[#40c89d]">Storytelling</span>
              </div>
              <div className="p-6 text-center">
                Shaping interfaces that communicate emotion and purpose.
              </div>
            </div>
          </div>
          <div className="card">
            <div className="cardInner cardNumber4">4.</div>
            <div className="h-full text-center flex flex-col justify-center items-center">
              <div className="text-3xl tracking-[1]">
                Accessibility <br />
                <span className="text-[#9ae484]"> & Equity</span>
              </div>
              <div className="p-6 text-center">
                Designing for everyone, including those with disabilities.
              </div>
            </div>
          </div>
          <div className="card">
            <div className="cardInner cardNumber5">5.</div>
            <div className="h-full text-center flex flex-col justify-center items-center">
              <div className="text-3xl tracking-[1]">
                Collaboration
                <span className="text-[#f9f871]"> & Teamwork</span>
              </div>
              <div className="p-6 text-center">
                Sharing ideas, feedback, and learning from teams.
              </div>
            </div>
          </div>
          <div className="card">
            <div className="cardInner cardNumber6">6.</div>
            <div className="h-full flex flex-col justify-center items-center">
              <div className="text-3xl tracking-[1]">
                Creative <br />
                <span className="text-[#ffeccc]"> Freedom</span>
              </div>
              <div className="p-6 text-center">
                Experimenting with layouts, colors, and typographic styles.
              </div>
            </div>
          </div>
          <div className="card">
            <div className="cardInner cardNumber7">7.</div>
            <div className="h-full text-center flex flex-col justify-center items-center">
              <div className="text-3xl tracking-[1]">
                Continuous <br />
                <span className="text-[#f15c69]">Learning</span>
              </div>
              <div className="p-6 text-center">
                Exploring new tools, patterns, and trends.
              </div>
            </div>
          </div>
          <div className="card">
            <div className="cardInner cardNumber1">8.</div>
            <div className="h-full text-center flex flex-col justify-center items-center">
              <div className="text-3xl tracking-[1]">
                Criticism
                <span className="text-[#06829d]"> & Iterative Design </span>
              </div>
              <div className="p-6 text-center">
                Open to constructive criticism and continuously strive to
                improve user experiences.
              </div>
            </div>
          </div>
          <div className="card empty"></div>
        </div>
        <div className="steps">
          <div className="step-Counter">
            <div className="p-12">
              <h1>
                <span className="text-4xl">Deeply </span>
                <br />
                <span className="text-2xl">interested in..</span>.
              </h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SliderCard;
