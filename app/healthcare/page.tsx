import React from "react";
import Image from "next/image";

import HealthcareApproach from "../components/ui/healthcare/approach/HealthcareApproach";
import HealthCareProjects from "../components/ui/healthcare/HealthCareProjects";

const page = () => {
  return (
    <>
      <div className="pages">
        <div className="flex">
          <div className="bracketBox1 text-center mx-auto mb-8">
            <h1 className="text-4xl font-bold">
              Designing Interfaces That
              <br />
              Improve Patient Care
            </h1>
            <div className="text-sm mt-2 tracking-[6px]">Thoughtful Design</div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="min-w-[45px] h-[45px]  max-h-[45px] rounded-full bg-[var(--supportingColorGreen)] flex items-center justify-center mb-10">
            <Image
              src="/assets/goArrow.png"
              alt="description"
              width={43}
              height={43}
            />
          </div>
          <div className="ml-10 w-[70%] text-center">
            I design intuitive, reliable, workflow-driven interfaces for
            healthcare teams—spanning EHR, EMR, PMS, RCM, scheduling, and
            clinical dashboards. My focus is reducing cognitive load, improving
            accuracy, and supporting real-world clinical decisions across
            multi-role environments.
          </div>
        </div>
        <div className="mt-20">
          {/* work I have alredy done RCM, OQMS */}
          <HealthCareProjects />
        </div>
        <div className="mt-20 flex-col">
          <div className="text-3xl text-center pt-6 pb-12">
            My Design Approach
          </div>
          <HealthcareApproach />
        </div>
      </div>
    </>
  );
};

export default page;
