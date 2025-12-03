"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function useScrollToTop() {
  const pathName = usePathname();
  useEffect(() => {
    // Scroll to top when route changes
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathName]);
}
