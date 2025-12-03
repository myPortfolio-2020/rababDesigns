import React, { useEffect, useRef } from "react";
import { poleAnimation } from "../../animation/poleAnimation";

const Pole = () => {
  const poleRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    poleAnimation(poleRef.current);
  }, []);
  return (
    <>
      <div
        ref={poleRef}
        className="xl:w-[400px] xl:h-[490px] h-[490px] w-full -z-10"
      >
        <div
          className="
    relative w-72  h-[490px]
    before:content-[''] before:absolute before:left-1/2 before:-translate-x-1/2
    before:top-0 before:w-[6px] before:h-[6px] before:bg-[#59575B] before:rounded-full

    after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2
    after:top-0 after:bottom-0 after:w-px after:bg-[#59575B]
  "
        >
          <div
            className="
      after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2
      after:bottom-0 after:w-[6px] after:h-[6px] after:bg-[#59575B] after:rounded-full
    "
          >
            <div className="xl:w-[400px] h-[669px]  w-full xl:pt-20 pt-10 pl-6 z-20">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 mt-5 bg-[var(--supportingColorGreen)] rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 border-t-2 border-l-2 border-black rotate-45"></div>
                </div>

                <div className="bg-[var(--supportingColorGreen)] p-4 rounded-md -rotate-6 text-black font-semibold tracking-wide text-sm z-20">
                  NEW IN A TOWN
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pole;
