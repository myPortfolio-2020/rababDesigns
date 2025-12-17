import React from "react";
import Image from "next/image";

const AxIntro = () => {
  return (
    <>
      <div className="w-full flex xl:flex-row gap-6 justify-center flex-col items-center">
        <div className="xl:max-w-[160px] max-w-[96%]">
          <div className="w-7 h-7 mb-3 bg-[var(--foreground)] rounded-full flex items-center justify-center animate-pulse animate-spin">
            <div className="rotate-45">
              <Image src="/assets/spin.png" alt="" width="12" height="11" />
            </div>
          </div>
          <div className="text-[13px] leading-[24px] pb-6">
            AI Agent interface called &quot;AX Agent.&quot; It is designed to
            manage and monitor autonomous or semi-autonomous AI tasks,
            specifically focused on a Research Agent in this instance. The
            interface allows a user to provide a prompt, watch the AI
            &quot;reason&quot; through the problem, and then execute a plan
            using various digital tools.
          </div>
        </div>
        <div>
          <Image
            src="/assets/caseAX_testScreen.png"
            alt=""
            width={1486}
            height={1172}
            className="w-full h-auto transition-transform duration-300 hover:scale-110"
          />
        </div>
        <div className="max-w-[160px]">
          <Image
            src="/assets/arrowPointer1.png"
            alt=""
            width={117}
            height={82}
          />
          <div className="bg-[var(--terminalBlue)] p-2 rounded-md -rotate-4 text-black text-center tracking-wide text-xl z-20 ">
            My perspective was that:
          </div>
          <div className="pt-4">
            For non‑technical users, the left sidebar can be confusing because
            they may not understand whether it’s meant for them or for the
            agent.
          </div>
          <div className="animate-bounce mt-8 mb-4 mx-auto flex justify-center">
            <Image src="/assets/downArrow.png" alt="" width={28} height={70} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AxIntro;
