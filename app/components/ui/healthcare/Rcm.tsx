import React from "react";
import Image from "next/image";
const Rcm = () => {
  return (
    <>
      <div className="pages">
        <div className="text-sm text-[var(--terminalBlue)] tracking-[6px] mt-4 pb-4">
          Revenue Cycle Management
        </div>
        <div className="mt-2 text-xl  leading-[36px]">
          The goal of this system is to streamline the Provider Credentialing
          and Enrollment process within the Healthcare Revenue Cycle. It serves
          as a centralized hub for managing provider data, payer statuses
          (Medicare, Medicaid, etc.), and CAQH (Council for Affordable Quality
          Healthcare) compliance.
        </div>
        <div className="text-3xl pt-6 pb-6">The Problem</div>
        <div className="bracketBox1">
          <div>Healthcare administrators often struggle with:</div>

          <div className="flex justify-start gap-3">
            <div>
              <Image
                src="/assets/indentArrowBlue.png"
                alt="dot"
                width={7}
                height={9}
                className="inline-block mr-2 mb-1"
              />
            </div>
            <div>
              Fragmented Data: Provider info scattered across spreadsheets.
            </div>
          </div>
          <div className="flex justify-start gap-3">
            <div>
              <Image
                src="/assets/indentArrowBlue.png"
                alt="dot"
                width={7}
                height={9}
                className="inline-block mr-2 mb-1"
              />
            </div>
            <div>
              Compliance Deadlines: Missing re-attestation dates for CAQH.
            </div>
          </div>
          <div className="flex justify-start gap-3">
            <div>
              <Image
                src="/assets/indentArrowBlue.png"
                alt="dot"
                width={7}
                height={9}
                className="inline-block mr-2 mb-1"
              />
            </div>
            <div>
              Payer Transparency: No clear view of where an enrollment
              application stands (In-process vs. Approved).
            </div>
          </div>
        </div>

        <div className="text-3xl pt-6 pb-6">Design Solutions</div>
        <div className="bracketBox1">
          <div className="flex justify-start gap-3">
            <div>
              <Image
                src="/assets/indentArrowBlue.png"
                alt="dot"
                width={7}
                height={9}
                className="inline-block mr-2 mb-1"
              />
            </div>
            <div>
              Global Sidebar Navigation: A persistent left-hand menu categorized
              by the core RCM pillars: Practice/Provider info, Onboarding,
              Credentialing, Enrollment, and Reporting.
            </div>
          </div>
          <div className="flex justify-start gap-3">
            <div>
              <Image
                src="/assets/indentArrowBlue.png"
                alt="dot"
                width={7}
                height={9}
                className="inline-block mr-2 mb-1"
              />
            </div>
            <div>
              Sub-Tab Architecture: Using top-level tabs (Assignment, Payer,
              CAQH, Provider Roster) to keep specific provider data contextual
              and easy to toggle.
            </div>
          </div>
          <div className="flex justify-start gap-3">
            <div>
              <Image
                src="/assets/indentArrowBlue.png"
                alt="dot"
                width={7}
                height={9}
                className="inline-block mr-2 mb-1"
              />
            </div>
            <div>
              Action-Oriented Modals: Using focused overlays for &quot;Add
              Assignee&quot; or &quot;Add Payer&quot; to maintain the
              user&apos;s place in the workflow without page refreshes.
            </div>
          </div>
          <div className="flex justify-start gap-3">
            <div>
              <Image
                src="/assets/indentArrowBlue.png"
                alt="dot"
                width={7}
                height={9}
                className="inline-block mr-2 mb-1"
              />
            </div>
            <div>
              Status Visualization: Color-coded status badges (Green for
              Approved, Purple for Research, Grey for In-process) provide
              immediate visual feedback.
            </div>
          </div>
        </div>
        <div className="text-3xl pt-6 pb-6">
          User Flow Highlight: CAQH Management
        </div>
        <div>
          The system tracks the CAQH ID and Attestation Dates CAHQ screen. By
          highlighting the re-attestation date, the system prevents provider
          &quot;deactivation,&quot; which is a major pain point in RCM where
          revenue stops if a provider isn&apos;t up to date.
        </div>
        <div className="mt-6">
          <div>
            <Image
              src="/assets/projects/healthCare/RCM/01_Assignment.png"
              alt=""
              width={1440}
              height={1031}
              className="w-full h-auto object-cover"
            />
          </div>
          <div>d</div>
        </div>
      </div>
    </>
  );
};

export default Rcm;
