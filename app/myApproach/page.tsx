import React from "react";

const page = () => {
  return (
    <>
      <div className="resume text-xl  leading-[36px]">
        <div className="text-3xl pt-6 pb-12">My Design Approach</div>
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
            My goal at this stage is to clearly understand what problem we are
            solving, for whom, and why it matters.
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
        <div className="pt-6">
          I work closely with product managers, developers, and stakeholders to
          ensure that solutions are not only user-friendly, but also technically
          feasible and aligned with business goals.
        </div>
        <div className="text-3xl  pt-6">My Design Values</div>
        <ul className="list-disc p-6">
          <li>Clarity over decoration</li>
          <li>Usability over trends</li>
          <li>Systems over one-off screens</li>
          <li>Real user problems over assumptions</li>
        </ul>
      </div>
    </>
  );
};

export default page;
