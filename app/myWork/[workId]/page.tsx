import Image from "next/image";
import React from "react";
import projects from "../../lib/data/project.json";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ workId?: string }>;
}) {
  const { workId } = await params;
  return {
    title: `My work - ${workId}`,
  };
}

const page = async ({ params }: { params: Promise<{ workId?: string }> }) => {
  const { workId } = await params;

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
            <div className="text-3xl pb-3">{title}</div>
            <div>{description}</div>
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
          <div className="w-max mx-auto mt-4 pt-2 pb-2 pl-4 pr-4 rounded bg-[var(--topTerminal)]">
            View all
          </div>
        </div>
        <div className="mt-10 mb-10 flex xl:flex-row flex-col justify-between  gap-40">
          <div className="flex-1">
            <div className="mb-10  bg-[var(--supportingColorBlue)] rounded w-max p-2">
              My Role
            </div>
            <div className=" leading-[27px]">
              {myRole?.map((role, index) => {
                return (
                  <div key={index} className="pb-2">
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
          <div className="flex-1">
            <div className="flex justify-between mb-10 ">
              <div className=" bg-[var(--supportingColorBlue)] rounded w-max p-2">
                Timeline
              </div>
              <div className="text-sm text-[var(--terminalBlue)] pr-4">
                {timeline?.completionTime}
              </div>
            </div>
            <div className="  leading-[27px]">
              {timelineNotes?.map((timeline, index) => {
                return (
                  <div key={index}>
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
          <div className="flex-1 ">
            <div className="mb-10  bg-[var(--supportingColorBlue)] rounded w-max p-2 ">
              Challenges
            </div>
            <div className=" leading-[27px]">
              {challenges?.map((challenge, index) => {
                return (
                  <div key={index}>
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
        <div className="mt-10 mb-10 flex items-center gap-12">
          <div className="w-1/3  bg-[var(--supportingColorBlue)] rounded w-max p-2">
            Tools
          </div>
          <div className="w-2/3  flex gap-12">
            {tools?.map((tool, index) => {
              return (
                <div key={index}>
                  <Image
                    src="/assets/indentArrowBlue.png"
                    alt="dot"
                    width={7}
                    height={9}
                    className="inline-block mr-2 mb-1"
                  />
                  {tool}
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-10 mb-10">
          <div className="mb-4  bg-[var(--supportingColorBlue)] rounded w-max p-2">
            Goals
          </div>

          {goal?.map((goal, index) => {
            return (
              <div key={index}>
                <div>{goal}</div>
              </div>
            );
          })}
        </div>
        <div className="mt-10 mb-10   bg-[var(--supportingColorBlue)] rounded w-max p-2">
          Persona
        </div>
        <div className="flex xl:flex-row flex-col justify-between gap-20">
          <div className="flex-1">
            <div className="flex justify-between mb-4 ">
              <div>
                <div>
                  {persona?.name}
                  <span className="text-sm text-[var(--terminalBlue)] pl-3">
                    {persona?.age}
                  </span>
                </div>

                <div className="text-sm">
                  <div>{persona?.occupation}</div>
                </div>
              </div>
            </div>
            <div className=" leading-[27px]">
              <div>Focus: {persona?.focus}</div>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex justify-between mb-4  text-[var(--terminalBlue)]">
              Problem
            </div>

            <div className="  leading-[27px]">
              {persona?.Problem.map((problem, index) => {
                return (
                  <div key={index}>
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
          <div className="flex-1 ">
            <div className="mb-4  text-[var(--terminalBlue)]">Solution</div>
            <div className=" leading-[27px]">
              {persona?.Solution.map((solution, index) => {
                return (
                  <div key={index}>
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
          <div className="flex-1">
            <div className="mb-4   text-[var(--terminalBlue)]">Result</div>
            <div>
              {persona?.Result.map((Result, index) => {
                return (
                  <div key={index}>
                    <Image
                      src="/assets/indentArrowBlue.png"
                      alt="dot"
                      width={7}
                      height={9}
                      className="inline-block mr-2 mb-1"
                    />
                    {Result}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="mt-10 mb-10">
          <div className="mb-10  bg-[var(--supportingColorBlue)] rounded w-max p-2">
            wireframes and flow
          </div>
          <div className="flex flex-col xl:flex-row xl:flex-wrap gap-8">
            {wireframes?.map((wireframe, index) => {
              return (
                <div
                  key={index}
                  className="w-full relative h-[auto] xl:w-[20%] border border-[var(--supportingColorBlue)] p-3  transition-transform duration-300 hover:scale-106 hover:z-20"
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

        <div className="mt-10 mb-10">
          <div className="mb-10  bg-[var(--supportingColorBlue)] rounded w-max p-2">
            Style Guides
          </div>
          <div className="flex xl:flex-row flex-col flex-wrap gap-20 mt-6">
            <div className="w-[200px] text-[var(--terminalBlue)]">
              Primary Colors
            </div>

            <div className="w-[130px]">
              <div className="flex justify-between items-center gap-12">
                {styleGuide?.colors.primary.map((color, index) => {
                  return (
                    <div
                      key={index}
                      style={{ color: color }}
                      className="flex items-center gap-6"
                    >
                      <div> {color}</div>
                      <div
                        className="w-[16px] h-[16px] rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[2px] rounded-br-[20px]"
                        style={{ backgroundColor: color }}
                      ></div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="flex  xl:flex-row flex-col flex-wrap gap-20 mt-6">
            <div className="w-[200px] text-[var(--terminalBlue)]">
              Supporting Colors
            </div>

            <div className="w-[130px]">
              <div className="flex xl:flex-row flex-col justify-between items-center gap-12">
                {styleGuide?.colors.secondary.map((color, index) => {
                  return (
                    <div
                      key={index}
                      style={{ color: color }}
                      className="flex items-center gap-6"
                    >
                      <div> {color}</div>
                      <div
                        className="w-[16px] h-[16px] rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[2px] rounded-br-[20px]"
                        style={{ backgroundColor: color }}
                      ></div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 mb-10">
          <div className="mb-10  bg-[var(--supportingColorBlue)] rounded w-max p-2">
            Final Screens
          </div>
          <div className="flex flex-col xl:flex-row xl:flex-wrap gap-8">
            {finalDesign?.map((design, index) => {
              const { image, caption } = design;
              return (
                <div
                  key={index}
                  className="w-full relative h-[auto] xl:w-[20%] border border-[var(--supportingColorBlue)] p-3  transition-transform duration-300 hover:scale-110"
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
        </div>
        <div className="mt-10 mb-10">
          <div className="mb-10  bg-[var(--supportingColorBlue)] rounded w-max p-2">
            Logos
          </div>
          <div>logos</div>
        </div>
      </div>
    </>
  );
};

export default page;
