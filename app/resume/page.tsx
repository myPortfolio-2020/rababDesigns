import { Metadata } from "next";
import React from "react";
import Image from "next/image";
export const metadata: Metadata = {
  title: "Resume - Prototype of Rabab",
  description: "Rabab's professional resume showcasing skills and experience.",
};

const resume = () => {
  return (
    <>
      <div className="resume">
        <div className="flex justify-between items-start">
          <div className="w-full">
            <div className="myResumeContent">
              <div className="flex justify-between">
                <div>
                  <div className="text-3xl">Rabab Zehra</div>
                  <div> UI/UX Designer and Front-End Developer</div>
                  <div> Albuquerque, NM, USA</div>
                  <div> Website: rabab-designs.vercel.app</div>
                  <div> Email: rabab_imman@hotmail.com</div>
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <div className="text-sm">Resume</div>
                    <div>
                      <a href="/assets/resume.pdf" target="_blank">
                        <Image
                          src="/assets/pdfIcon.png" // or a preview image
                          alt="Open PDF"
                          width={36}
                          height={36}
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="myResumeContent">
              <div className="text-2xl pb-1 text-[var(--terminalBlue)]">
                Professional Skills
              </div>
            </div>
            <div className="myResumeContent">
              <div className="flex lg:flex-row flex-col">
                <div className="w-full w-1/2">
                  <div className="text-2xl pb-1">Design Skills</div>
                  <div className="pl-9">
                    <ul className="list-disc">
                      <li> UI Design</li>
                      <li>UX Design</li>
                      <li>Wireframing</li>
                      <li>Interaction Design</li>
                      <li>Design Systems</li>
                      <li>Prototyping</li>
                    </ul>
                  </div>
                </div>
                <div className="w-full w-1/2">
                  <div className="text-2xl pb-1">Design Tools</div>
                  <div className="pl-9">
                    <ul className="list-disc">
                      <li>Figma</li>
                      <li>Adobe Illustrator</li>
                      <li>Miro</li>
                    </ul>
                  </div>
                </div>
                <div className="w-full w-1/2">
                  <div className="text-2xl pb-1">AI Tools</div>

                  <div className="pl-9">
                    <ul className="list-disc">
                      <li>ChatGPT</li>
                      <li>Copilot</li>
                      <li>Gemini AI Studio</li>
                      <li>Windsurf</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="myResumeContent">
              <div className="text-2xl pb-1">Front-End Development</div>
              <div className="pl-9">
                <ul className="list-disc">
                  <li>HTML, CSS, JavaScript</li>
                  <li>
                    React (working knowledge; building independent projects)
                  </li>
                  <li>
                    Next.js 15 (applied in portfolio; expanding into full
                    projects)
                  </li>
                  <li>Tailwind CSS</li>
                  <li>Bootstrap</li>
                  <li>
                    Shadcn UI (used in team projects; developing solo
                    experience)
                  </li>
                  <li>Responsive Layouts</li>
                </ul>
              </div>
              <div className="text-xl pt-7 pb-1">State Management</div>
              <div className="pl-9">
                <ul className="list-disc">
                  <li>Redux Toolkit (state slices, async flows)</li>
                  <li>RTK Query (API integration patterns)</li>
                </ul>
              </div>
            </div>
            <div className="myResumeContent">
              <div className="text-2xl pb-1 text-[var(--terminalBlue)]">
                Professional Experience
              </div>
            </div>

            <div className="myResumeContent">
              <div className="font-bold text-xl">
                BellMedex – Islamabad, Pakistan
              </div>
              <div className="font-semibold">
                UI/UX Designer and Front-End Developer | June 2021 – Present
              </div>
              <div className="pl-9">
                <ul className="list-disc">
                  <li>
                    Contributed to the UX design of MediFusion, an enterprise
                    healthcare platform offering EHR, EMR, PMS, and RCM modules.
                    MediFusion is BellMedex’s flagship product used by clinics
                    and billing teams across the healthcare workflow.
                  </li>
                  <li>
                    Designed user flows, wireframes, and high-fidelity
                    interfaces for key MediFusion features such as patient
                    charts, encounters, scheduling, claims, eligibility, and
                    billing workflows.
                  </li>
                  <li>
                    Worked within the internal design team to maintain
                    consistency, usability, and clarity across complex
                    healthcare modules.
                  </li>
                  <li>
                    Created structured layouts and interaction patterns that
                    simplified multi-step administrative and clinical tasks.
                  </li>
                  <li>
                    Translated Figma designs into responsive front-end code and
                    implemented UI components using React, Tailwind CSS, and
                    Shadcn UI within team-defined workflows.
                  </li>
                  <li>
                    Supported the team in maintaining design systems, reusable
                    components, and UI standards across the MediFusion platform.
                  </li>
                  <li>
                    Designed dashboards, infographics, and data-heavy screens to
                    improve visibility for providers and billing staff.
                  </li>
                </ul>
              </div>
            </div>
            <div className="myResumeContent">
              <div className="font-bold text-xl">
                CODE Enterprises – Islamabad, Pakistan
              </div>
              <div className="font-semibold">
                UI/UX Design Team Lead | January 2015 – May 2021t
              </div>
              <div className="pl-9">
                <ul className="list-disc">
                  <li>
                    Led the design team and coordinated with project managers.
                  </li>
                  <li>
                    Translated requirements into wireframes, prototypes, and
                    high-fidelity designs.
                  </li>
                  <li>
                    Delivered end-to-end design solutions for web and mobile
                    applications.
                  </li>
                  <li>
                    Ensured consistency through design systems and structured
                    workflows.
                  </li>
                </ul>
              </div>
            </div>
            <div className="myResumeContent">
              <div className="font-bold text-xl">
                Discretelogix – Islamabad, Pakistan
              </div>
              <div className="font-semibold">
                UI/UX Designer and Front-End Developer | 2012 – 2014
              </div>
              <div className="pl-9">
                <ul className="list-disc">
                  <li> Developed responsive layouts using Bootstrap.</li>
                  <li>
                    Designed mobile game interfaces and grid-based layouts.
                  </li>
                  <li>
                    Contributed to UI/UX direction across multiple projects.
                  </li>
                </ul>
              </div>
            </div>
            <div className="myResumeContent">
              <div className="font-bold text-xl">
                Aavansoft – Islamabad, Pakistan
              </div>
              <div className="font-semibold">
                UI/UX Designer and Front-End Developer | 2009 – 2012
              </div>
              <div className="pl-9">
                <ul className="list-disc">
                  <li> Created responsive web layouts and UI solutions.</li>
                  <li>
                    Managed UI/UX direction and grid systems for various
                    projects.
                  </li>
                </ul>
              </div>
            </div>
            <div className="myResumeContent">
              <div className="font-bold text-xl">
                Medialinkers – Islamabad, Pakistan
              </div>
              <div className="font-semibold">UI/UX Designer | 2007 – 2009</div>
              <div className="pl-9">
                <ul className="list-disc">
                  <li>
                    Designed website templates, icons, and marketing materials.
                  </li>
                  <li>Created interactive layouts and Flash animations.</li>
                </ul>
              </div>
            </div>
            <div className="myResumeContent">
              <div className="text-2xl pb-1 text-[var(--terminalBlue)]">
                Projects
              </div>
            </div>
            <div className="myResumeContent">
              <div className="font-bold text-xl">
                Personal Portfolio Website
              </div>
              <div className="pl-9">
                <ul className="list-disc">
                  <li>Designed and developed using Next.js 15.</li>
                  <li>
                    First applied project using Next.js; currently expanding
                    into more complex builds.
                  </li>
                  <li>
                    Demonstrates component-based architecture, responsive
                    design, and performance optimization.
                  </li>
                  <li>
                    Showcases UX case studies, healthcare design work, and
                    front-end development growth.
                  </li>
                </ul>
              </div>
            </div>
            <div className="myResumeContent">
              <div className="font-bold text-xl">
                Independent React/Next.js Practice Projects
              </div>
              <div className="font-semibold">
                Building small-scale components and pages to strengthen solo
                development skills.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default resume;
