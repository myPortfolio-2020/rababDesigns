import React from "react";
import Image from "next/image";
import healthcare from "../../../lib/data/healthcare.json";
import SepratorLine from "../SepratorLine";

const Scheduling = () => {
  return (
    <>
      <div className="pages">
        <div className="w-[94%] xl:w-[80%] mx-auto">
          <div>
            <div className=" bg-[var(--foreground)] text-[var(--background)] bg-opacity-10 rounded-xl py-2 px-6 mb-4">
              <span className="font-bold">User:</span> Medical Practice Manager
              / Administrator (e.g., &quot;Mr. James Smith&quot;).
            </div>
            <div className=" bg-[var(--foreground)] text-[var(--background)] bg-opacity-10 rounded-xl py-2 px-6 mb-4">
              <span className="font-bold">The Goal:</span>To set up and manage
              complex clinical schedules for multiple doctors without causing
              booking errors.
            </div>
            <div className=" bg-[var(--foreground)] text-[var(--background)] bg-opacity-10 rounded-xl py-2 px-6 mb-4">
              <span className="font-bold">The Environment:</span> A fast-paced
              clinic where the user is frequently interrupted by phone calls or
              patient check-ins.
            </div>
            <div className="text-sm tracking-[11px] uppercase text-[var(--terminalBlue)] pt-8 pb-10">
              The Challenge
            </div>
            <div className="min-h-[100px] bg-[var(--topTerminal)] p-4 rounded-2xl">
              <div className="text-[var(--supportingColorGreen)]">
                Designing for &quot;Recognition over Recall&quot;
              </div>
              <div className="text-sm">
                Administrative users often manage multiple provider schedules
                simultaneously. The original UI relied heavily on the user’s
                short-term memory, creating a significant risk of medical and
                scheduling errors.
              </div>
            </div>
            <SepratorLine />
          </div>
          <div>
            <div className="text-3xl text-center">
              Before vs. After: Comparative Analysis
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[var(--topTerminal)] border-t-2 border-b-4 border-[var(--supportingColorBlue)] p-8">
        <div className="text-2xl pl-12 pb-8">Before</div>
        {healthcare.healthcare
          ?.filter((item) => item.projectType === "Scheduling")
          .map((item) => (
            <div key={item.id}>
              <Image
                src={item.before}
                alt="description"
                width={1920}
                height={793}
                className="transition-transform duration-300 hover:scale-102 rounded"
              />
            </div>
          ))}
      </div>
      <div className="pages">
        <div className="w-[94%] xl:w-[80%] mx-auto">
          <div className="text-sm tracking-[4px] uppercase text-[var(--terminalBlue)] pt-16 pb-3">
            1. Legibility & Accessibility
          </div>

          <div className="pt-4">
            <div className="font-bold">The Problem:</div>
            <div>
              The original 12px font size created a high &quot;visual
              search&quot; burden, making it difficult for users to scan dense
              scheduling data quickly.
            </div>
          </div>
          <div className="pt-4">
            <div className="font-bold">The Risk:</div>
            <div>
              Small text increases the chance of misreading numbers (like slot
              times or appointment counts), which can lead to clinical
              scheduling errors.
            </div>
          </div>
          <div className="pt-4">
            <div className="font-bold text-[var(--supportingColorGreen)]">
              The Solution:
            </div>
            <div>
              I increased the base font size to 14px to improve readability and
              ensure the interface meets WCAG accessibility standards for
              high-stress environments.
            </div>
          </div>
          <SepratorLine />
          <div className="text-sm tracking-[4px] uppercase text-[var(--terminalBlue)] pt-16 pb-3">
            2. Contextual Anchoring (The Header)
          </div>

          <div className="pt-4">
            <div className="font-bold">The Problem:</div>
            <div>
              In the &quot;Before&quot; screen, the generic &quot;Provider
              Scheduler&quot; header forced the user to recall which doctor they
              selected from the sidebar.
            </div>
          </div>
          <div className="pt-4">
            <div className="font-bold">The Risk:</div>
            <div>
              If the admin is interrupted, they might return to the screen and
              apply changes to the wrong provider, leading to a "Wrong-Provider"
              error.
            </div>
          </div>
          <div className="pt-4">
            <div className="font-bold text-[var(--supportingColorGreen)]">
              The Solution:
            </div>
            <div>
              {" "}
              I implemented a dynamic header (&quot;Scheduling for: 2
              Providers&quot;) with profile photos and a persistent
              &quot;Summary&quot; sidebar. This provides immediate recognition
              cues, allowing the user to see the current context instantly
              without relying on memory (NIST 4.2).
            </div>
          </div>
          <SepratorLine />
          <div className="text-sm tracking-[4px] uppercase text-[var(--terminalBlue)] pt-16 pb-3">
            3. Information Density (Progressive Disclosure)
          </div>

          <div className="pt-4">
            <div className="font-bold">The Problem:</div>
            <div>
              {" "}
              The &quot;Before&quot; screen displayed 14 empty break boxes
              simultaneously, creating massive visual noise.
            </div>
          </div>
          <div className="pt-4">
            <div className="font-bold">The Risk:</div>
            <div>
              Excessive clutter distracts the user, increasing data-entry
              fatigue and the time required to find relevant fields.
            </div>
          </div>
          <div className="pt-4">
            <div className="font-bold text-[var(--supportingColorGreen)]">
              The Solution:
            </div>
            <div>
              I used Progressive Disclosure by replacing the static boxes with a
              &quot;+ Add Break&quot; button. This ensures only necessary
              information is visible, satisfying NIST 4.5.
            </div>
          </div>
          <SepratorLine />
          <div className="text-sm tracking-[4px] uppercase text-[var(--terminalBlue)] pt-16 pb-3">
            4. Safety Rails (Constrained Inputs)
          </div>

          <div className="pt-4">
            <div className="font-bold">The Problem:</div>
            <div>
              {" "}
              The original design used unconstrained numeric text boxes for
              &quot;Allowed Appointments&quot;.
            </div>
          </div>
          <div className="pt-4">
            <div className="font-bold">The Risk:</div>
            <div>
              A simple typo (e.g., typing &quot;44&quot; instead of
              &quot;4&quot;) could lead to dangerous over-scheduling,
              overwhelming the provider and compromising patient safety.
            </div>
          </div>
          <div className="pt-4">
            <div className="font-bold text-[var(--supportingColorGreen)]">
              The Solution:
            </div>
            <div>
              I replaced the text box with a Stepper (- 1 +). This creates
              &quot;safety rails&quot; that prevent unrealistic values from
              being entered (NIST 3.6).
            </div>
          </div>
          <SepratorLine />
          <div className="text-sm tracking-[4px] uppercase text-[var(--terminalBlue)] pt-16 pb-3">
            5. Action Ambiguity (Explicit Labeling)
          </div>

          <div className="pt-4">
            <div className="font-bold">The Problem:</div>
            <div>
              The &quot;Before&quot; screen used unlabeled checkboxes, making
              the system status ambiguous.
            </div>
          </div>
          <div className="pt-4">
            <div className="font-bold">The Risk:</div>
            <div>
              Without explicit labels (e.g., &quot;Apply Break&quot;), users may
              activate a logic-gate that accidentally overwrites data without
              realizing it.
            </div>
          </div>
          <div className="pt-4">
            <div className="font-bold text-[var(--supportingColorGreen)]">
              The Solution:
            </div>
            <div>
              I added clear text labels next to every checkbox, ensuring
              &quot;Visibility of System Status&quot; (NIST 3.1).
            </div>
          </div>
          <SepratorLine />
          <div className="text-sm tracking-[4px] uppercase text-[var(--terminalBlue)] pt-16 pb-3">
            6. Conflict Management (Mixed Values Logic)
          </div>

          <div className="pt-4">
            <div className="font-bold">The Problem:</div>
            <div>
              When selecting multiple providers with different slot lengths, the
              original UI showed misleading default values.
            </div>
          </div>
          <div className="pt-4">
            <div className="font-bold">The Risk:</div>
            <div>
              If the UI shows &quot;15 min&quot; when one provider is actually
              &quot;30 min,&quot; the admin might hit save and wipe out unique
              clinical settings.
            </div>
          </div>
          <div className="pt-4">
            <div className="font-bold text-[var(--supportingColorGreen)]">
              The Solution:
            </div>
            <div>
              I introduced &quot;Mixed-State&quot; placeholders and a
              side-by-side comparison in the sidebar. I also added a toggle for
              &quot;Individual&quot; vs. &quot;Batch&quot; editing, forcing the
              user to make a deliberate choice to resolve conflicts (NIST 3.6).
            </div>
          </div>
          <SepratorLine />
        </div>
      </div>
      <div className="bg-[var(--topTerminal)] border-t-2 border-b-4 border-[var(--supportingColorBlue)] p-8">
        <div className="text-2xl pl-12 pb-8">After</div>
        {healthcare.healthcare
          ?.filter((item) => item.projectType === "Scheduling")
          .map((item) => (
            <div key={item.id}>
              <Image
                src={item.after}
                alt="description"
                width={1920}
                height={793}
                className="transition-transform duration-300 hover:scale-102  rounded"
              />
            </div>
          ))}
      </div>
      <div className="pages">
        <div className="w-[94%] xl:w-[80%] mx-auto">
          <div className="min-h-[100px] bg-[var(--topTerminal)] p-4 rounded-2xl">
            <div className="text-[var(--supportingColorGreen)]">
              Final Impact
            </div>
            <div className="text-sm">
              By prioritizing Recognition over Recall and Error Prevention, this
              redesign significantly reduces the cognitive burden on medical
              administrators. The system now acts as a partner to the user,
              surfacing conflicts early and providing the &quot;safety
              nets&quot; necessary to manage complex healthcare data with
              confidence.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Scheduling;
