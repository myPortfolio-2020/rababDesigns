import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import General from "../components/ui/healthcare/approach/General";
import HealthcareApproach from "../components/ui/healthcare/approach/HealthcareApproach";

const tabStyles =
  "data-[state=active]:bg-[var(--terminalBlue)] data-[state=active]:text-primary-foreground text-[var(--background)] focus-visible:ring-none focus-visible:ring-none focus-visible:outline-none transition-all xl:border-0 border-1 border-[var(--terminalBlue)] overflow-visible text-[18px]";

const page = () => {
  return (
    <>
      <div className="resume text-xl  leading-[36px]">
        <div className="text-3xl pt-6 pb-12">My Design Approach</div>
        <Tabs defaultValue="general">
          <TabsList className="w-[400px] mb-12">
            <TabsTrigger value="general" className={tabStyles}>
              General
            </TabsTrigger>
            <TabsTrigger value="healthcare" className={tabStyles}>
              Healthcare
            </TabsTrigger>
          </TabsList>
          <TabsContent value="general">
            <General />
          </TabsContent>
          <TabsContent value="healthcare">
            <HealthcareApproach />
          </TabsContent>
        </Tabs>
        {/* <div className="text-5xl">Add system Design</div> */}
      </div>
    </>
  );
};

export default page;
