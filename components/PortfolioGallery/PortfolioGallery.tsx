"use client";
import { useState } from "react";
import { Modal } from "@/components/Modal/Modal";
import { GalleryClient } from "@/components/GalleryAlbum/GalleryClient";

export const PortfolioGallery = ({ galleries, initialSlug }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPiece, setSelectedPiece] = useState(galleries[0]?.pieces[0]);

  const handleImageClick = (piece) => {
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