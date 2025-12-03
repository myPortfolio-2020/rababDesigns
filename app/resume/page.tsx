import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Resume - Prototype of Rabab",
  description: "Rabab's professional resume showcasing skills and experience.",
};

const resume = () => {
  return (
    <>
      <div className="pages c4">
        <h1>Resume</h1>
      </div>
    </>
  );
};

export default resume;
