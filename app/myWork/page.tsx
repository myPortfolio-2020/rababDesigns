import Image from "next/image";
import Link from "next/link";
import React from "react";
import projects from "../lib/data/project.json";
import { Metadata } from "next";

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
          <div className="mt-10">
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
          const { id, title, titleImages, tagLine } = project;
          return (
            <div key={project.id}>
              <div className="flex xl:flex-row flex-col items-center">
                <div className="w-full xl:w-3/4">
                  <div className="bracketBox1">
                    <Image
                      src={titleImages}
                      alt="Responsive image"
                      width={1440}
                      height={1024}
                      className="rounded-lg"
                      layout="responsive"
                    />
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
    </>
  );
};

export default myWork;
