"use client";
import Link from "next/link";
import React from "react";
import { routes } from "@/app/constants/routes";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname(); // current path
  // in root layout or a custom effect

  const handleClick = (href: string, e: React.MouseEvent) => {
    if (href === "/" && pathname === "/") {
      e.preventDefault(); // prevent normal navigation
      window.scrollTo({ top: 0, behavior: "smooth" }); // scroll to top
    }
  };

  return (
    <>
      <div className="sticky top-0 w-full z-50 headerBg xl:h-[120px] h-[170px]">
        <div className="flex xl:flex-row flex-col xl:justify-center xl:items-center xl:gap-x-6 h-[74px] tracking-[1px]">
          {routes.map((item) => {
            const isActive = pathname === item.href;
            return (
              <div
                key={item.id}
                className="xl:border-0 border-b-1 border-b-[var(--terminalBlue)] xl:pl-0 pl-6"
              >
                <div>
                  <Link
                    scroll={true}
                    href={`${item.href}`}
                    className={`text-[19px]  p-4 ${
                      isActive
                        ? "text-[var(--terminalBlue)]"
                        : "text-[var(--background)]"
                    }`}
                    onClick={(e) => handleClick(item.href, e)}
                  >
                    {item.title}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Header;
