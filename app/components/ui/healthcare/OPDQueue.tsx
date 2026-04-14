import React from "react";
import Image from "next/image";

const OPDQueue = () => {
  return (
    <>
      <div className="pages text-xl leading-[36px]">
        <div className="xl:w-[80%] h-auto w-full xl:mx-auto flex xl:flex-row flex-col mb-10">
          <div className="mt-1">
            <div>UX Case Study · Healthcare · Mobile App</div>
            <div className="text-3xl pt-4">Smart Queue</div>
            <div className="pt-4 text-[var(--supportingColorGreen)]">
              A mobile-first queue tracker that gives patients their time back —
              and helps clinics run on time
            </div>
            <div className="flex flex-wrap gap-3 text-[var(--background)] pt-6">
              <div className="xl:flex-auto bg-white bg-opacity-10 rounded-xl p-4">
                <p className="text-xs mb-1">Role</p>
                <p className="text-sm font-medium">UX Designer</p>
              </div>
              <div className="xl:flex-auto bg-white bg-opacity-10 rounded-xl p-4">
                <p className="text-xs mb-1">Type</p>
                <p className="text-sm font-medium">
                  Conceptual / Self-Initiated
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-10 pb-10 bg-[var(--topTerminal)] border-t-2 border-b-4 border-[var(--supportingColorBlue)]">
        <Image
          src="/assets/projects/healthCare/patientQueue/patientQueueScreens.png"
          alt="description"
          width={1920}
          height={793}
          className="transition-transform duration-300 hover:scale-102"
        />
      </div>

      <div className="pages">
        <div className="xl:w-[80%] h-auto w-full xl:mx-auto flex flex-col mb-10">
          <div className="mt-12  leading-[32px]">
            <div className="text-sm tracking-[11px] uppercase text-[var(--terminalBlue)]">
              01.
            </div>
            <div className="text-3xl pt-4 pb-4">Where this started</div>
            <div className="text-xl leading-[36px] min-h-[100px] bg-[var(--topTerminal)] p-4 rounded-2xl">
              I took my mother to the hospital. We live 10 minutes away. We
              waited 1.5 hours — sitting in a crowded room with no idea when her
              name would be called, no way to step outside, and no information
              whatsoever.
            </div>
            <div className="text-xl leading-[36px] pt-12">
              This is not an unusual experience. It is how OPD queues work in
              most hospitals. The problem is not the wait — it is the
              uncertainty. Patients cannot leave, cannot rest, cannot plan. They
              become hostages to a system that gives them nothing. I designed
              Smart Queue to fix that
            </div>
          </div>
          <div className="mt-12 cat  leading-[36px] text-xl leading-[36px]">
            <div className="text-sm tracking-[11px] uppercase text-[var(--terminalBlue)]">
              02.
            </div>
            <div className="text-3xl pt-4 pb-4">The real problem</div>
            <div>
              On the surface, the problem looks like &quot;long wait
              times.&quot; But long waits are not the root cause — they are the
              symptom. The actual problem is a complete absence of information
              flow between the clinic and the patient
            </div>
            <div className="mt-6 min-h-[100px] bg-[var(--topTerminal)] p-9 rounded-2xl">
              <div className="pb-4 text-[var(--terminalBlue)]">
                WHAT PATIENTS EXPERIENCE
              </div>
              <div>
                No visibility into where they are in the queue. No idea if the
                doctor is running 10 minutes late or 2 hours late. No way to
                step out for air or a meal. The only option is to sit and wait,
                anxiously.
              </div>
            </div>
            <div className="mt-6 min-h-[100px] bg-[var(--topTerminal)] p-9 rounded-2xl">
              <div className="pb-4 text-[var(--terminalBlue)]">
                WHAT THIS CREATES
              </div>
              <div>
                Because patients fear losing their spot, everyone arrives early
                and stays put. This creates artificial crowding, which increases
                stress, which makes the experience worse for everyone —
                including the clinical staff. It is a self-reinforcing loop
                driven entirely by information scarcity.
              </div>
            </div>
            <div className="mt-6 min-h-[100px] bg-[var(--topTerminal)] p-9 rounded-2xl">
              <div className="pb-4 text-[var(--terminalBlue)]">
                WHAT CLINICS ALSO LOSE
              </div>
              <div>
                When patients arrive late or do not show up, the queue breaks
                for everyone else. Clinics have no real-time mechanism to absorb
                delays or communicate changes. The doctor sits idle. Other
                patients wait longer. No one wins.
              </div>
            </div>
          </div>
          <div className="mt-12 cat  leading-[36px] text-xl">
            <div className="text-sm tracking-[11px] uppercase text-[var(--terminalBlue)]">
              03.
            </div>
            <div className="text-3xl pt-4 pb-4">The solution</div>
            <div className="pt-4 pb-4">
              Smart Queue is a mobile app that gives patients a live, real-time
              view of their position in the OPD queue — combined with travel
              time from their location — so they know exactly when to leave
              home, not just when their appointment is.
            </div>
            <div className="flex xl:flex-row flex-col gap-6 text-[var(--terminalBorder)]">
              <div className="leading-[26px] bg-[var(--supportingColorGreen)] text-2xl p-3 rounded-2xl">
                <span className="font-bold">Find</span> doctor
              </div>
              <div className="leading-[26px] bg-[var(--supportingColorGreen)] text-2xl p-3 rounded-2xl">
                <span className="font-bold">Book</span> appointment
              </div>
              <div className="leading-[26px] bg-[var(--supportingColorGreen)] text-2xl p-3 rounded-2xl">
                <span className="font-bold"> Get </span>token
              </div>
              <div className="leading-[26px] bg-[var(--supportingColorGreen)] text-2xl p-3 rounded-2xl">
                <span className="font-bold"> Track </span> queue live
              </div>
              <div className="leading-[26px] bg-[var(--supportingColorGreen)] text-2xl p-3 rounded-2xl">
                <span className="font-bold">Leave </span> on time
              </div>
              <div className="leading-[26px] bg-[var(--supportingColorGreen)] text-2xl p-3 rounded-2xl">
                <span className="font-bold">Walk </span>in ready
              </div>
            </div>
          </div>
          <div className="mt-12 cat  leading-[36px] text-xl leading-[36px]">
            <div className="text-sm tracking-[11px] uppercase text-[var(--terminalBlue)]">
              04.
            </div>
            <div className="text-3xl pt-4 pb-4">
              Design decisions that matter
            </div>

            <div className="pt-4 pb-4">
              <div className="mt-6 min-h-[100px] bg-[var(--topTerminal)] p-9 rounded-2xl">
                <div className="pb-2 text-sm font-bold text-[var(--supportingColorGreen)]">
                  CORE INSIGHT
                </div>
                <div className="pb-2 font-bold">
                  Queue position as a spatial map, not a number
                </div>
                <div>
                  Telling a patient &quot;you are number 5&quot; creates anxiety
                  without context. Smart Queue shows a live node map —
                  color-coded by patient status: In-Consultation, Checked-In,
                  and Remote. Patients understand the whole system, not just
                  their place in it. When they can see why the wait is long, the
                  anxiety drops significantly.
                </div>
              </div>
              <div className="mt-6 min-h-[100px] bg-[var(--topTerminal)] p-9 rounded-2xl">
                <div className="pb-2 text-sm font-bold text-[var(--supportingColorGreen)]">
                  KEY INNOVATION
                </div>
                <div className="pb-2 font-bold">
                  Wait time + travel time = one actionable signal
                </div>
                <div>
                  Most queue apps tell you how long the wait is. Smart Queue
                  tells you when to leave. By combining the live queue wait with
                  real-time travel time from the patient&apos;s location, the
                  app surfaces a single clear instruction: &quot;Leave by 2:50
                  pm.&quot; No mental math. No second-guessing. One decision
                </div>
              </div>
              <div className="mt-6 min-h-[100px] bg-[var(--topTerminal)] p-9 rounded-2xl">
                <div className="pb-2 text-sm font-bold text-[var(--supportingColorGreen)]">
                  BEHAVIORAL DESIGN
                </div>
                <div className="pb-2 font-bold">
                  Queue view locked until 2 hours before appointment
                </div>
                <div>
                  If patients can see the queue at any time, they will
                  obsessively check it and arrive early anyway. The 2-hour
                  access window is a deliberate behavioral guardrail — it
                  removes the anxiety trigger entirely until the information is
                  actually useful.
                </div>
              </div>
              <div className="mt-6 min-h-[100px] bg-[var(--topTerminal)] p-9 rounded-2xl">
                <div className="pb-2 text-sm font-bold text-[var(--supportingColorGreen)]">
                  CLINICAL SAFETY
                </div>
                <div className="pb-2 font-bold">
                  Emergency toggle with a confirmation step
                </div>
                <div>
                  Patients can flag their visit as an emergency to alert clinic
                  staff. But a single accidental tap should not disrupt a triage
                  desk. A confirmation dialog — &quot;This will alert staff
                  immediately&quot; — adds friction by design. In this case,
                  friction is the feature.
                </div>
              </div>
              <div className="mt-6 min-h-[100px] bg-[var(--topTerminal)] p-9 rounded-2xl">
                <div className="pb-2 text-sm font-bold text-[var(--supportingColorGreen)]">
                  REQUEST DELAY
                </div>
                <div className="pb-2 font-bold">
                  Patients can signal they are running late
                </div>
                <div>
                  Instead of simply not showing up, patients can request a delay
                  or reschedule directly from the app. This gives clinics
                  real-time visibility into queue disruptions and allows them to
                  absorb gaps gracefully — keeping the doctor&apos;s schedule
                  efficient and reducing wait time for everyone else.
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 cat  leading-[36px] text-xl leading-[36px]">
            <div className="text-sm tracking-[11px] uppercase text-[var(--terminalBlue)]">
              05.
            </div>
            <div className="text-3xl pt-4 pb-4">Why this matters</div>
            <div className="pt-4 pb-4">
              The core premise of Smart Queue is simple: if patients know when
              to leave, they stop arriving early. If they stop arriving early,
              waiting rooms stop overcrowding. If clinics can receive delay
              signals in real time, no-shows stop breaking the queue. Each of
              these is a direct, logical consequence of closing the information
              gap — not a feature, a systemic fix.
            </div>
            <div className="pt-4 pb-4 flex xl:flex-row flex-col gap-4">
              <div className="mt-6 min-h-[100px] bg-[var(--topTerminal)] p-9 rounded-2xl">
                <div className="text-2xl text-[var(--supportingColorGreen)]">
                  Reduced crowding
                </div>
                <div>
                  Patients leave home at the right time — not hours early
                </div>
              </div>
              <div className="mt-6 min-h-[100px] bg-[var(--topTerminal)] p-9 rounded-2xl">
                <div className="text-2xl text-[var(--supportingColorGreen)]">
                  Higher satisfaction
                </div>
                <div>
                  Certainty replaces anxiety. Patients feel in control of their
                  time
                </div>
              </div>
              <div className="mt-6 min-h-[100px] bg-[var(--topTerminal)] p-9 rounded-2xl">
                <div className="text-2xl text-[var(--supportingColorGreen)]">
                  Fewer disruptions
                </div>
                <div>
                  Delay requests replace silent no-shows, keeping the queue
                  intact
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 cat  leading-[36px] text-xl leading-[36px]">
            <div className="text-sm tracking-[11px] uppercase text-[var(--terminalBlue)]">
              06.
            </div>
            <div className="text-3xl pt-4 pb-4">Reflection</div>
            <div className="pb-4">
              Smart Queue is a conceptual project, but it is grounded in a real,
              observable problem. The gap it addresses — between what patients
              need to know and what clinics currently communicate — exists in
              hospitals everywhere, particularly across South Asia, the Middle
              East, and other regions where walk-in OPD culture is the norm.
            </div>
            <div className="pb-4">
              The design challenge here was not visual. It was behavioral. Every
              decision — the 2-hour lock, the &quot;Leave by&quot; signal, the
              delay request — was made to change what patients and clinics do,
              not just what they see. That is what makes this a systems problem,
              and why a purely informational solution would not have been
              enough.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OPDQueue;
