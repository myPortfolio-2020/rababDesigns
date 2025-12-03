"use client";
import useScrollToTop from "./components/hooks/useScrollToTop";
import HomeContentHolder from "./components/ui/homeContent/HomeContentHolder";

export default function Home() {
  useScrollToTop();
  return (
    <>
      <HomeContentHolder />
    </>
  );
}
