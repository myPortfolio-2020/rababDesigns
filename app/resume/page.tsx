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
      <div className="pages">
        <div className="flex xl:flex-row flex-col justify-content">
          <div className="xl:w-1/2 w-full pr-20">
            <div className="text-3xl pt-6">My Design Approach</div>
            <div>
              <div className="text-sm uppercase tracking-[12px] text-[var(--terminalBlue)] pt-6 pb-6">
                1. Discover
              </div>
              <div>Understand the problem before touching the UI.</div>
              <ul className="list-disc p-6">
                <li>Full discussion with Manager</li>
                <li>Gather information about existing system & workflow</li>
                <li>Business goals & constraints analysis</li>
              </ul>
              <div>
                My goal at this stage is to clearly understand what problem we
                are solving, for whom, and why it matters.
              </div>
            </div>
            <div>
              <div className="text-sm uppercase tracking-[12px] text-[var(--terminalBlue)] pt-6 pb-6">
                2. Define
              </div>
              <div>Turn complexity into clarity.</div>
              <ul className="list-disc p-6">
                <li>Pain points & opportunity mapping</li>
                <li>Problem statements & scope definition</li>
              </ul>
              <div>
                This phase helps align product, business, and user needs before
                moving into design.
              </div>
            </div>
            <div>
              <div className="text-sm uppercase tracking-[12px] text-[var(--terminalBlue)] pt-6 pb-6">
                3. Design
              </div>
              <div>Structure first, visuals second.</div>
              <ul className="list-disc p-6">
                <li>User flows & wireframes</li>
                <li>High-fidelity UI & prototypes</li>
                <li>Design systems & component thinking</li>
              </ul>
              <div>I focus on building systems, not just screens.</div>
            </div>
            <div>
              <div className="text-sm uppercase tracking-[12px] text-[var(--terminalBlue)] pt-6 pb-6">
                4. Validate
              </div>
              <div>Test, learn, and refine.</div>
              <ul className="list-disc p-6">
                <li>Team and & user feedback</li>
                <li>Iteration and refinement</li>
              </ul>
              <div>
                Feedback is not a checkpoint — it’s part of the design loop.
              </div>
            </div>
            <div>
              <div className="text-sm uppercase tracking-[12px] text-[var(--terminalBlue)] pt-6 pb-6">
                5. Deliver
              </div>
              <div>Make sure design works in the real world.</div>
              <ul className="list-disc p-6">
                <li>Post-launch improvements</li>
                <li>Continuous iteration</li>
              </ul>
            </div>
            <div className="text-3xl  pt-6">How I Work With Teams</div>
            <div>
              I work closely with product managers, developers, and stakeholders
              to ensure that solutions are not only user-friendly, but also
              technically feasible and aligned with business goals.
            </div>
            <div className="text-3xl  pt-6">My Design Values</div>
            <ul className="list-disc p-6">
              <li>Clarity over decoration</li>
              <li>Usability over trends</li>
              <li>Systems over one-off screens</li>
              <li>Real user problems over assumptions</li>
            </ul>
          </div>
          <div className="resumeYYY xl:w-1/2 w-full">
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
                        Contributed to the UX design of MediFusion, an
                        enterprise healthcare platform offering EHR, EMR, PMS,
                        and RCM modules. MediFusion is BellMedex’s flagship
                        product used by clinics and billing teams across the
                        healthcare workflow.
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
                        Translated Figma designs into responsive front-end code
                        and implemented UI components using React, Tailwind CSS,
                        and Shadcn UI within team-defined workflows.
                      </li>
                      <li>
                        Supported the team in maintaining design systems,
                        reusable components, and UI standards across the
                        MediFusion platform.
                      </li>
                      <li>
                        Designed dashboards, infographics, and data-heavy
                        screens to improve visibility for providers and billing
                        staff.
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
                        Led the design team and coordinated with project
                        managers.
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
                        Ensured consistency through design systems and
                        structured workflows.
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
                  <div className="font-semibold">
                    UI/UX Designer | 2007 – 2009
                  </div>
                  <div className="pl-9">
                    <ul className="list-disc">
                      <li>
                        Designed website templates, icons, and marketing
                        materials.
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
        </div>
      </div>
    </>
  );
};

export default resume;
