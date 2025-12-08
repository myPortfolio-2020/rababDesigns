import Image from "next/image";

const HomeContent = () => {
  return (
    <>
      <div className="container relative -z-10">
        <div className="pages">
          <div className="flex xl:flex-row justify-center flex-col xl:items-center">
            <div className="w-full w-1/2">
              <div className="bracketBox">
                <div className="text-4xl pb-12">Few Lines About Me</div>
                <div className="mt-2 text-xl  leading-[36px]">
                  Hi,
                  <span className="text-[var(--supportingColorGreen)] pl-1 pr-1">
                    I’m Rabab,
                  </span>
                  a senior web and mobile designer crafting seamless and
                  intuitive experiences with care and creativity.
                </div>
                <div className="w-[360px] mx-auto flex items-center gap-2 bg-[#111] py-12">
                  <div className="w-full flex items-center gap-1 py-4 bg-[#111]">
                    <div className="w-2 h-2 rounded-full bg-gray-500"></div>
                    <div className="flex-1 h-px bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-500"></div>
                  </div>
                </div>
                <div className="mt-2 text-xl  leading-[36px]">
                  My work brings me genuine satisfaction and a deeper sense of
                  purpose.
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
                      Emphasizing Problem-Solving & Impact
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeContent;
