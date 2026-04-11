import React from "react";
import Image from "next/image";
const FewLines = () => {
  return (
    <>
      <div className="pages">
        <div className="flex xl:flex-row justify-center flex-col xl:items-center">
          <div className="w-full w-1/2">
            <div className="bracketBox">
              <div className="text-4xl pb-10">Few Lines About Me</div>
              <div className="mt-2 text-xl  leading-[36px]">
                Hi,
                <span className="text-[var(--supportingColorGreen)] xl:pl-1 xl:pr-1">
                  I’m Rabab,
                </span>
                a senior web and mobile designer crafting seamless and intuitive
                experiences with care and creativity.
              </div>

              <div className="text-sm text-[var(--terminalBlue)] tracking-[6px] mt-12 pb-4">
                Focusing on the world after AI
              </div>
              <div className="flex items-center text-2xl mb-8">
                <div className="p-1">UI</div>
                <div className="p-1">
                  <Image
                    src="/assets/downArrow2.png"
                    alt=""
                    width="47"
                    height="19"
                  />
                </div>
                <div className="p-1">UX</div>
                <div className="p-1">
                  <Image
                    src="/assets/downArrow2.png"
                    alt=""
                    width="47"
                    height="19"
                  />
                </div>
                <div className="p-1 animate-bounce animation-duration-200ms [animation-delay:1s]">
                  AX
                </div>
              </div>
            </div>
          </div>
          <div className="w-full w-1/2">
            <div className="flex justify-center relative">
              <div className="bracketBox">
                <Image
                  src="/assets/Rabab.png"
                  alt=""
                  width={243}
                  height={242}
                  className="shadow-xl/30"
                />
                <div className="absolute bottom-[20px] right-[-34px]  bg-[var(--supportingColorGreen)] p-1 rounded text-[var(--background)] max-w-[190px]">
                  <div className="text-center">
                    Emphasizing Impact & Problem-Solving
                  </div>
                </div>
              </div>
            </div>
            <div className="text-[15px] w-[60%] mx-auto  leading-[24px]">
              <div>
                <span className="text-[var(--terminalBlue)] mr-2">
                  Design Philosophy:
                </span>
                The train symbolizes my move to the U.S. and my career journey —
                new ground, familiar craft, guided by empathy and inclusive
                design.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FewLines;
