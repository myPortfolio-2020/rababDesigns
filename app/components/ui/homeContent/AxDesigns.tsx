import React from "react";
import Image from "next/image";

const AxDesigns = () => {
  return (
    <>
      <div className="bracketBox1">
        <div className="text-sm text-[var(--terminalBlue)] tracking-[6px] mt-12 pb-1">
          My Solution
        </div>
        <div className="text-xl leading-[36px]">
          To reduce cognitive load for non-technical users, I applied a
          progressive disclosure pattern. The Agent Tools panel is hidden by
          default and revealed only when the user chooses to explore the agent’s
          capabilities. This keeps the interface simple and approachable while
          still supporting AX transparency principles.
        </div>
        <div className="max-w-[796px] bg-[var(--foreground)] p-9 mt-12 mb-24 mx-auto rounded">
          <Image
            src="/assets/solution1.png"
            alt=""
            width={1587}
            height={884}
            className="w-full h-auto transition-transform duration-300 hover:scale-110"
          />
        </div>
      </div>
    </>
  );
};

export default AxDesigns;
