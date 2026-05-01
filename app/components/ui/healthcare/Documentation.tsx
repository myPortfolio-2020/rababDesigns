import React from "react";
import Image from "next/image";
import healthcare from "../../../lib/data/healthcare.json";
import SepratorLine from "../SepratorLine";

const Documentation = () => {
  return (
    <>
      <div className="pages text-xl leading-[32px]">
        <div className="w-[94%] xl:w-[80%] mx-auto">
          <div className="flex xl:flex-row flex-col justify-between flex-wrap gap-3 text-[var(--background)]">
            <div className="xl:flex-auto bg-white bg-opacity-10 rounded-xl p-4">
              <div className="text-xs mb-1">Role </div>
              <div className="text-sm font-medium">UX Designer </div>
            </div>
            <div className="xl:flex-auto bg-white bg-opacity-10 rounded-xl p-4">
              <div className="text-xs mb-1">Domain </div>
              <div className="text-sm font-medium">Healthcare / EHR </div>
            </div>
            <div className="xl:flex-auto bg-white bg-opacity-10 rounded-xl p-4">
              <div className="text-xs mb-1">Methodology </div>
              <div className="text-sm font-medium">
                NIST Usability Principles{" "}
              </div>
            </div>
            <div className="xl:flex-auto bg-white bg-opacity-10 rounded-xl p-4">
              <div className="text-xs mb-1">Iterations </div>
              <div className="text-sm font-medium">3 versions </div>
            </div>
          </div>
          {/* ---------------- section 1 ---------------- */}
          <div className="mt-16">
            <div className="text-sm tracking-[11px] uppercase pb-4">
              <div className="text-[var(--terminalBlue)]">Problem</div>
            </div>
            <div>
              The original interface - {""}
              <span className="text-[var(--supportingColorGreen)] font-medium">
                Version 1 {""}
              </span>
              had several usability issues:
            </div>
            <div className="text-3xl font-medium pt-12 pb-2">Key Problems</div>

            <div>
              <div className="pb-1 pt-1">
                <span className="pl-2 pr-2"> - </span> Too many clicks (each
                section opened a new screen)
              </div>
              <div className="pb-1 pt-1">
                <span className="pl-2 pr-2"> - </span>No workflow guidance
              </div>
              <div className="pb-1 pt-1">
                <span className="pl-2 pr-2"> - </span>High cognitive load (users
                had to remember what was completed)
              </div>
              <div className="pb-1 pt-1">
                <span className="pl-2 pr-2"> - </span>Dashboard-style layout
                instead of task-oriented design
              </div>
              <div className="pb-1 pt-1">
                <span className="pl-2 pr-2"> - </span>No progress visibility
              </div>
            </div>
            <div className="min-h-[100px] bg-[var(--topTerminal)] mt-12 p-4 rounded-2xl">
              <div className="text-[var(--supportingColorGreen)]">Result:</div>
              <div>
                Slower documentation and increased mental effort for clinicians
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[var(--topTerminal)] border-t-2 border-b-4 border-[var(--supportingColorBlue)] p-8">
        <div className="text-2xl pl-12 pb-8 text-[var(--supportingColorGreen)]">
          Version 1{" "}
        </div>
        {healthcare.healthcare
          ?.filter((item) => item.projectType === "documentation")
          .map((item) =>
            item.before ? (
              <div key={item.id}>
                <Image
                  src={item.before}
                  alt="description"
                  width={1920}
                  height={696}
                  className="transition-transform duration-300 hover:scale-102 rounded"
                />
              </div>
            ) : null,
          )}
      </div>
      <div className="pages text-xl leading-[32px]">
        <div className="w-[94%] xl:w-[80%] mx-auto">
          {/* ---------------- section 2 ---------------- */}
          <div className="mt-4">
            <div className="text-3xl">Understanding the User</div>
            <div className="text-sm tracking-[11px] uppercase pt-4 pb-2">
              <div className="text-[var(--terminalBlue)]">
                Primary User: Doctors
              </div>

              <div className="pt-16 font-bold">Doctors:</div>
            </div>
            <div>
              <div className="pb-2 pt-0">
                <div>
                  <span className="pl-4 pr-4">-</span>
                  Work under time pressure
                </div>
              </div>
              <div className="pb-2 pt-0">
                <div>
                  <span className="pl-4 pr-4">-</span>
                  Think in clinical stories, not forms
                </div>
              </div>
              <div className="pb-2 pt-0">
                <div>
                  <span className="pl-4 pr-4">-</span>
                  Need fast, low-friction input
                </div>
              </div>
              <div className="pb-2 pt-0">
                <div>
                  <span className="pl-4 pr-4">-</span>
                  Cannot rely on memory while documenting
                </div>
              </div>
              <div className="min-h-[100px] bg-[var(--topTerminal)] mt-12 p-4 rounded-2xl">
                <div className="text-[var(--supportingColorGreen)]">
                  Design Goal:
                </div>
                <div>
                  Transform a multi-screen, form-heavy interface into a{" "}
                  <span className="text-[var(--terminalBlue)]">
                    fast, guided, and workflow-driven
                  </span>{" "}
                  documentation experience
                </div>
              </div>
            </div>
            <SepratorLine />
          </div>
        </div>
      </div>
      <div className="pages text-xl leading-[32px]">
        <div className="w-[94%] xl:w-[80%] mx-auto">
          <div className="text-sm tracking-[11px] uppercase text-[var(--terminalBlue)] pb-4">
            Iteration 1
          </div>
          <div>Structural Improvement - After-Improvement01</div>
        </div>
      </div>
      <div className="bg-[var(--topTerminal)] border-t-2 border-b-4 border-[var(--supportingColorBlue)] p-8">
        <div className="text-2xl pl-12 pb-8 text-[var(--supportingColorGreen)]">
          Version 2{" "}
        </div>
        {healthcare.healthcare
          ?.filter((item) => item.projectType === "documentation")
          .map((item) =>
            item.before ? (
              <div key={item.id}>
                <Image
                  src={item.after}
                  alt="description"
                  width={1920}
                  height={696}
                  className="transition-transform duration-300 hover:scale-102 rounded"
                />
              </div>
            ) : null,
          )}
      </div>
      <div className="pages text-xl leading-[32px]">
        <div className="w-[94%] xl:w-[80%] mx-auto">
          <div className="text-3xl pt-12 pb-4">What Changed</div>
          <div>
            <span className="pl-4 pr-4">-</span>Introduced left-side navigation
          </div>
          <div>
            <span className="pl-4 pr-4">-</span>Enabled inline editing (no
            screen switching)
          </div>
          <div>
            <span className="pl-4 pr-4">-</span>Kept patient info visible
          </div>
          <div>
            <span className="pl-4 pr-4">-</span>Reduced navigation friction
          </div>
          <div className="text-3xl pt-12 pb-4">Improvements</div>
          <div>
            <span className="pl-4 pr-4">-</span>Fewer clicks
          </div>
          <div>
            <span className="pl-4 pr-4">-</span>Better continuity
          </div>
          <div>
            <span className="pl-4 pr-4">-</span>More realistic EHR workflow
          </div>
          <SepratorLine />
          <div className="text-3xl pt-12 pb-4">Remaining Issues</div>
          <div>
            <span className="pl-4 pr-4">-</span>Still form-heavy and dense
          </div>
          <div>
            <span className="pl-4 pr-4">-</span>No clear “next step” guidance
          </div>
          <div>
            <span className="pl-4 pr-4">-</span>Weak hierarchy
          </div>
          <div>
            <span className="pl-4 pr-4">-</span>No progress tracking
          </div>
          <div className="text-3xl pt-24 pb-4 text-[var(--terminalBlue)]">
            Final Solution
          </div>
          <div className="text-sm tracking-[11px]  uppercase text-[var(--terminalBlue)] pb-4">
            Iteration 2 - Workflow-Driven UI
          </div>
        </div>
      </div>
      <div className="bg-[var(--topTerminal)] border-t-2 border-b-4 border-[var(--supportingColorBlue)] p-8">
        <div className="text-2xl pl-12 pb-8 text-[var(--supportingColorGreen)]">
          Version 3{" "}
        </div>
        {healthcare.healthcare
          ?.filter((item) => item.projectType === "documentation")
          .map((item) =>
            item.documentation?.map((docImg, index) => (
              <div key={`${item.id}-${index}`}>
                <Image
                  src={docImg}
                  alt="documentation"
                  width={1603}
                  height={806}
                  className="transition-transform duration-300 hover:scale-102 rounded"
                />
              </div>
            )),
          )}
      </div>
      <div className="pages text-xl leading-[32px]">
        <div className="w-[94%] xl:w-[80%] mx-auto">
          <section className="mb-10">
            <div className="space-y-6">
              <div>
                <div className="font-bold"> Workflow Panel</div>
                <div className="pb-12">
                  Introduced a right-side panel to guide clinicians with
                  progress tracking and next-step recommendations.
                </div>
              </div>

              <div>
                <div className="font-bold">Inline Documentation</div>
                <div className="pb-12">
                  Eliminated screen switching and enabled continuous,
                  scroll-based documentation.
                </div>
              </div>

              <div>
                <div className="font-bold">ster Inputs</div>
                <div className="pb-12">
                  Replaced traditional inputs with faster components like pills
                  and toggles.
                </div>
              </div>

              <div>
                <div className="font-bold">Reduced Cognitive Load</div>
                <div className="pb-12">
                  Added progress indicators and highlighted missing critical
                  data.
                </div>
              </div>
            </div>
          </section>

          <section className="min-h-[100px] bg-[var(--topTerminal)] p-4 mb-20 rounded-2xl">
            <div className="font-bold text-[var(--supportingColorGreen)]">
              {" "}
              Impact
            </div>
            <div className="flex xl:flex-row flex-col justify-center gap-12">
              <div className="w-1/2">
                <div>- 50% reduction in clicks</div>
                <div>- Faster documentation workflow</div>
              </div>
              <div className="w-1/2">
                <div>- Reduced cognitive load</div>
                <div>- Improved usability and clarity</div>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <div className="font-bold">Key Learnings</div>
            <ul className="list-disc pl-6 space-y-2 ">
              <li>Healthcare UX is workflow-driven, not form-driven</li>
              <li>Guidance is more important than navigation</li>
              <li>Reducing mental effort improves speed and safety</li>
            </ul>
          </section>

          <section className="mb-10">
            <div className="font-bold">Future Opportunities</div>
            <ul className="list-disc pl-6 space-y-2 ">
              <li>AI-assisted documentation</li>
              <li>Voice input</li>
              <li>Smart recommendations</li>
            </ul>
          </section>

          <section>
            <div className="font-bold"> Summary</div>
            <div className="">
              Redesigned a clinical documentation interface into a guided
              workflow system that improves speed, reduces cognitive load, and
              enhances usability for clinicians.
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Documentation;
