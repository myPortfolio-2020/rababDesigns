import React from "react";

const Footer = () => {
  return (
    <>
      <div className="w-full h-dvh  bg-cover bg-bottom bg-[url('/assets/footerBg.svg')] flex flex-col justify-center">
        <div className="pages">
          <div className="flex xl:flex-row flex-col xl:justify-between">
            <div className="w-full xl:w-1/4 mb-3  pl-[68] leading-16">
              <div className=" text-2xl pt-4">
                Ready to create something great?
              </div>
              <div className=" text-3xl pt-6">Let’s connect.</div>
            </div>
            <div className="w-full xl:w-3/4 mb-3 ml-[6%]">
              <div className="flex items-center w-full xl:max-w-[658px] max-w-[360px]">
                <div className="mr-6">Linkedin</div>
                <div className="w-full flex items-center gap-1 py-4 bg-[#111]">
                  <div className="w-2 h-2 rounded-full bg-gray-500"></div>
                  <div className="flex-1 h-px bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-500"></div>
                </div>
                <div className="ml-6 rotate-45">↑</div>
              </div>
              <div className="flex just items-center w-full xl:max-w-[658px] max-w-[360px]">
                <div className="mr-6">Behance</div>
                <div className="w-full flex items-center gap-1 py-4 bg-[#111]">
                  <div className="w-2 h-2 rounded-full bg-gray-500"></div>
                  <div className="flex-1 h-px bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-500"></div>
                </div>
                <div className="ml-6 rotate-45">↑</div>
              </div>

              <div className="flex just items-center w-full xl:max-w-[658px] max-w-[360px]">
                <div className="mr-6">GitHub</div>
                <div className="w-full flex items-center gap-1 py-4 bg-[#111]">
                  <div className="w-2 h-2 rounded-full bg-gray-500"></div>
                  <div className="flex-1 h-px bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-500"></div>
                </div>
                <div className="ml-6 rotate-45">↑</div>
              </div>

              <div className="w-fit text-sm bg-[var(--sharpRed)] mt-4 mr-3 pl-2 pr-2 rounded-2xl">
                rabab_imman@hotmail.com
              </div>
              <div className="mt-6 text-sm tracking-[2px]">Design by Rabab</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
