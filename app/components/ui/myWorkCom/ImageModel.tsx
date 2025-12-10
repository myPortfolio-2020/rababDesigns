// ImageModal.tsx
import Image from "next/image";
import React from "react";

interface ImageModalProps {
  imageSrc: string;
  imageAlt: string;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({
  imageSrc,
  imageAlt,
  onClose,
}) => {
  return (
    // Backdrop: Fixed position, full screen, dark background, centered
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
      onClick={onClose} // Clicking the backdrop closes the modal
      role="dialog"
      aria-modal="true"
    >
      {/* Modal Content Container */}
      <div
        className="relative max-w-full max-h-full"
        // Prevents the modal from closing when clicking on the image area itself
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-3xl p-2 rounded-full hover:bg-white/20 transition"
          aria-label="Close full-screen image"
        >
          &times;
        </button>

        {/* The Full-Size Image */}
        <div className="w-full h-full max-w-[90vw] max-h-[90vh]">
          {/* Using 'fill' and object-contain ensures the image scales 
             to fit the viewport without distortion. 
             If you want the image to display its full size and allow scrolling, 
             you would adjust the styling here.
          */}
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill // Use fill to make it responsive to the parent div's size
            className="object-contain" // The "No Stretch" Tailwind class!
          />
        </div>

        {/* Optional Caption */}
        {imageAlt && (
          <div className="text-white text-center mt-3 text-lg">{imageAlt}</div>
        )}
      </div>
    </div>
  );
};

export default ImageModal;
