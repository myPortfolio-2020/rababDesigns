import React from "react";
import Image from "next/image";
import healthcare from "../../../lib/data/healthcare.json";
import DecoratedSeprator from "../DecoratedSeprator";
const CredentialingAndEnrollment = () => {
  return (
    <>
      <div className="healthcarePages text-xl leading-[32px]">
        <div className="w-[94%] xl:w-[80%] mx-auto">
          <div className="flex flex-wrap gap-3 text-[var(--background)]">
            <div className="xl:flex-auto bg-white bg-opacity-10 rounded-xl p-4">
              <p className="text-xs mb-1">Role</p>
              <p className="text-sm font-medium">UX Designer</p>
            </div>
            <div className="xl:flex-auto bg-white bg-opacity-10 rounded-xl p-4">
              <p className="text-xs mb-1">Domain</p>
              <p className="text-sm font-medium">Healthcare RCM</p>
            </div>
            <div className="xl:flex-auto bg-white bg-opacity-10 rounded-xl p-4">
              <p className="text-xs mb-1">Type</p>
              <p className="text-sm font-medium">Enterprise Web App</p>
            </div>
            <div className="xl:flex-auto bg-white bg-opacity-10 rounded-xl p-4">
              <p className="text-xs mb-1">Screens</p>
              <p className="text-sm font-medium">Assignment, Payer, CAQH</p>
            </div>
          </div>
          <div className="text-sm tracking-[11px] uppercase text-[var(--terminalBlue)] pt-16 pb-3">
            Overview
          </div>
          <div className="flex xl:flex-row flex-col justify-between items-center gap-9">
            <div className="w-full xl:w-3/5">
              <div className="text-3xl  mb-9">
                A system built where compliance meets revenue
              </div>
              <div>
                <p>
                  Provider credentialing is one of the most administratively
                  complex and financially critical workflows in healthcare. A
                  single missed deadline or unapproved payer can prevent a
                  provider from seeing patients and billing insurance — directly
                  blocking revenue for the entire practice.
                </p>
                <p className="pt-6">
                  I designed a centralized Provider Credentialing & Enrollment
                  Management System to replace the fragmented,
                  spreadsheet-driven workflows that credentialing teams rely on
                  today.
                </p>
              </div>
            </div>
            <div className="w-full xl:w-2/5 text-sm flex-col items-center">
              <div className="bracketBox1 w-full">
                <div className="text-sm tracking-[11px] uppercase text-[var(--terminalBlue)] pt-16 pb-3">
                  The Stakes
                </div>
                <div className="p-2">
                  CAQH re-attestation lapse → provider deactivated, cannot bill
                  any payer
                </div>
                <div className="p-2">
                  Unfollowed payer enrollment can sit in process for 90-180 days
                  with zero revenue
                </div>
                <div className="p-2">
                  No task visibility creates duplicated effort across billing
                  and credentialing staff
                </div>
                <div className="w-full flex items-center gap-1 py-4 bg-[#111] mt-4 mb-4">
                  <div className="w-2 h-2 rounded-full bg-gray-500"></div>
                  <div className="flex-1 h-px bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-500"></div>
                </div>
                <div className="p-2 text-[var(--supportingColorGreen)]">
                  This system was designed to make those failure modes visible
                  before they become revenue losses.
                </div>
              </div>
            </div>
          </div>
          <div className="text-sm tracking-[11px] uppercase text-[var(--terminalBlue)] pt-10">
            Users & Roles
          </div>
          <div className="mt-10 mb-10 flex xl:flex-row flex-col justify-between  gap-4">
            <div className="flex-1 flex flex-col justify-center min-h-[100px] bg-[var(--topTerminal)] p-4 rounded-2xl">
              <div className="text-[var(--supportingColorGreen)]">
                Credentialing Specialist
              </div>
              <div className="text-sm">
                CAQH compliance, payer applications, task assignments
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-center min-h-[100px] bg-[var(--topTerminal)] p-4 rounded-2xl">
              <div className="text-[var(--supportingColorGreen)]">
                Payer Team
              </div>
              <div className="text-sm">Enrollment status, payer follow-ups</div>
            </div>
            <div className="flex-1 flex flex-col justify-center min-h-[100px] bg-[var(--topTerminal)] p-4 rounded-2xl">
              <div className="text-[var(--supportingColorGreen)]">Provider</div>
              <div className="text-sm">
                Onboarded accurately so credentialing can begin
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-center min-h-[100px] bg-[var(--topTerminal)] p-4 rounded-2xl">
              <div className="text-[var(--supportingColorGreen)]">
                Administrator
              </div>
              <div className="text-sm">
                Oversight across all providers and stages
              </div>
            </div>
          </div>
          <div className="text-sm tracking-[11px] uppercase text-[var(--terminalBlue)] pt-10">
            User Flow
          </div>
          <div className="mt-10 w-full">
            {healthcare.healthcare
              .filter((item) => item.CredentialingAndEnrollment?.length) // only items with images
              .map((item) => (
                <div key={item.id} className="mx-auto">
                  {item.CredentialingAndEnrollment?.map((img, index) => (
                    <Image
                      key={index}
                      src={img.flowChart}
                      alt="description"
                      width={818}
                      height={416}
                      className="transition-transform duration-300 hover:scale-102"
                    />
                  ))}
                </div>
              ))}
          </div>
          <DecoratedSeprator />
          <div className="w-1/2 text-sm tracking-[11px] uppercase text-[var(--terminalBlue)] pt-16 pb-3">
            Assignment Screen
          </div>
          <div className="text-3xl"> From flat rows to actionable cards</div>
        </div>
      </div>
      <div className="flex xl:flex-row flex-col w-full mt-20 bg-[var(--topTerminal)] border-t-2 border-b-4 border-[var(--supportingColorBlue)]">
        <div className="w-full xl:w-1/2">
          <div className="p-6">
            <div className="p-6 text-2xl">Before</div>
            <Image
              src="/assets/projects/healthCare/RCM/Assignment__Before.png"
              alt="description"
              width={1440}
              height={928}
              className="transition-transform duration-300 hover:scale-102"
            />
            <div className="text-xl  leading-[36px] p-4 mt-6 bg-[var(--topTerminal)] rounded-2xl flex flex-col min-h-[369px] justify-center">
              <div className="p-2">
                1 - Flat table — every assignee row looks identical in weight
              </div>
              <div className="p-2">
                2 - OVERDUE shown as tiny orange text — easy to miss
              </div>
              <div className="p-2">
                3 - No due dates — no way to know when tasks need action
              </div>
              <div className="p-2">
                4 - No progress summary — can not tell overall completion
              </div>
              <div className="p-2">
                5 - Bottom half of screen completely empty
              </div>
            </div>
          </div>
        </div>
        <div className="w-full xl:w-1/2">
          <div className="p-6">
            <div className="p-6 text-2xl">After</div>
            <Image
              src="/assets/projects/healthCare/RCM/Assignment__after.png"
              alt="description"
              width={1440}
              height={928}
              className="transition-transform duration-300 hover:scale-102"
            />
            <div className="text-xl  leading-[36px] p-4 mt-6 bg-[var(--topTerminal)] rounded-2xl flex flex-col min-h-[369px] justify-center">
              <div className="p-2">
                1 - 2-column card grid — each assignee owns a card with clear
                boundaries
              </div>
              <div className="p-2">
                2 - Color-coded task backgrounds — status visible before reading
              </div>
              <div className="p-2">
                3 - Due dates only on actionable tasks — no noise on completed
                items
              </div>
              <div className="p-2">
                4 - Priority-based card status — Overdue badge if even one task
                is late
              </div>
              <div className="p-2">
                5 - Summary bar — Total, Completed, In Progress, Overdue at a
                glance
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="healthcarePages text-xl leading-[32px]">
        <div className="text-sm mt-6 mb-6 tracking-[11px] uppercase text-[var(--terminalBlue)] pt-10">
          Key Design Decisions
        </div>
        <div className="p-4 mt-4 rounded-2xl">
          <div className="text-[var(--terminalBlue)]">Table → Card grid</div>
          <div className="text-xl">
            Each assignee gets their own card — creating clear ownership
            boundaries and making the screen scannable by person rather than by
            row.
          </div>
        </div>

        <div className="p-4 mt-4 rounded-2xl">
          <div className="text-[var(--terminalBlue)]">
            Color-coded task backgrounds
          </div>
          <div className="text-xl">
            Green = completed, blue = in progress, amber = pending, red =
            overdue, grey = not started. Status is communicated before you read
            the label.
          </div>
        </div>
        <div className="p-4 mt-4 rounded-2xl">
          <div className="text-[var(--terminalBlue)]">
            Priority-based card header status
          </div>
          <div className="text-xl">
            If even one task is overdue, the whole card shows an Overdue badge.
            A manager scans 6 card headers in 2 seconds and knows exactly who
            needs attention.
          </div>
        </div>
        <div className="min-h-[100px] bg-[var(--topTerminal)] p-4 mt-18 rounded-2xl">
          <div className="text-[var(--supportingColorGreen)] pb-3">Impact</div>
          <div>
            A manager can now answer in under 5 seconds: Who is behind? What
            needs action today? What is the overall progress?
          </div>
        </div>
        <DecoratedSeprator />
        <div className="w-1/2 text-sm tracking-[11px] uppercase text-[var(--terminalBlue)]  pb-3">
          Payer Screen
        </div>
        <div className="text-3xl">
          From a static list to an enrollment dashboard
        </div>
        <div>
          Payer enrollment status tracking — redesigned to surface progress,
          timelines, and compliance gaps without manual counting.
        </div>
      </div>
      <div>
        <div className="flex xl:flex-row flex-col w-full mt-20 bg-[var(--topTerminal)] border-t-2 border-b-4 border-[var(--supportingColorBlue)]">
          <div className="w-full xl:w-1/2">
            <div className="p-6">
              <div className="p-6 text-2xl">Before</div>
              <Image
                src="/assets/projects/healthCare/RCM/Payer_before.png"
                alt="description"
                width={1440}
                height={928}
                className="transition-transform duration-300 hover:scale-102"
              />
              <div className="text-xl  leading-[36px] p-4 mt-6 bg-[var(--topTerminal)] rounded-2xl flex flex-col min-h-[369px] justify-center">
                <div className="p-2">
                  1 - Bare table — no context about whose payer list this is
                </div>
                <div className="p-2">
                  2 - All Provider IDs identical — looks like placeholder data
                </div>
                <div className="p-2">
                  3 - Research Only shown in purple — no intuitive meaning
                </div>
                <div className="p-2">
                  4 - No submission date — no enrollment timeline visible
                </div>
                <div className="p-2">
                  5 - Bottom 50% empty — no summary of how many are approved
                </div>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-1/2">
            <div className="p-6">
              <div className="p-6 text-2xl">After</div>
              <Image
                src="/assets/projects/healthCare/RCM/payer_after.png"
                alt="description"
                width={1440}
                height={928}
                className="transition-transform duration-300 hover:scale-102"
              />
              <div className="text-xl  leading-[36px] p-4 mt-6 bg-[var(--topTerminal)] rounded-2xl flex flex-col min-h-[369px] justify-center">
                <div className="p-2">
                  1 - Summary bar — Total, Approved, In Process, Research,
                  Submitted
                </div>
                <div className="p-2">
                  2 - Unique Provider IDs and varied dates — system looks real
                </div>
                <div className="p-2">
                  3 - Research Only in amber — universally signals needs
                  attention
                </div>
                <div className="p-2">
                  4 - Submitted date column — shows enrollment timeline for
                  every payer
                </div>
                <div className="p-2">
                  5 - Provider context at top — clear whose data you are viewing
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="healthcarePages text-xl leading-[32px]">
          <div className="min-h-[100px] bg-[var(--topTerminal)] p-4 mt-24 rounded-2xl">
            <div className="text-[var(--supportingColorGreen)] pb-3">
              Impact
            </div>
            <div>
              A billing coordinator can now answer in under 5 seconds: how many
              payers are approved, which need follow-up, and when each was
              submitted.
            </div>
          </div>
          <DecoratedSeprator />
        </div>
      </div>
      <div className="healthcarePages text-xl leading-[32px]">
        <div className="w-1/2 text-sm tracking-[11px] uppercase text-[var(--terminalBlue)]  pb-3">
          CAQH Screen
        </div>
        <div className="text-3xl">
          From passive data to active compliance tool
        </div>
        <div>
          CAQH compliance management — redesigned so re-attestation deadlines
          are impossible to miss and compliance history is always visible.
        </div>
      </div>
      <div className="flex xl:flex-row flex-col w-full mt-20 bg-[var(--topTerminal)] border-t-2 border-b-4 border-[var(--supportingColorBlue)]">
        <div className="w-full xl:w-1/2">
          <div className="p-6">
            <div className="p-6 text-2xl">Before</div>
            <Image
              src="/assets/projects/healthCare/RCM/CAQH_before.png"
              alt="description"
              width={1440}
              height={928}
              className="transition-transform duration-300 hover:scale-102"
            />
            <div className="text-xl  leading-[36px] p-4 mt-6 bg-[var(--topTerminal)] rounded-2xl flex flex-col min-h-[369px] justify-center">
              <div className="p-2">
                1 - Plain label/value list — no visual hierarchy whatsoever
              </div>
              <div className="p-2">
                2 - Re-attestation date buried between Password and Remarks
              </div>
              <div className="p-2">
                3 - No urgency indicator — deadline could pass unnoticed
              </div>
              <div className="p-2">
                4 - No compliance history — no audit trail
              </div>
              <div className="p-2">
                5 - Bottom 60% of screen completely empty
              </div>
            </div>
          </div>
        </div>
        <div className="w-full xl:w-1/2">
          <div className="p-6">
            <div className="p-6 text-2xl">After</div>
            <Image
              src="/assets/projects/healthCare/RCM/CAQH_after.png"
              alt="description"
              width={1440}
              height={928}
              className="transition-transform duration-300 hover:scale-102"
            />
            <div className="text-xl  leading-[36px] p-4 mt-6 bg-[var(--topTerminal)] rounded-2xl flex flex-col min-h-[369px] justify-center">
              <div className="p-2">
                1 - Urgency alert bar — countdown, due date, consequence, action
                button
              </div>
              <div className="p-2">
                2 - Re-attestation date in amber highlighted row — impossible to
                miss
              </div>
              <div className="p-2">
                3 - Current status as green pill badge — reads before you think
              </div>
              <div className="p-2">
                4 - Attestation history table — compliance record with who
                updated
              </div>
              <div className="p-2">
                5 - Every section serves a purpose — no empty space
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="healthcarePages text-xl leading-[32px]">
        <div className="text-sm mt-6 mb-6 tracking-[11px] uppercase text-[var(--terminalBlue)] pt-10">
          Key Design Decisions
        </div>
        <div className="p-4 mt-4 rounded-2xl">
          <div className="text-[var(--terminalBlue)]">Urgency alert bar</div>
          <div className="text-xl">
            The re-attestation deadline dominates the top with a countdown, due
            date, the consequence (provider deactivation), and a CTA button. A
            coordinator cannot open this screen without seeing it.
          </div>
        </div>

        <div className="p-4 mt-4 rounded-2xl">
          <div className="text-[var(--terminalBlue)]">
            Attestation history table
          </div>
          <div className="text-xl">
            A compliance record showing all past attestation cycles with dates,
            status, and who updated it — serving auditors, compliance teams, and
            new staff who need a provider&apos;s history at a glance.
          </div>
        </div>

        <div className="min-h-[100px] bg-[var(--topTerminal)] p-4 mt-18 rounded-2xl">
          <div className="text-[var(--supportingColorGreen)] pb-3">Impact</div>
          <div>
            A credentialing coordinator can now open CAQH and immediately know:
            is this provider at risk? When is action due? What is the compliance
            history?
          </div>
        </div>
        <DecoratedSeprator />
        <div className="w-1/2 text-sm tracking-[11px] uppercase text-[var(--terminalBlue)]  pb-3">
          Key Takeaways
        </div>
        <div className="text-3xl">What this project taught me</div>
        <div className="pt-6">
          Credentialing is a domain where bad UX has direct financial
          consequences — every design decision was made with that weight in mind
        </div>
        <div className="pt-6">
          Information hierarchy matters more than visual style in enterprise
          tools — getting the right data in front of the right person at the
          right time is the core UX problem
        </div>
        <div className="pt-6">
          Domain knowledge is a design tool — understanding what CAQH
          deactivation means made it possible to design urgency correctly
        </div>
        <div className="pt-6">
          Before/after iteration is where the real design thinking lives — not
          in the first version but in the decisions made to improve it
        </div>
      </div>
    </>
  );
};

export default CredentialingAndEnrollment;
