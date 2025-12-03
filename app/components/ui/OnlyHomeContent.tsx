"use client";
import React from "react";
import { usePathname } from "next/navigation";
import TopLogo from "./homeTopSection/TopLogo";
import TopBoard from "./homeTopSection/TopBoard";

import DottedLine from "./homeTopSection/DottedLine";
import JourneyFrame from "./journeyPart/JourneyFrame";

const OnlyHomeContent = () => {
  const pathName = usePathname();

  if (pathName !== "/") return null;
  return (
    <>
      <section id="top">
        <div className="trapezoid"></div>
        <DottedLine />

        <div className="w-full">
          <div className="flex lg:flex-row flex-col">
            <div className=" flex justify-center lg:h-[400px] lg:justify-start items-center pl-20 w-full xl:w-1/2 order-2 lg:order-1">
              <TopLogo />
            </div>
            <div className="w-full xl:w-1/2 order-1 lg:order-2 xl:pr-0 xl:pl-0 pr-5 pl-5">
              <TopBoard />
            </div>
          </div>
          <JourneyFrame />
        </div>
      </section>
    </>
  );
};

export default OnlyHomeContent;
