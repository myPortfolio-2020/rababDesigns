"use client";
import Link from "next/link";
import React from "react";
import { routes } from "@/app/constants/routes";
import { usePathname, useRouter } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = (href: string, e: React.MouseEvent) => {
    if (href === "/" && pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    e.preventDefault();
    router.push(href);
  };

  return (
    <>
      <div className="sticky top-0 w-full z-50 headerBg xl:h-[120px] h-[192px]">
        <div className="flex xl:flex-row flex-col xl:justify-center xl:items-center xl:gap-x-9 h-[74px] tracking-[1px]">
          {routes.map((item) => {
            // const isActive = pathname.startsWith(item.href);
            // const isActive = pathname === item.href;
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href ||
                  pathname.startsWith(item.href + "/");

            return (
              <div
                key={item.id}
                className="xl:border-0 border-b-1 border-b-[var(--terminalBlue)] xl:pl-0 pl-3"
              >
                <div className="pb-0">
                  <Link
                    scroll={true}
                    href={item.href}
                    prefetch={true}
                    className={`xl:text-[22px] text-[16px] ${
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
