import React from "react";
import healthcare from "../../lib/data/healthcare.json";
import notFound from "../notFound";
import Image from "next/image";
import CredentialingAndEnrollment from "@/app/components/ui/healthcare/CredentialingAndEnrollment";
import OPDQueue from "@/app/components/ui/healthcare/OPDQueue";
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
            </div>
          </div>
        </div>
      </div>
      {healthcareProjects?.CredentialingAndEnrollment ? (
        <CredentialingAndEnrollment />
      ) : null}
      {healthcareProjects?.mentalHealth ? <div>mentalHealth</div> : null}
      {healthcareProjects?.documentation ? <div>documentation</div> : null}
      {healthcareProjects?.scheduling ? <div>scheduling</div> : null}
      {healthcareProjects?.opd ? (
        <div>
          <OPDQueue />
        </div>
      ) : null}

      {healthcareProjects?.comparison ? (
        <div>
          <div className="p-8 w-[94%] mx-auto">
            <div className="p-6 text-2xl">Before</div>
            <Image
              src={healthcareProjects?.before}
              alt="description"
              width={1920}
              height={793}
              className="transition-transform duration-300 hover:scale-102 border-4 rounded-4xl"
            />
          </div>

          <div className="p-8 w-[94%] mx-auto">
            <div className="p-6 text-2xl">After</div>
            <Image
              src={healthcareProjects?.after}
              alt="description"
              width={1920}
              height={793}
              className="transition-transform duration-300 hover:scale-102 border-4 rounded-4xl"
            />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default page;
