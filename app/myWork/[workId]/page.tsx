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

        <div className="xl:h-screen xl:w-[80%] h-auto w-full xl:mx-auto flex xl:flex-row flex-col items-center gap-30">
          <div className="w-full xl:w-1/3">
            <div className="w-[52px] h-[52px] rounded-full bg-[var(--terminalBlue)] mb-10 flex justify-center items-center">
              1
            </div>
            <div className="flex items-center">
              <div className="text-sm uppercase tracking-[12px] text-[var(--terminalBlue)]">
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

        <div className="xl:h-screen xl:w-[80%] h-auto w-full xl:mx-auto flex xl:flex-row flex-col items-center gap-30">
          <div className="w-full xl:w-1/3">
            <div className="w-[52px] h-[52px] rounded-full bg-[var(--terminalBlue)] mb-10 flex justify-center items-center">
              2
            </div>
            <div className="flex items-center">
              <div className="text-sm uppercase tracking-[12px] text-[var(--terminalBlue)]">
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

        <div className="xl:h-screen xl:w-[80%] h-auto w-full xl:mx-auto flex xl:flex-row flex-col items-center gap-30">
          <div className="w-full xl:w-1/3">
            <div className="w-[52px] h-[52px] rounded-full bg-[var(--terminalBlue)] mb-10 flex justify-center items-center">
              3
            </div>
            <div className="flex items-center">
              <div className="text-sm uppercase tracking-[12px] text-[var(--terminalBlue)]">
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

        <div className="xl:h-screen xl:w-[80%] h-auto w-full xl:mx-auto flex xl:flex-row flex-col items-center gap-30">
          <div className="w-full xl:w-1/3">
            <div className="w-[52px] h-[52px] rounded-full bg-[var(--terminalBlue)] mb-10 flex justify-center items-center">
              4
            </div>
            <div className="flex items-center">
              <div className="text-sm uppercase tracking-[12px] text-[var(--terminalBlue)]">
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

        <div className="xl:h-screen xl:w-[80%] h-auto w-full xl:mx-auto flex xl:flex-row flex-col items-center gap-30">
          <div className="w-full xl:w-1/3">
            <div className="w-[52px] h-[52px] rounded-full bg-[var(--terminalBlue)] mb-10 flex justify-center items-center">
              5
            </div>
            <div className="flex items-center">
              <div className="text-sm uppercase tracking-[12px] text-[var(--terminalBlue)]">
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

        <div className="xl:h-screen xl:w-[80%] h-auto w-full xl:mx-auto flex xl:flex-row flex-col items-center gap-30">
          <div className="w-full xl:w-1/3">
            <div className="w-[52px] h-[52px] rounded-full bg-[var(--terminalBlue)] mb-10 flex justify-center items-center">
              6
            </div>
            <div className="flex items-center">
              <div className="text-sm uppercase tracking-[12px] text-[var(--terminalBlue)]">
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
              <div className="flex gap-14">
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
          </div>
        </div>

        <div className="xl:h-screen xl:w-[80%] h-auto w-full xl:mx-auto flex xl:flex-row flex-col items-center gap-30">
          <div className="w-full xl:w-1/3">
            <div className="w-[52px] h-[52px] rounded-full bg-[var(--terminalBlue)] mb-10 flex justify-center items-center">
              7
            </div>
            <div className="flex items-center">
              <div className="text-sm uppercase tracking-[12px] text-[var(--terminalBlue)]">
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
                    className="w-full relative h-[auto] xl:w-[46%] border border-[var(--supportingColorBlue)] p-3  transition-transform duration-300 hover:scale-106 hover:z-20"
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

        <div className="xl:h-screen xl:w-[80%] h-auto w-full xl:mx-auto flex xl:flex-row flex-col items-center gap-30">
          <div className="w-full xl:w-1/3">
            <div className="w-[52px] h-[52px] rounded-full bg-[var(--terminalBlue)] mb-10 flex justify-center items-center">
              8
            </div>
            <div className="flex items-center">
              <div className="text-sm uppercase tracking-[12px] text-[var(--terminalBlue)]">
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
              <div className="pb-3 text-sm uppercase tracking-[12px] text-[var(--foreground)]">
                Primary Colors
              </div>
              <div className="flex  items-center gap-12">
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
              <div className="mt-24">
                <div className="pb-3 text-sm uppercase tracking-[12px] text-[var(--foreground)]">
                  Supporting Colors
                </div>
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
        </div>

        <div className="xl:h-screen xl:w-[80%] h-auto w-full xl:mx-auto">
          <div className="text-4xl pb-12 text-center">Final Screens</div>
          <div className="flex flex-col xl:flex-row xl:flex-wrap gap-8">
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
