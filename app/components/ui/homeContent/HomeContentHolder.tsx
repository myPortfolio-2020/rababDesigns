import React from "react";
import HomeContent from "./HomeContent";
import StickyCards from "./StickyCards";
import CardPattern from "./CardPattern";
import WorkShades from "./WorkShades";
import Interests from "./Interests";

const HomeContentHolder = () => {
  return (
    <>
      <HomeContent />
      <WorkShades />
      <CardPattern />
      {/* <Interests /> */}
    </>
  );
};

export default HomeContentHolder;
