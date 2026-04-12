"use client";
import { useRouter } from "next/navigation";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect } from "react";
import Image from "next/image";
import slides from "../../../lib/data/homeWorkSlide.json";
import healthcare from "../../../lib/data/healthcare.json";

const ProjectSlider = () => {
  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      const el = document.querySelector(hash);

      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100); // small delay helps with rendering
      }
    }
  }, []);
  const router = useRouter();

  const handleClick = (slideId: string) => {
    router.push(`/healthcare/${slideId}`);
  };

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <>
      <div id="projectSlider" className="absolute top-[-500px]"></div>
      <div className="flex flex-col justify-center items-center mt-12 mb-20">
        <div className="w-full mx-auto">
          {/* Embla viewport */}
          <div className="overflow-hidden" ref={emblaRef}>
            {/* Embla container */}
            <div className="flex">
              {slides.slides.map((slide) => (
                <div
                  key={slide.id}
                  className={`flex-none flex items-center justify-center text-xl`}
                >
                  <div>
                    <div className="ml-7 mr-7">
                      <Image
                        src={slide.image}
                        alt="Responsive image"
                        width={slide.width}
                        height={slide.height}
                        onClick={() => handleClick(slide.id)}
                      />
                    </div>
                    <div className="p-6">
                      <div className="pb-1 text-xl  text-[var(--terminalBlue)]">
                        {slide.caption}
                      </div>
                      <div className="text-sm">{slide.label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex gap-2  justify-center">
            <button
              onClick={scrollPrev}
              className="px-4 py-2 bg-[var(--supportingColorBlue)] text-white rounded-4xl hover:bg-gray-800"
            >
              Prev
            </button>
            <button
              onClick={scrollNext}
              className="px-4 py-2 bg-[var(--terminalBlue)] text-white rounded-4xl hover:bg-gray-800"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectSlider;
