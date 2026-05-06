"use client";

import Image from "next/image";
import { GalleryPhoto } from "../GalleryAlbum/GalleryClient";
import { Badge } from "../Badge/Badge";

export const Modal = ({
  piece,
  isOpen,
  onClose,
}: {
  piece: GalleryPhoto;
  isOpen: boolean;
  onClose: () => void;
}) => {
  console.log("modal piece", piece);

  if (!isOpen || !piece) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/60 py-12"
      onClick={onClose}
    >
      <div
        role="alert"
        className="container mx-auto w-11/12 md:w-2/3 max-w-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative py-8 px-5 md:px-10 bg-mauve-300 shadow-md rounded border border-gray-400 max-h-[85vh] overflow-y-auto">
          <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">
            {piece.title}
          </h1>
          {piece.year && <h2 className="text-gray-600 mb-4">{piece.year}</h2>}
          {piece.mediums && (
            <div className="flex flex-wrap gap-2 mb-4">
              {piece.mediums.map((medium) => (
                <Badge key={medium} text={medium} />
              ))}
            </div>
          )}

          <Image
            src={piece.src}
            alt={piece.alt || piece.title}
            width={500}
            height={500}
            className="w-full h-auto mb-5"
          />

          {piece.detailImages && piece.detailImages.length > 0 && (
            <div className="mt-4">
              <h3 className="text-gray-800 font-md font-bold tracking-normal leading-tight mb-2">
                Details
              </h3>

              <div className="flex flex-wrap gap-4">
                {piece.detailImages.map((detail, index) => (
                  <Image
                    key={index}
                    src={detail.src}
                    alt={`${piece.alt} detail ${index + 1}`}
                    width={200}
                    height={200}
                    className="w-full h-auto"
                  />
                ))}
              </div>
            </div>
          )}

          {piece.referenceImages && piece.referenceImages.length > 0 && (
            <div className="mt-4">
              <h3 className="text-gray-800 font-md font-bold tracking-normal leading-tight mb-2">
                Reference Images
              </h3>

              <div className="flex flex-wrap gap-4">
                {piece.referenceImages.map((detail, index) => (
                  <Image
                    key={index}
                    src={detail.src}
                    alt={`${piece.alt} reference ${index + 1}`}
                    width={200}
                    height={200}
                    className="w-full h-auto"
                  />
                ))}
              </div>
            </div>
          )}

          <div className="flex items-center justify-start w-full">
            <button
              className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm"
              onClick={onClose}
            >
              Close
            </button>
          </div>

          <button
            className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600"
            onClick={onClose}
            aria-label="close modal"
            role="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-x"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
