"use client";

import React, { useEffect, useCallback } from "react";

interface ImageModalProps {
  imageSrc: string;
  imageAlt: string;
  isOpen: boolean;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({
  imageSrc,
  imageAlt,
  isOpen,
  onClose,
}) => {
  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, handleClose]);

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const handleCloseClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    handleClose();
  };

  return (
    <div
      className="fixed inset-0 z-[9999] bg-black bg-opacity-95 overflow-auto"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <button
        onClick={handleCloseClick}
        className="fixed top-4 right-4 z-[10000] text-[var(--terminalBlue)] text-5xl leading-none w-14 h-14 flex items-center justify-center rounded-full bg-black bg-opacity-50 hover:bg-white hover:bg-opacity-20 transition-colors duration-200"
        aria-label="Close modal"
        type="button"
      >
        ×
      </button>

      <div
        className="min-h-screen w-full flex flex-col items-center justify-start p-16 pt-24"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-auto h-auto max-w-none"
        />

        {imageAlt && (
          <p
            id="modal-title"
            className="text-white text-center mt-6 text-lg px-4 max-w-4xl"
          >
            {imageAlt}
          </p>
        )}
      </div>
    </div>
  );
};

export default ImageModal;
