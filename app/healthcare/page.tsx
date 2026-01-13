import React from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Rcm from "../components/ui/healthcare/Rcm";
import Dashboards from "../components/ui/healthcare/Dashboards";
import Scheduling from "../components/ui/healthcare/Scheduling";
import Pms from "../components/ui/healthcare/Pms";
import Ehr from "../components/ui/healthcare/Ehr";
import Link from "next/link";

const page = () => {
  const tabStyles =
    "data-[state=active]:bg-[var(--terminalBlue)] data-[state=active]:text-primary-foreground text-[var(--background)] focus-visible:ring-none focus-visible:ring-none focus-visible:outline-none transition-all";

  return (
    <>
      <div className="pages">
        <div className="flex">
          <div className="min-w-[45px] h-[45px]  max-h-[45px] rounded-full bg-[var(--supportingColorGreen)] flex items-center justify-center mb-10">
            <Image
              src="/assets/goArrow.png"
              alt="description"
              width={43}
              height={43}
            />
          </div>
          <div className="ml-10">
            <div className="text-4xl pb-6">
              Human-Centered Healthcare Interfaces
            </div>
            <div className="pb-6">
              <div>
                I concentrate on in creating intuitive, reliable, and
                workflow‑driven interfaces for healthcare teams. My work spans
                EHR, EMR, PMS, RCM, scheduling, and clinical dashboards, with a
                strong focus on reducing cognitive load, improving accuracy, and
                supporting real‑world clinical decision‑making. I design with a
                deep understanding of multi‑role environments — from providers
                and medical assistants to billers, front‑desk staff, and
                administrators — ensuring every workflow is clear, efficient,
                and compliant.
              </div>

              <div className="font-bold pt-4 pb-4">
                <span className="text-[var(--terminalBlue)]">
                  Featured product:
                </span>
                <Link
                  href="/featuredProject"
                  className="bg-[var(--lightBg)] p-1 rounded ml-2 text-[var(--terminalBlue)]"
                >
                  {" "}
                  OPD Queue Management System
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="xl:ml-14 xl:mr-14 ml-0 mr-0">
          <Tabs defaultValue="rcm" activationMode="automatic">
            <TabsList className="mx-auto xl:w-[80%] w-[99%]">
              <TabsTrigger value="dashboards" className={tabStyles}>
                Dashboard
              </TabsTrigger>
              <TabsTrigger value="scheduling" className={tabStyles}>
                Scheduling
              </TabsTrigger>
              <TabsTrigger value="ehr" className={tabStyles}>
                EHR / EMR
              </TabsTrigger>
              <TabsTrigger value="pms" className={tabStyles}>
                PMS
              </TabsTrigger>
              <TabsTrigger value="rcm" className={tabStyles}>
                RCM
              </TabsTrigger>
            </TabsList>

            <TabsContent value="ehr">
              <Ehr />
            </TabsContent>
            <TabsContent value="pms">
              <Pms />
            </TabsContent>
            <TabsContent value="rcm">
              <Rcm />
            </TabsContent>
            <TabsContent value="dashboards">
              <Dashboards />
            </TabsContent>
            <TabsContent value="scheduling">
              <Scheduling />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default page;
