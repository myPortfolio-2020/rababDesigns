import React from "react";
import Image from "next/image";
import { FinalDesign } from "@/app/lib/types/projects";

const FinalDesignImages = ({ design }: { design: FinalDesign }) => {
  const { caption, image } = design;
  return (
    <>
      <div>
        <Image
          src={image}
          alt=""
          width={1940}
          height={1767}
          className="w-full h-auto object-cover"
        />
        <div className="text-sm pt-2">{caption}</div>
      </div>
    </>
  );
};

export default FinalDesignImages;
