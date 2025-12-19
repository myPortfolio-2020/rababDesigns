import Image from "next/image";
import React from "react";
import projects from "../../lib/data/project.json";
import CaseStudySec from "@/app/components/ui/myWorkCom/CaseStudySec";
import FinalDesignImages from "@/app/components/ui/myWorkCom/FinalDesignImages";

export async function generateStaticParams() {
  return projects.projects.map((project) => ({
    workId: project.id,
  }));
}

export function generateMetadata({ params }: { params: { workId?: string } }) {
  const { workId } = params;
  return {
    title: `My work - ${workId}`,
  };
}

const page = ({ params }: { params: { workId?: string } }) => {
  const { workId } = params;

  const project = projects.projects.find((p) => p.id === workId);

  const {
    title,
    description,
    titleImages,
    mobileView,
    myRole,
    timelineNotes,
    challenges,
    timeline,
    tools,
    goal,
    persona,
    styleGuide,
    finalDesign,
    wireframes,
  } = project || {};

  return (
    <>
      <div className="pages text-xl leading-[32px]">
        <div className="xl:h-[calc(100vh-420px)] xl:w-[80%] h-auto w-full xl:mx-auto flex xl:flex-row flex-col  gap-30">
          <div className="flex">
            <div className="min-w-[45px] h-[45px]  max-h-[45px] rounded-full bg-[var(--supportingColorGreen)] flex items-center justify-center mb-10">
              <Image
                src="/assets/goArrow.png"
                alt="description"
                width={43}
                height={43}
              />
            </div>
            <div className="ml-10">
              <div className="text-4xl pb-6">{title}</div>
              <div>{description}</div>
            </div>
          </div>
        </div>
        <div className="mt-10 mb-10">
          {titleImages ? (
            <Image
              src={titleImages}
              alt="description"
              width={1200}
              height={600}
              className="transition-transform duration-300 hover:scale-110"
            />
          ) : null}
        </div>
        <div className="mt-10 mb-10">
          {mobileView && (
            <Image
              src={mobileView}
              alt="mobile view"
              width={1200}
              height={600}
              className="transition-transform duration-300 hover:scale-110"
            />
          )}
        </div>
        <CaseStudySec>
          <div className="comeIn xl:h-dvh xl:w-[100%] h-auto w-[96%] mx-auto flex xl:flex-row flex-col items-center gap-30 bg-[var(--lightBg)] text-[var(--background)] p-10 rounded-2xl mb-8">
            <div className="w-full xl:w-1/3">
              <div className="w-[52px] h-[52px] rounded-full bg-[var(--terminalBlue)] mb-10 flex justify-center items-center text-[var(--foreground)]">
                1
              </div>
              <div className="flex items-center">
                <div className="text-3xl uppercase tracking-[12px] text-[var(--terminalBlue)]">
                  My Role
                </div>
                <Image
                  src="/assets/downArrow2.png"
                  alt=""
                  width={70}
                  height={28}
                />
              </div>
            </div>
            <div className="w-full xl:w-2/3">
              <div className=" leading-[27px] bracketBox">
                {myRole?.map((role, index) => {
                  return (
                    <div key={index} className="pb-9">
                      <Image
                        src="/assets/indentArrowBlue.png"
                        alt="dot"
                        width={7}
                        height={9}
                        className="inline-block mr-2 mb-1"
                      />
                      {role}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </CaseStudySec>
        <CaseStudySec>
          <div className="comeIn xl:h-dvh xl:w-[100%] h-auto w-full xl:mx-auto flex xl:flex-row flex-col items-center gap-30 bg-[var(--lightBg)] text-[var(--background)] p-10 rounded-2xl  mb-8">
            <div className="w-full xl:w-1/3">
              <div className="w-[52px] h-[52px] rounded-full bg-[var(--terminalBlue)] mb-10 flex justify-center items-center  text-[var(--foreground)]">
                2
              </div>
              <div className="flex items-center">
                <div className="text-3xl uppercase tracking-[12px] text-[var(--terminalBlue)]">
                  Timeline
                </div>

                <Image
                  src="/assets/downArrow2.png"
                  alt=""
                  width={70}
                  height={28}
                />
              </div>
              <div className="text-sm text-[var(--terminalBlue)] pr-4">
                {timeline?.completionTime}
              </div>
            </div>
            <div className="w-full xl:w-2/3">
              <div className=" leading-[27px] bracketBox">
                {timelineNotes?.map((timeline, index) => {
                  return (
                    <div key={index} className="pb-9">
                      <Image
                        src="/assets/indentArrowBlue.png"
                        alt="dot"
                        width={7}
                        height={9}
                        className="inline-block mr-2 mb-1"
                      />
                      {timeline}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </CaseStudySec>
        <CaseStudySec>
          <div className="comeIn xl:h-dvh xl:w-[100%] h-auto w-full xl:mx-auto flex xl:flex-row flex-col items-center gap-30 bg-[var(--lightBg)] text-[var(--background)] p-10 rounded-2xl  mb-8">
            <div className="w-full xl:w-1/3">
              <div className="w-[52px] h-[52px] rounded-full bg-[var(--terminalBlue)] mb-10 flex justify-center items-center  text-[var(--foreground)]">
                3
              </div>
              <div className="flex items-center">
                <div className="text-3xl uppercase tracking-[12px] text-[var(--terminalBlue)]">
                  Challenges
                </div>
                <Image
                  src="/assets/downArrow2.png"
                  alt=""
                  width={70}
                  height={28}
                />
              </div>
            </div>
            <div className="w-full xl:w-2/3">
              <div className=" leading-[27px] bracketBox">
                {challenges?.map((challenge, index) => {
                  return (
                    <div key={index} className="pb-9">
                      <Image
                        src="/assets/indentArrowBlue.png"
                        alt="dot"
                        width={7}
                        height={9}
                        className="inline-block mr-2 mb-1"
                      />

                      {challenge}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </CaseStudySec>
        <CaseStudySec>
          <div className="comeIn xl:h-dvh xl:w-[100%] h-auto w-full xl:mx-auto flex xl:flex-row flex-col items-center gap-30 bg-[var(--lightBg)] text-[var(--background)] p-10 rounded-2xl  mb-8">
            <div className="w-full xl:w-1/3">
              <div className="w-[52px] h-[52px] rounded-full bg-[var(--terminalBlue)] mb-10 flex justify-center items-center  text-[var(--foreground)]">
                4
              </div>
              <div className="flex items-center">
                <div className="text-3xl uppercase tracking-[12px] text-[var(--terminalBlue)]">
                  Goals
                </div>
                <Image
                  src="/assets/downArrow2.png"
                  alt=""
                  width={70}
                  height={28}
                />
              </div>
            </div>
            <div className="w-full xl:w-2/3">
              <div className=" leading-[27px] bracketBox">{goal}</div>
            </div>
          </div>
        </CaseStudySec>
        <CaseStudySec>
          <div className="comeIn xl:h-dvh xl:w-[100%] h-auto w-full xl:mx-auto flex xl:flex-row flex-col items-center gap-30 bg-[var(--lightBg)] text-[var(--background)] p-10 rounded-2xl  mb-8">
            <div className="w-full xl:w-1/3">
              <div className="w-[52px] h-[52px] rounded-full bg-[var(--terminalBlue)] mb-10 flex justify-center items-center  text-[var(--foreground)]">
                5
              </div>
              <div className="flex items-center">
                <div className="text-3xl uppercase tracking-[12px] text-[var(--terminalBlue)]">
                  Persona
                </div>
                <Image
                  src="/assets/downArrow2.png"
                  alt=""
                  width={70}
                  height={28}
                />
              </div>
            </div>
            <div className="w-full xl:w-2/3">
              <div>
                <span className="text-[var(--supportingColorGreen)]">
                  {" "}
                  {persona?.name}
                </span>
                <span className="text-sm text-[var(--terminalBlue)] pl-3">
                  {persona?.age}
                </span>
              </div>
              <div className="text-sm">
                <div>{persona?.occupation}</div>
              </div>
              <div className="flex xl:flex-row flex-col gap-10 mt-6">
                <div className="flex-1">
                  <div className="mb-3 text-sm uppercase tracking-[12px] text-[var(--terminalBlue)]">
                    Problems
                  </div>
                  <div className=" leading-[27px]">
                    {persona?.Problem.map((problem, index) => {
                      return (
                        <div key={index} className="pb-4">
                          <Image
                            src="/assets/indentArrowBlue.png"
                            alt="dot"
                            width={7}
                            height={9}
                            className="inline-block mr-2 mb-1"
                          />
                          {problem}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="mb-3 text-sm uppercase tracking-[12px] text-[var(--terminalBlue)]">
                    Soultion
                  </div>
                  <div className=" leading-[27px]">
                    {persona?.Solution.map((solution, index) => {
                      return (
                        <div key={index} className="pb-4">
                          <Image
                            src="/assets/indentArrowBlue.png"
                            alt="dot"
                            width={7}
                            height={9}
                            className="inline-block mr-2 mb-1"
                          />
                          {solution}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CaseStudySec>
        <CaseStudySec>
          <div className="comeIn xl:h-dvh xl:w-[100%] h-auto w-full xl:mx-auto flex xl:flex-row flex-col items-center gap-30 bg-[var(--lightBg)] text-[var(--background)] p-10 rounded-2xl  mb-8">
            <div className="w-full xl:w-1/3">
              <div className="w-[52px] h-[52px] rounded-full bg-[var(--terminalBlue)] mb-10 flex justify-center items-center  text-[var(--foreground)]">
                6
              </div>
              <div className="flex items-center">
                <div className="text-3xl uppercase tracking-[12px] text-[var(--terminalBlue)]">
                  Tools
                </div>
                <Image
                  src="/assets/downArrow2.png"
                  alt=""
                  width={70}
                  height={28}
                />
              </div>
            </div>
            <div className="w-full xl:w-2/3 flex justify-center">
              <div className="leading-[27px] bracketBox">
                <div className="">
                  {tools?.map((tool, index) => {
                    return (
                      <div
                        key={index}
                        className="flex justify-start items-center p-9 mt-2 rounded-2xl bg-[var(--terminalBlue)]"
                      >
                        <Image
                          src="/assets/indentArrowBlue.png"
                          alt="dot"
                          width={7}
                          height={9}
                          className="object-contain mr-2 mb-1"
                        />
                        <div className="pl-1  text-[var(--foreground)]">
                          {tool}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </CaseStudySec>
        <CaseStudySec>
          <div className="comeIn xl:h-dvh xl:w-[100%] h-auto w-[96%] mx-auto flex xl:flex-row flex-col items-center gap-30 bg-[var(--lightBg)] text-[var(--background)] p-10 rounded-2xl mb-8">
            <div className="w-full xl:w-1/3">
              <div className="w-[52px] h-[52px] rounded-full bg-[var(--terminalBlue)] mb-10 flex justify-center items-center  text-[var(--foreground)]">
                7
              </div>
              <div className="flex items-center">
                <div className="text-3xl uppercase tracking-[12px] text-[var(--terminalBlue)]">
                  WireFrames
                </div>
                <Image
                  src="/assets/downArrow2.png"
                  alt=""
                  width={70}
                  height={28}
                />
              </div>
            </div>
            <div className="w-full xl:w-2/3">
              <div className="flex flex-col xl:flex-row xl:flex-wrap gap-8">
                {wireframes?.map((wireframe, index) => {
                  return (
                    <div
                      key={index}
                      className="w-full relative h-[auto] xl:w-[46%] border border-[var(--foreground)] p-3  transition-transform duration-300 hover:scale-106 hover:z-20"
                    >
                      <Image
                        src={wireframe}
                        alt=""
                        width={1940}
                        height={1767}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </CaseStudySec>
        <CaseStudySec>
          <div className="comeIn xl:h-dvh xl:w-[100%] h-auto w-[96%] mx-auto flex xl:flex-row flex-col items-center gap-30 bg-[var(--lightBg)] text-[var(--background)] p-10 rounded-2xl mb-8">
            <div className="w-full xl:w-1/3">
              <div className="w-[52px] h-[52px] rounded-full bg-[var(--terminalBlue)] mb-10 flex justify-center items-center  text-[var(--foreground)]">
                8
              </div>
              <div className="flex items-center">
                <div className="text-3xl uppercase tracking-[12px] text-[var(--terminalBlue)]">
                  Style guide
                </div>
                <Image
                  src="/assets/downArrow2.png"
                  alt=""
                  width={70}
                  height={28}
                />
              </div>
            </div>
            <div className="w-full xl:w-2/3">
              <div>
                <div className="pb-3 text-sm uppercase tracking-[12px] text-[var(--background)]">
                  Primary Colors
                </div>
                <div className="flex items-center gap-12">
                  {styleGuide?.colors.primary.map((color, index) => {
                    return (
                      <div key={index} style={{ color: color }} className="">
                        <div
                          className="w-[96px] h-[86px] rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[2px] rounded-br-[20px]"
                          style={{ backgroundColor: color }}
                        ></div>
                        <div className="text-sm pt-4"> {color}</div>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-10">
                  <div className="pb-3 text-sm uppercase tracking-[12px] text-[var(--background)]">
                    Supporting Colors
                  </div>
                  <div className="flex xl:flex-row flex-wrap items-center xl:gap-12 gap-6">
                    {styleGuide?.colors.secondary.map((color, index) => {
                      return (
                        <div key={index} style={{ color: color }} className="">
                          <div
                            className="w-[96px] h-[86px] rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[2px] rounded-br-[20px]"
                            style={{ backgroundColor: color }}
                          ></div>
                          <div className="text-sm pt-4"> {color}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CaseStudySec>
        {/* <div className="xl:h-dvh xl:w-[80%] h-auto w-full xl:mx-auto">
          <div className="text-4xl pb-12 text-center">Final Screens</div>
          <div className="flex flex-col xl:flex-row xl:flex-wrap justify-center gap-8">
            {finalDesign?.map((design, index) => {
              const { image, caption } = design;
              return (
                <div
                  key={index}
                  className="w-full relative h-[auto] xl:w-[26%] border border-[var(--supportingColorBlue)] p-3  transition-transform duration-300 hover:scale-110"
                >
                  <Image
                    src={image}
                    alt=""
                    width={1940}
                    height={1767}
                    className="w-full h-auto object-cover"
                  />
                  <div className="text-sm pt-2">{caption}</div>
                </div>
              );
            })}
          </div>
        </div> */}

        {/* this is the work for thumbnail this is the work --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

        <div className="xl:h-dvh xl:w-[80%] h-auto w-full xl:mx-auto">
          <div className="text-4xl pb-12 text-center">Final Screens</div>
          <div className="flex flex-col xl:flex-row xl:flex-wrap justify-center gap-8">
            {finalDesign?.map((design, index) => {
              return (
                <div
                  key={index}
                  className="w-full relative h-[auto] xl:w-[26%] border border-[var(--supportingColorBlue)] p-3"
                >
                  <FinalDesignImages design={design} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
