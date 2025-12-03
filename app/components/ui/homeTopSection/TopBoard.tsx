import Image from "next/image";
import React from "react";

const TopBoard = () => {
  return (
    <>
      <div className="infoBoard">
        <div className="infoBoardHookLeft"></div>
        <div className="infoBoardHookRight"></div>
        <div className="flex xl:flex-row flex-col xl:justify-between justify-center">
          <div className="flex justify-center items-center">
            <Image
              src={"/assets/arrow-right-thin.png"}
              width={25}
              height={25}
              alt=""
            />
            <div className="text-[14px] text-[var(--sharpRed)] pl-2">
              New Terminal
            </div>
            <Image
              src={"/assets/pinOrange.png"}
              width={25}
              height={23}
              alt=""
            />
          </div>
          <div>
            <div className="flex justify-center items-end transition-transform duration-300 hover:scale-103">
              <Image src={"/assets/coffee.png"} width={92} height={82} alt="" />
              <div className="ml-2 pb-2">
                <div className="text-sm tracking-[2]  pb-1">
                  Let’s Work Together...
                </div>
                <div className="text-sm bg-[var(--sharpRed)] pl-2 pr-2 rounded-2xl">
                  rabab_imman@hotmail.com
                </div>
              </div>
            </div>
            <div className="text-sm text-[var(--terminalBlue)]">
              I&apos;d love to
              <span className="text-[var(--sharpRed)]"> connect</span> if my
              work speaks to you.
            </div>
          </div>
        </div>
        <div className=" text-[var(--terminalBlue)] mt-6">
          A seasoned designer on
        </div>
        <div className=" text-[var(--terminalBlue)] text-4xl">new ground.</div>
      </div>
    </>
  );
};

export default TopBoard;
