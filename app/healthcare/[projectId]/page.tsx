import React from "react";
import healthcare from "../../lib/data/healthcare.json";
import notFound from "../notFound";
import Image from "next/image";
import CredentialingAndEnrollment from "@/app/components/ui/healthcare/CredentialingAndEnrollment";
import OPDQueue from "@/app/components/ui/healthcare/OPDQueue";
import MentalHealthApp from "@/app/components/ui/healthcare/MentalHealthApp";
import Link from "next/link";
import Scheduling from "@/app/components/ui/healthcare/Scheduling";
import Documentation from "@/app/components/ui/healthcare/Documentation";
const page = async ({
  params,
}: {
  params: Promise<{ projectId?: string }>;
}) => {
  const { projectId } = await params;

  const healthcareProjects = healthcare.healthcare.find(
    (proj) => proj.id === projectId,
  );
  if (!healthcareProjects) {
    notFound();
  }

  return (
    <>
      <div className="pages">
        <div className="pl-36">
          <Link
            className="pl-2 pr-2 text-[var(--supportingColorGreen)]"
            href={
              healthcareProjects?.projectType === "Scheduling" ||
              healthcareProjects?.projectType === "mentalHealth" ||
              healthcareProjects?.projectType === "documentation"
                ? "/#projectSlider"
                : "/healthcare"
            }
          >
            &larr; Go back
          </Link>
        </div>
      </div>
      <div className="pages  text-xl leading-[32px]">
        <div className="xl:w-[80%] h-auto w-full xl:mx-auto flex xl:flex-row flex-col mb-10">
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
              <div className="text-4xl pb-6">{healthcareProjects?.title}</div>
              <div>{healthcareProjects?.description}</div>

              <div className="pt-4 font-medium flex gap-10 flex-wrap">
                {healthcareProjects?.descriptionTag
                  ? healthcareProjects?.descriptionTags.map((tag, index) => {
                      return (
                        <div key={index} className="pt-2">
                          <div className="flex gap-4">
                            <span>-</span> <span>{tag}</span>
                          </div>
                        </div>
                      );
                    })
                  : null}
              </div>
            </div>
          </div>
        </div>
      </div>
      {healthcareProjects?.CredentialingAndEnrollment ? (
        <CredentialingAndEnrollment />
      ) : null}
      {healthcareProjects?.mentalHealth ? <MentalHealthApp /> : null}
      {healthcareProjects?.documentation ? <Documentation /> : null}
      {healthcareProjects?.scheduling ? (
        <div>
          <Scheduling />
        </div>
      ) : null}
      {healthcareProjects?.opd ? (
        <div>
          <OPDQueue />
        </div>
      ) : null}
    </>
  );
};

export default page;
