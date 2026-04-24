import React from "react";
import Image from "next/image";
import SepratorLine from "../SepratorLine";

const MentalHealthApp = () => {
  return (
    <>
      <div className="pages text-xl leading-[32px]">
        <div className="w-[94%] xl:w-[80%] mx-auto">
          <div className="mb-1">
            <div className="text-xl font-bold pb-16">
              UX Case Study · PixelPerfect · Bootcamp Project
            </div>
            <div className="text-4xl">I Might Be</div>
            <SepratorLine />

            <div className="mt-12">
              <div className="text-sm tracking-[11px] uppercase pt-8 pb-0">
                <div className="text-3xl pb-2">01</div>
                <div className="text-[var(--terminalBlue)] pb-4">
                  Project Overview
                </div>
              </div>
              <div className="pb-8">
                — Helping those who feel confused or overwhelmed understand
                themselves better, at their own pace.
              </div>
              <div className="flex xl:flex-row flex-col justify-between flex-wrap gap-3 text-[var(--background)]">
                <div className="xl:flex-auto bg-white bg-opacity-10 rounded-xl p-4">
                  <p className="text-xs mb-1">Role</p>
                  <p className="text-sm font-medium">Lead UX Designer</p>
                </div>
                <div className="xl:flex-auto bg-white bg-opacity-10 rounded-xl p-4">
                  <p className="text-xs mb-1">Team</p>
                  <p className="text-sm font-medium">PixelPerfect</p>
                </div>
                <div className="xl:flex-auto bg-white bg-opacity-10 rounded-xl p-4">
                  <p className="text-xs mb-1">Duration</p>
                  <p className="text-sm font-medium">3+ months</p>
                </div>
                <div className="xl:flex-auto bg-white bg-opacity-10 rounded-xl p-4">
                  <p className="text-xs mb-1">Platform</p>
                  <p className="text-sm font-medium">iOS & Android</p>
                </div>
                <div className="xl:flex-auto bg-white bg-opacity-10 rounded-xl p-4">
                  <p className="text-xs mb-1">Type</p>
                  <p className="text-sm font-medium">Bootcamp project</p>
                </div>
              </div>
              <div className="pb-8 pt-8">
                <div className="font-bold  pb-4">Tools used:</div>
                <div className="flex gap-9  text-[var(--terminalBlue)]">
                  <div>Figma</div>
                  <div>FigJam</div>
                  <div>Adobe Illustrator</div>
                  <div>ChatGPT</div>
                </div>
              </div>
              <div className="pb-8 pt-8">
                <div className="font-bold pb-4">User roles designed:</div>
                <div className="flex xl:flex-row flex-col flex-wrap gap-6">
                  <div className="flex-1 flex flex-col justify-center min-h-[100px] bg-[var(--topTerminal)] p-4 rounded-2xl">
                    <div className="text-sm font-bold text-[var(--supportingColorGreen)]">
                      Main User
                    </div>
                    <div className="text-sm">
                      Women exploring their identity & traits
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col justify-center min-h-[100px] bg-[var(--topTerminal)] p-4 rounded-2xl">
                    <div className="text-sm font-bold text-[var(--supportingColorGreen)]">
                      Doctor / Therapist
                    </div>
                    <div className="text-sm">
                      Optional consultations, not mandatory
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col justify-center min-h-[100px] bg-[var(--topTerminal)] p-4 rounded-2xl">
                    <div className="text-sm font-bold text-[var(--supportingColorGreen)]">
                      Partner
                    </div>
                    <div className="text-sm">
                      Supports the user&apos;s discovery journey
                    </div>
                  </div>
                </div>
              </div>
              <div className="pb-8 pt-8">
                <div className="font-bold pb-4">Deliverables</div>
                <div className="flex xl:flex-row flex-col gap-3 text-sm">
                  <div className="bg-[var(--lightBg)] pt-1 pb-1 pl-6 pr-6 rounded-3xl text-[var(--background)]">
                    Logo & brand identity
                  </div>
                  <div className="bg-[var(--lightBg)] pt-1 pb-1 pl-6 pr-6 rounded-3xl text-[var(--background)]">
                    UX research
                  </div>
                  <div className="bg-[var(--lightBg)] pt-1 pb-1 pl-6 pr-6 rounded-3xl text-[var(--background)]">
                    Full app flow & IA Wireframes
                  </div>
                  <div className="bg-[var(--lightBg)] pt-1 pb-1 pl-6 pr-6 rounded-3xl text-[var(--background)]">
                    Final UI design
                  </div>
                  <div className="bg-[var(--lightBg)] pt-1 pb-1 pl-6 pr-6 rounded-3xl text-[var(--background)]">
                    AI-powered assessment
                  </div>
                </div>
              </div>
            </div>
            {/* new section ------------------------------------------------------- */}
            <SepratorLine />
            <div className="mt-16">
              <div className="text-sm tracking-[11px] uppercase pt-8 pb-4">
                <div className="text-3xl pb-2">02</div>
                <div className="text-[var(--terminalBlue)] bp-4">
                  The Problem
                </div>
              </div>
              <div>
                Many women spend years feeling different and exhausted — without
                ever knowing why. Key insight: Autism in women is vastly
                underrecognized. Most resources are built around children or
                clinical language, leaving adult women with nowhere safe to
                start. No existing app combines self-discovery, community
                support, and optional access to specialists — in one warm,
                non-clinical experience.
              </div>
              <div>
                <div className="pb-8 pt-8">Three core pain points</div>
                <div className="pb-8 pt-8">
                  <div className="flex xl:flex-row flex-col flex-wrap gap-6">
                    <div className="flex-1 flex flex-col justify-center min-h-[100px] bg-[var(--topTerminal)] p-4 rounded-2xl">
                      <div className="text-sm font-bold text-[var(--supportingColorGreen)]">
                        They don&apos;t know where to start
                      </div>
                      <div className="text-sm">
                        Most women don&apos;t know who to ask, what questions to
                        answer, or what their experiences even mean.
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col justify-center min-h-[100px] bg-[var(--topTerminal)] p-4 rounded-2xl">
                      <div className="text-sm font-bold text-[var(--supportingColorGreen)]">
                        Existing resources feel clinical
                      </div>
                      <div className="text-sm">
                        Information is overly clinical, focused on children, or
                        designed to diagnose — not to support or empower.
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col justify-center min-h-[100px] bg-[var(--topTerminal)] p-4 rounded-2xl">
                      <div className="text-sm font-bold text-[var(--supportingColorGreen)]">
                        They feel alone and misunderstood
                      </div>
                      <div className="text-sm">
                        Many feel isolated, confused, and overwhelmed — with no
                        community that truly reflects their experience.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pb-8 pt-8">
                  <div className="pb-4 text-2xl">
                    Real barriers discovered in research
                  </div>
                  <div className="font-bold">Late or missed awareness</div>
                  <div className="text-sm">
                    Many women aren&apos;t aware earlier — by 30 they want to
                    understand their experiences but have no clear path.
                  </div>
                  <div className="font-bold pt-4">
                    Financial & access barriers
                  </div>
                  <div className="text-sm">
                    The consultation process is confusing and expensive.
                    Waitlists run 6–12 months. Insurance coverage is unclear.
                  </div>
                  <div className="font-bold pt-4">Trust & privacy fears</div>
                  <div className="text-sm">
                    If a user doesn&apos;t feel their data is safe, they
                    won&apos;t be honest — making any self-discovery tool
                    ineffective.
                  </div>
                  <div className="font-bold pt-4">No app does it all</div>
                  <div className="text-sm">
                    No existing app combines self-discovery, community, and
                    specialist access in one warm experience for women.
                  </div>
                </div>
              </div>
            </div>
            {/* new section ------------------------------------------------------- */}
            <SepratorLine />
            <div className="mt-16">
              <div className="text-sm tracking-[11px] uppercase pt-8 pb-4">
                <div className="text-3xl  pb-2">03</div>
                <div className="text-[var(--terminalBlue)]">Research</div>
              </div>
              <div>
                Before designing a single screen, we spent time understanding
                the space deeply — reading existing research, exploring
                validated clinical tools, and speaking directly with women in
                our target group.
              </div>
              <div>
                <div className="pb-8 pt-8">
                  <div className="text-2xl">Our research process</div>
                  <div className="pt-8 font-bold">1 - Define the focus</div>
                  <div className="text-sm">
                    We got clear on exactly who we were building for — women
                    30+, self-suspecting or late-diagnosed, facing emotional
                    stress and financial barriers.
                  </div>
                  <div className="pt-8 font-bold">
                    2 - Secondary (desk) research
                  </div>
                  <div className="text-sm">
                    We researched how autism presents differently in women, why
                    it gets missed, and what validated screening tools exist. We
                    also studied burnout, masking, and sensory sensitivity.
                  </div>
                  <div className="pt-8 font-bold">
                    3 - Conversations with women
                  </div>
                  <div className="text-sm">
                    We spoke informally with a small group of women in our
                    target group — asking about their journey, struggles, and
                    what they&apos;d want from an app like this.
                  </div>
                  <div className="pt-8 font-bold">4 - Feature comparison</div>
                  <div className="text-sm">
                    We mapped features across existing mental health apps to
                    understand the gaps — no app combined self-discovery,
                    community, and specialist access.
                  </div>
                  <div className="pt-8 font-bold">
                    5 - Synthesize & define features
                  </div>
                  <div className="text-sm">
                    We identified recurring patterns, prioritized the most
                    urgent needs, and used those insights to define the
                    app&apos;s core features.
                  </div>
                </div>
                <div className="pb-8 pt-8">
                  <div className="text-2xl">Validated tools we studied</div>
                  <div className="mt-4 bg-[var(--topTerminal)] p-4 rounded-2xl">
                    <div className="text-sm font-bold text-[var(--supportingColorGreen)]">
                      AQ — Autism Spectrum Quotient
                    </div>
                    <div className="text-sm">
                      Developed by Simon Baron-Cohen. Measures social comfort,
                      detail focus, and preference for routine.
                    </div>
                  </div>
                  <div className="mt-4 bg-[var(--topTerminal)] p-4 rounded-2xl">
                    <div className="text-sm font-bold text-[var(--supportingColorGreen)]">
                      RAADS-R
                    </div>
                    <div className="text-sm">
                      Specifically designed for adults. Covers social, sensory,
                      and internal experiences including masking behaviors.
                    </div>
                  </div>
                  <div className="mt-4 bg-[var(--topTerminal)] p-4 rounded-2xl">
                    <div className="text-sm font-bold text-[var(--supportingColorGreen)]">
                      CAT-Q
                    </div>
                    <div className="text-sm">
                      Focuses on camouflaging and masking — particularly
                      relevant for women who hide autistic traits to fit in.
                    </div>
                  </div>
                </div>
                <div className="pb-8 pt-8 text-[17px]">
                  <div className="text-2xl pb-6">Key findings</div>
                  <div className="pt-2 border-b-1 border-b-[var(--lineStroke)] pb-2 ">
                    <span className="mr-6">→</span> Women often describe their
                    experience through metaphors — clinical language
                    doesn&apos;t fit how they feel inside.
                  </div>
                  <div className="pt-2 border-b-1 border-b-[var(--lineStroke)] pb-2 ">
                    <span className="mr-6">→</span> Work stress, social
                    interactions, and life transitions are the biggest emotional
                    triggers — not isolated incidents.
                  </div>
                  <div className="pt-2 border-b-1 border-b-[var(--lineStroke)] pb-2 ">
                    <span className="mr-6">→</span> Burnout builds slowly — the
                    key is noticing changes from a personal baseline, not a
                    clinical threshold.
                  </div>
                  <div className="pt-2 border-b-1 border-b-[var(--lineStroke)] pb-2 ">
                    <span className="mr-6">→</span> Trust is everything — if
                    women don&apos;t feel safe, they won&apos;t be honest,
                    making any self-discovery tool ineffective.
                  </div>
                  <div className="pt-2 pb-2">
                    <span className="mr-6">→</span> No existing app combines
                    self-discovery, emotional tools, specialist access, and
                    community for adult women.
                  </div>
                </div>
              </div>
            </div>
            {/* new section ------------------------------------------------------- */}
            <SepratorLine />
            <div className="mt-16">
              <div className="text-sm tracking-[11px] uppercase pt-8 pb-4">
                <div className="text-3xl  pb-2">04</div>
                <div className="text-[var(--terminalBlue)]">
                  Personas & User Goals
                </div>
              </div>
              <div>
                Based on our research, we defined three distinct user roles —
                each with different needs, goals, and entry points into the app.
              </div>
              <div>
                <div className="border-1 mt-12 rounded-3xl border-[var(--lineStroke)] p-16">
                  <div className="text-2xl font-bold text-[var(--foreground)]">
                    Sarah, 34 — The Self-Suspect
                  </div>
                  <div className="text-sm text-[var(--supportingColorGreen)]">
                    Marketing Manager · Chicago, IL Main User · Completed
                  </div>
                  <div className="pt-8">
                    Sarah has always felt different but couldn&apos;t explain
                    why. After seeing a TikTok about autism in women, she began
                    wondering if she might be autistic. She struggles with
                    anxiety, social exhaustion, and sensory overwhelm — but has
                    never been diagnosed.
                  </div>

                  <div className="flex xl:flex-row justify-between flex-col gap-4 mt-12">
                    <div className="flex-1 flex flex-col justify-center min-h-[100px] bg-[var(--topTerminal)] p-4 rounded-2xl">
                      <div className="text-sm font-bold text-[var(--supportingColorGreen)]">
                        Goals
                      </div>
                      <div className="text-sm">
                        <div className="pb-2">• Understand herself better</div>
                        <div className="pb-2">
                          • Explore whether she may be autistic
                        </div>
                        <div className="pb-2">
                          • Connect with others who relate
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col justify-center min-h-[100px] bg-[var(--topTerminal)] p-4 rounded-2xl">
                      <div className="text-sm font-bold text-[var(--supportingColorGreen)]">
                        Frustrations
                      </div>
                      <div className="text-sm">
                        <div className="pb-2">
                          • Most resources focus on children
                        </div>
                        <div className="pb-2">
                          • Information feels overly clinical
                        </div>
                        <div className="pb-2">
                          • Fear of not being taken seriously
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col justify-center min-h-[100px] bg-[var(--topTerminal)] p-4 rounded-2xl">
                      <div className="text-sm font-bold text-[var(--supportingColorGreen)]">
                        Needs from app
                      </div>
                      <div className="text-sm">
                        <div className="pb-2">• Warm self-assessment</div>
                        <div className="pb-2">• Relatable community</div>
                        <div className="pb-2">• Plain-language autism info</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[var(--topTerminal03)] border-1 mt-12  rounded-3xl border-[var(--lineStroke)] p-16">
                  <div className="text-2xl font-bold text-[var(--foreground)]">
                    Priya, 38 — The Diagnosis Seeker
                  </div>
                  <div className="text-sm text-[var(--supportingColorGreen)]">
                    Teacher · Austin, TX Main User · Completed
                  </div>
                  <div className="pt-8">
                    Priya believes she&apos;s autistic after years of personal
                    research. She wants a formal consultation to access
                    accommodations and therapy. She has insurance but feels
                    overwhelmed trying to understand her coverage and find the
                    right specialist.
                  </div>

                  <div className="flex xl:flex-row justify-between flex-col gap-4 mt-12">
                    <div className="flex-1 flex flex-col justify-center min-h-[100px] bg-[var(--topTerminal)] p-4 rounded-2xl">
                      <div className="text-sm font-bold text-[var(--supportingColorGreen)]">
                        Goals
                      </div>
                      <div className="text-sm">
                        <div className="pb-2">
                          • Find an affordable specialist
                        </div>
                        <div className="pb-2">
                          • Understand insurance coverage
                        </div>
                        <div className="pb-2">• Get step-by-step guidance</div>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col justify-center min-h-[100px] bg-[var(--topTerminal)] p-4 rounded-2xl">
                      <div className="text-sm font-bold text-[var(--supportingColorGreen)]">
                        Frustrations
                      </div>
                      <div className="text-sm">
                        <div className="pb-2">
                          • Confusing & expensive process
                        </div>
                        <div className="pb-2">
                          • Long waitlists (6–12 months)
                        </div>
                        <div className="pb-2">
                          • Inconsistent cost information
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col justify-center min-h-[100px] bg-[var(--topTerminal)] p-4 rounded-2xl">
                      <div className="text-sm font-bold text-[var(--supportingColorGreen)]">
                        Needs from app
                      </div>
                      <div className="text-sm">
                        <div className="pb-2">• Insurance navigation tool</div>
                        <div className="pb-2">• Specialist database</div>
                        <div className="pb-2">• Diagnosis guidance</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-1 mt-12  rounded-3xl border-[var(--lineStroke)] p-16">
                  <div className="text-2xl font-bold text-[var(--foreground)]">
                    Dr. Karan — The Specialist
                  </div>
                  <div className="text-sm text-[var(--supportingColorGreen)]">
                    Therapist · Verified HIPAA entity Doctor Role · Completed
                  </div>
                  <div className="pt-8">
                    Dr. Karan is a licensed therapist specializing in autistic
                    adults. He joins the platform to offer consultations, manage
                    his availability, and connect with women who are ready to
                    seek professional support — on their own terms.
                  </div>

                  <div className="flex xl:flex-row justify-between flex-col gap-4 mt-12">
                    <div className="flex-1 flex flex-col justify-center min-h-[100px] bg-[var(--topTerminal)] p-4 rounded-2xl">
                      <div className="text-sm font-bold text-[var(--supportingColorGreen)]">
                        Goals
                      </div>
                      <div className="text-sm">
                        <div className="pb-2">
                          • Reach women who need support
                        </div>
                        <div className="pb-2">• Manage appointments</div>
                        <div className="pb-2">• Communicate securely</div>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col justify-center min-h-[100px] bg-[var(--topTerminal)] p-4 rounded-2xl">
                      <div className="text-sm font-bold text-[var(--supportingColorGreen)]">
                        Frustrations
                      </div>
                      <div className="text-sm">
                        <div className="pb-2">• Patients come unprepared</div>
                        <div className="pb-2">
                          • Hard to reach right audience
                        </div>
                        <div className="pb-2">• HIPAA adds friction</div>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col justify-center min-h-[100px] bg-[var(--topTerminal)] p-4 rounded-2xl">
                      <div className="text-sm font-bold text-[var(--supportingColorGreen)]">
                        Needs from app
                      </div>
                      <div className="text-sm">
                        <div className="pb-2">• Verified secure profile</div>
                        <div className="pb-2">• Availability management</div>
                        <div className="pb-2">• Secure patient messaging</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* new section ------------------------------------------------------- */}
            <SepratorLine />
            <div className="mt-16">
              <div className="text-sm tracking-[11px] uppercase pt-8 pb-4">
                <div className="text-3xl  pb-2">05</div>
                <div className="text-[var(--terminalBlue)]">
                  Information Architecture & User Flows
                </div>
              </div>
              <div>
                Before wireframing any screens, we mapped the full structure of
                the app and defined how each user role would move through it.
              </div>
              <div>
                <div className="mt-4 bg-[var(--topTerminal)] p-4 rounded-2xl">
                  <div className="text-sm font-bold text-[var(--supportingColorGreen)]">
                    Key design decision — anonymous first.
                  </div>
                  <div className="text-sm">
                    We deliberately chose not to force sign-up at the start. If
                    a user doesn&apos;t feel their data is safe, they won&apos;t
                    be honest. Users can explore anonymously, and registration
                    is only prompted when they want to save results. This aligns
                    with HIPAA principles.
                  </div>
                </div>
                <div className="pt-8 font-bold">App structure</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[var(--topTerminal)] border-t-2 border-b-4 border-[var(--supportingColorBlue)]">
        <div className="flex xl:flex-row flex-col pt-6 items-center">
          <div className="w-full xl:w-2/5">
            <div className="p-18">
              <div className="pt-8 pb-2 font-bold text-[var(--supportingColorGreen)]">
                Entry point
              </div>
              <div className="pb-2 font-medium">
                Splash screen &#8594; Select your role
              </div>
              <div className="pt-8  pb-2 font-bold text-[var(--supportingColorGreen)]">
                Role 1 — Exploring for myself
              </div>
              <div className="pb-2 font-medium">
                Self-discovery questions &#8594; Optional registration &#8594;
                Personalized summary &#8594; Should I get a consultation?
                &#8594; Find a doctor
              </div>
              <div className="pt-8  pb-2 font-bold text-[var(--supportingColorGreen)]">
                Role 2 — Partner or friend
              </div>
              <div className="pb-2 font-medium">
                Educational content &#8594; Register to bookmark or join
                community
              </div>
              <div className="pt-8  pb-2 font-bold text-[var(--supportingColorGreen)]">
                Role 3 — Therapist or professional
              </div>
              <div className="pb-2 font-medium">
                Immediate registration &#8594; HIPAA verification &#8594;
                Professional dashboard
              </div>
            </div>
          </div>
          <div className="w-full xl:w-3/5 p-6">
            <Image
              src="/assets/projects/collection/mentalHealth/metalHealthScreen02.png"
              alt="description"
              width={868}
              height={848}
              className="transition-transform duration-300 hover:scale-102"
            />
          </div>
        </div>
        <div className="pages">
          <div className="pb-6 text-2xl">Two user flow scenarios</div>
          <div className="flex xl:flex-row flex-col">
            <div className="w-full xl:w-1/2 p-4">
              <div className="w-full">
                <div className="font-bold">Scenario A</div>
                <div className="font-bold text-[var(--terminalBlue)]">
                  Explore before sign up
                </div>
                <div>
                  She&apos;s curious but cautious. Wants to try the questions
                  before committing to an account.
                </div>

                <div className="pt-4"> 1 Splash → Role selection </div>
                <div> 2 Self-discovery questions (anonymous)</div>
                <div> 3 Summary → prompted to register to save </div>
                <div> 4 Explore community & tools</div>
              </div>
            </div>
            <div className="w-full xl:w-1/2 p-4">
              <div className=" w-full">
                <div className="font-bold">Scenario B</div>
                <div className="font-bold text-[var(--terminalBlue)]">
                  Sign up first
                </div>
                <div>
                  She&apos;s ready to commit. Creates an account first, then
                  moves through the full experience.
                </div>
                <div className="pt-4">1 Splash → Role selection → Register</div>
                <div>2 Self-discovery questions (results saved)</div>
                <div>3 Personalized home with full summary</div>
                <div>4 Should I get a consultation? → Find doctor</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* new section 6------------------------------------------------------- */}
      <div className="pages">
        <SepratorLine />
        <div className="mt-16">
          <div className="text-sm tracking-[11px] uppercase pt-8 pb-4">
            <div className="text-3xl  pb-2">06</div>
            <div className="text-[var(--terminalBlue)]">Wireframes</div>
          </div>
          <div className="pt-4">
            With the structure defined, we moved into low-fidelity wireframes —
            focusing purely on layout, content hierarchy, and user flow before
            any visual decisions.
          </div>
          <div className="pt-4">
            <span className="font-bold">Why wireframes first? </span>
            Wireframes allowed us to focus purely on structure and logic, not
            aesthetics. Every screen was about one question: does this flow feel
            natural and pressure-free?
          </div>
        </div>
      </div>
      <div className="bg-[var(--topTerminal)] border-t-2 border-b-4 border-[var(--supportingColorBlue)]">
        <div className="p-4">
          <Image
            src="/assets/projects/collection/mentalHealth/mainUserKeyWireframeScreens.png"
            alt="description"
            width={1920}
            height={848}
            className="transition-transform duration-300 hover:scale-102"
          />
        </div>
      </div>
      {/* new section 7 ------------------------------------------------------- */}
      <div className="pages text-xl leading-[32px]">
        <div className="w-[94%] xl:w-[80%] mx-auto">
          <SepratorLine />
          <div className="mt-16">
            <div className="text-sm tracking-[11px] uppercase pt-8 pb-4">
              <div className="text-3xl  pb-2">07</div>
              <div className="text-[var(--terminalBlue)]">asd</div>
            </div>
            <div>
              <div className="pb-8 pt-8">das</div>
              <div className="pb-8 pt-8">das</div>
              <div className="pb-8 pt-8">das</div>
            </div>
          </div>
        </div>
      </div>

      {/* new section 8------------------------------------------------------- */}
      <SepratorLine />
      <div className="mt-16">
        <div className="text-sm tracking-[11px] uppercase pt-8 pb-4">
          <div className="text-3xl  pb-2">08</div>
          <div className="text-[var(--terminalBlue)]">asd</div>
        </div>
        <div>
          <div className="pb-8 pt-8">das</div>
          <div className="pb-8 pt-8">das</div>
          <div className="pb-8 pt-8">das</div>
        </div>
      </div>
      {/* new section ------------------------------------------------------- */}
      <SepratorLine />
      <div className="mt-16">
        <div className="text-sm tracking-[11px] uppercase pt-8 pb-4">
          <div className="text-3xl  pb-2">09</div>
          <div className="text-[var(--terminalBlue)]">asd</div>
        </div>
        <div>
          <div className="pb-8 pt-8">das</div>
          <div className="pb-8 pt-8">das</div>
          <div className="pb-8 pt-8">das</div>
        </div>
      </div>
      {/* new section ------------------------------------------------------- */}
      <SepratorLine />
      <div className="mt-16">
        <div className="text-sm tracking-[11px] uppercase pt-8 pb-4">
          <div className="text-3xl  pb-2">10</div>
          <div className="text-[var(--terminalBlue)]">asd</div>
        </div>
        <div>
          <div className="pb-8 pt-8">das</div>
          <div className="pb-8 pt-8">das</div>
          <div className="pb-8 pt-8">das</div>
        </div>
      </div>
      {/* new section ------------------------------------------------------- */}
      <SepratorLine />
      <div className="mt-16">
        <div className="text-sm tracking-[11px] uppercase pt-8 pb-4">
          <div className="text-3xl  pb-2">11</div>
          <div className="text-[var(--terminalBlue)]">asd</div>
        </div>
        <div>
          <div className="pb-8 pt-8">das</div>
          <div className="pb-8 pt-8">das</div>
          <div className="pb-8 pt-8">das</div>
        </div>
      </div>
    </>
  );
};

export default MentalHealthApp;
