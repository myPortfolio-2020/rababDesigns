"use client";

import React from "react";
import PageTransition from "./components/animation/PageTransition";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen overflow-hidden">
      <PageTransition>{children}</PageTransition>
    </div>
  );
}
