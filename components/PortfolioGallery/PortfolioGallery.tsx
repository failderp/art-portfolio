"use client";
import { useState } from "react";
import { Modal } from "@/components/Modal/Modal";
import { GalleryClient } from "@/components/GalleryAlbum/GalleryClient";
import { GalleryPhoto, GallerySection } from "@/config/galleryConfig";

export const PortfolioGallery = ({   galleries,
  initialSlug,
}: {
  galleries: GallerySection[];
  initialSlug: string;
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPiece, setSelectedPiece] = useState(galleries[0]?.pieces[0]);

  const handleImageClick = (piece: GalleryPhoto) => {
    setSelectedPiece(piece);
    setIsModalOpen(true);
  };

  return (
    <>
      <Modal
        piece={selectedPiece}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <GalleryClient
        galleries={galleries}
        initialSlug={initialSlug}
        onImageClick={handleImageClick}
      />
    </>
  );
};