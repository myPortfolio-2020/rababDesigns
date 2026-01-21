import React from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const OPDQueue = () => {
  return (
    <>
      <div className="pages">
        <div className="pb-4">
          <div className="text-3xl">Featured Project</div>
          <div className="text-xl p-4">
            This is a{" "}
            <span className="text-[var(--terminalBlue)]">
              conceptual project,
            </span>{" "}
            but grounded in real OPD workflows and healthcare UX constraints.
          </div>
          <div className="flex xl:flex-row flex-col">
            <div className="xl:w-1/5 w-full">
              <div className="mt-2 pl-3">
                <div className="text-xl leading-[36px] pt-6">The Problem</div>
                <div className="text-sm leading-[26px] pt-3">
                  Patients face high anxiety and &quot;time-loss&quot; in
                  crowded clinic waiting rooms due to unpredictable doctor
                  schedules.
                </div>
                <div className="text-xl leading-[36px] pt-6">The Solution</div>
                <div className="text-sm leading-[26px] pt-3">
                  A mobile-first queue tracker that provides a Live Token
                  Countdown and a &quot;Request Delay&quot; feature to keep the
                  clinic workflow moving.
                </div>
                <div className="text-xl leading-[36px] pt-6">Impact</div>
                <div className="text-sm leading-[26px] pt-3">
                  Reduces waiting room crowding, improves patient satisfaction
                  scores, and allows doctors to manage &quot;no-shows&quot; in
                  real-time.
                </div>
              </div>
            </div>
            <div className="xl:w-4/5 w-full mt-12">
              <div className="pl-14">
                <Carousel>
                  <CarouselContent>
                    <CarouselItem>
                      <div className="pb-2 text-center font-bold">
                        Patients can see the travel time combined with the wait
                        time
                      </div>
                      <Image
                        src="/assets/projects/healthCare/patientQueue/PatientHome.png"
                        alt="Responsive image"
                        width={1440}
                        height={1024}
                        className="rounded-lg"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <div className="pb-2 text-center font-bold">
                        Patient Filter to Search Provider
                      </div>
                      <Image
                        src="/assets/projects/healthCare/patientQueue/PatientFilter.png"
                        alt="Responsive image"
                        width={1440}
                        height={1024}
                        className="rounded-lg"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <div className="pb-2 text-center font-bold">
                        Provider Search Result
                      </div>
                      <Image
                        src="/assets/projects/healthCare/patientQueue/SearchResult.png"
                        alt="Responsive image"
                        width={1440}
                        height={1024}
                        className="rounded-lg"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <div className="pb-2 text-center font-bold">
                        Confirm Your Visit with [Dr. Name]
                      </div>
                      <Image
                        src="/assets/projects/healthCare/patientQueue/SelectedProvider.png"
                        alt="Responsive image"
                        width={1440}
                        height={1024}
                        className="rounded-lg"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <div className="pb-2 text-center font-bold">
                        Generate Your Appointment Token
                      </div>
                      <Image
                        src="/assets/projects/healthCare/patientQueue/SelectedProvider1.png"
                        alt="Responsive image"
                        width={1440}
                        height={1024}
                        className="rounded-lg"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <div className="pb-2 text-center font-bold">
                        Patient Position in a Queue
                      </div>
                      <Image
                        src="/assets/projects/healthCare/patientQueue/TokenNumber.png"
                        alt="Responsive image"
                        width={1440}
                        height={1024}
                        className="rounded-lg"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <div className="pb-2 text-center font-bold">
                        completed
                      </div>
                      <Image
                        src="/assets/projects/healthCare/patientQueue/completed.png"
                        alt="Responsive image"
                        width={1440}
                        height={1024}
                        className="rounded-lg"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <div className="pb-2 text-center font-bold">
                        Running Appointment
                      </div>
                      <Image
                        src="/assets/projects/healthCare/patientQueue/runningScreen.png"
                        alt="Responsive image"
                        width={1440}
                        height={1024}
                        className="rounded-lg"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <div className="pb-2 text-center font-bold">upcoming</div>
                      <Image
                        src="/assets/projects/healthCare/patientQueue/upcoming.png"
                        alt="Responsive image"
                        width={1440}
                        height={1024}
                        className="rounded-lg"
                      />
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OPDQueue;
