import React from "react";
import Image from "next/image";
import Link from "next/link";
import healthcare from "../../../lib/data/healthcare.json";

const excludedTitles = [
  "PMS Scheduling Screen",
  "MentalHealth",
  "Clinical documentation system",
];

const HealthCareProjects = () => {
  return (
    <>
      <div className="pages">
        {healthcare.healthcare
          .filter((project) => !excludedTitles.includes(project.title))
          .map((project) => {
            const { id, title, titleImages, tagLine, tags } = project;

            return (
              <div key={project.id}>
                <div className="flex xl:flex-row flex-col items-center">
                  <div className="w-full xl:w-3/4">
                    <div className="bracketBox1">
                      <Link href={`/healthcare/${id}`}>
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
                        <Link href={`/healthcare/${id}`}>Case study</Link>
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
                                ? "bg-green-500"
                                : "bg-[var(--terminalBlue)]"
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
    </>
  );
};

export default HealthCareProjects;
