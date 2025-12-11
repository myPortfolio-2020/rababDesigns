"use client";

import React, { useState, useCallback } from "react";
import Image from "next/image";
import { FinalDesign } from "@/app/lib/types/projects";
import ImageModal from "./ImageModal";

interface Props {
  design: FinalDesign;
}

const FinalDesignImages: React.FC<Props> = ({ design }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { caption, image } = design;

  // Simple function with no parameters
  const handleOpenModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  // Separate handler for click events - properly typed
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      handleOpenModal();
    },
    [handleOpenModal]
  );

  // Separate handler for keyboard events - properly typed
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleOpenModal();
      }
    },
    [handleOpenModal]
  );

  return (
    <>
      <div
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        className="cursor-pointer group relative select-none transition-transform duration-200 hover:scale-110"
        role="button"
        tabIndex={0}
        aria-label="View image in full screen"
      >
        <Image
          src={image}
          alt={caption || "Design Image"}
          width={1940}
          height={1767}
          className="w-full h-auto object-cover"
        />
        {caption && <div className="text-sm pt-2">{caption}</div>}
      </div>

      <ImageModal
        imageSrc={image}
        imageAlt={caption || ""}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default FinalDesignImages;
