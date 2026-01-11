import React from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
            <div className="pb-10">
              I concentrate on in creating intuitive, reliable, and
              workflow‑driven interfaces for healthcare teams. My work spans
              EHR, EMR, PMS, RCM, scheduling, and clinical dashboards, with a
              strong focus on reducing cognitive load, improving accuracy, and
              supporting real‑world clinical decision‑making. I design with a
              deep understanding of multi‑role environments — from providers and
              medical assistants to billers, front‑desk staff, and
              administrators — ensuring every workflow is clear, efficient, and
              compliant.
            </div>
          </div>
        </div>
        <Tabs defaultValue="ehr" activationMode="automatic">
          <TabsList className="mx-auto w-fit">
            <TabsTrigger value="ehr" className={tabStyles}>
              EHR / EMR
            </TabsTrigger>
            <TabsTrigger value="pms" className={tabStyles}>
              PMS
            </TabsTrigger>
            <TabsTrigger value="rcm" className={tabStyles}>
              RCM
            </TabsTrigger>
            <TabsTrigger value="dashboards" className={tabStyles}>
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="scheduling" className={tabStyles}>
              Scheduling
            </TabsTrigger>
          </TabsList>
          <TabsContent value="ehr">ehr</TabsContent>
          <TabsContent value="pms">PMS</TabsContent>
          <TabsContent value="rcm">RCM</TabsContent>
          <TabsContent value="dashboards">Dashboard</TabsContent>
          <TabsContent value="scheduling">Scheduling</TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default page;
