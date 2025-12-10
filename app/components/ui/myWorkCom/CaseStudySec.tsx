"use client";
import React, { useEffect, useRef } from "react";
import { workList } from "../../animation/wordList";

const CaseStudySec = ({ children }: { children: React.ReactNode }) => {
  const aniRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (aniRef.current) {
      workList(aniRef.current as HTMLElement);
    }
  }, []);
  return <div ref={aniRef}>{children}</div>;
};

export default CaseStudySec;
