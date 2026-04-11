import Image from "next/image";
import Link from "next/link";
import React from "react";
import projects from "../lib/data/project.json";
import { Metadata } from "next";
import AxIntro from "../components/ui/homeContent/AxIntro";
import AxDesigns from "../components/ui/homeContent/AxDesigns";

export const metadata: Metadata = {
  title: "My work - Prototype of Rabab",
  description: "A showcase of my projects and case studies.",
};

const myWork = () => {
  return (
    <>
      <div className="pages">
        <div className="w-full h-[calc(100vh-220px)] flex flex-col justify-center items-center">
          <div className="bracketBox1 text-center">
            <h1 className="text-4xl font-bold">
              Creating Solutions
              <br />
              That Matter
            </h1>
            <div className="text-sm mt-2 tracking-[6px]">
              Projects I’ve Completed
            </div>
          </div>
          <div className="mt-10 animate-bounce">
            <Image src="/assets/downArrow.png" alt="" width={28} height={70} />
          </div>
        </div>
        {/* <div className="flex items-center justify-center h-[319px] mb-30">
          <div className="bracketBox1 text-center">
            <h1 className="text-4xl font-bold">
              Creating Solutions
              <br />
              That Matter
            </h1>
            <div className="text-sm mt-2 tracking-[6px]">
              Projects I’ve Completed
            </div>
          </div>
        </div> */}

        {projects.projects.map((project) => {
          const { id, title, titleImages, tagLine, tags } = project;
          return (
            <div key={project.id}>
              <div className="flex xl:flex-row flex-col items-center">
                <div className="w-full xl:w-3/4">
                  <div className="bracketBox1">
                    <Link href={`/myWork/${id}`}>
                      <Image
                        src={titleImages}
                        alt="Responsive image"
                        width={1440}
                        height={1024}
                        className="rounded-lg"
                      />
                    </Link>
                  </div>
                </div>
                <div className="w-full xl:w-1/4">
                  <div className="text-center mt-10">
                    <div className="text-4xl mb-3">{title}</div>
                    <div className="text-sm tracking-[3px]">{tagLine}</div>
                  </div>
                  <div className="mt-10">
                    <div className="bg-[var(--supportingColorGreen)] w-max mx-auto px-4 py-2 rounded text-center text-[var(--background)] mt-6">
                      <Link href={`/myWork/${id}`}>Case study</Link>
                    </div>
                  </div>
                  <div className="mt-10 flex flex-wrap justify-center gap-3">
                    {tags?.map((tag, index) => {
                      const isPersonalProject = tag === "Personal Project";

                      return (
                        <div
                          key={index}
                          className={`text-[12px] rounded-2xl pr-2 pl-2 ${
                            isPersonalProject
                              ? "bg-green-500" // green for Industry Project
                              : "bg-[var(--terminalBlue)]" // blue for others
                          }`}
                        >
                          {tag}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="w-full flex items-center gap-1 py-4 bg-[#111] mt-20 mb-20">
                <div className="w-2 h-2 rounded-full bg-gray-500"></div>
                <div className="flex-1 h-px bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700"></div>
                <div className="w-2 h-2 rounded-full bg-gray-500"></div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="pages">
        <div className="flex items-center text-2xl mb-8  xl-[369px] m-auto">
          <div className="p-1">UI</div>
          <div className="p-1">
            <Image src="/assets/downArrow2.png" alt="" width="47" height="19" />
          </div>
          <div className="p-1">UX</div>
          <div className="p-1">
            <Image src="/assets/downArrow2.png" alt="" width="47" height="19" />
          </div>
          <div className="p-1 animate-bounce animation-duration-200ms [animation-delay:1s]">
            AX
          </div>
        </div>
        <div className="xl:w-[40%] xl-[76%] m-auto text-center text-xl leading-[36px]">
          I am currently expanding my skills in
          <span className="text-[var(--terminalBlue)] pl-2 pr-2">
            AX (Agent Experience),
          </span>
          designing systems that work seamlessly for both humans and intelligent
          agents.
        </div>
        <div className="mt-24 mb-4">
          <AxIntro />
        </div>
        <div className="flex justify-center mb-24">
          <AxDesigns />
        </div>
      </div>
    </>
  );
};

export default myWork;
