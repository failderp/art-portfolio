"use client";

import { RowsPhotoAlbum } from "react-photo-album";
import SSR from "react-photo-album/ssr";
import "react-photo-album/rows.css";
import Link from "next/link";

type GalleryPhoto = {
  src: string;
  width: number;
  height: number;
  alt?: string;
  title?: string;
};

type GallerySection = {
  name: string;
  slug: string;
  pieces: GalleryPhoto[];
};

export const GalleryClient = ({
  galleries,
  initialSlug,
}: {
  galleries: GallerySection[];
  initialSlug: string;
}) => {
  const selected =
    galleries.find((g) => g.slug === initialSlug) ?? galleries[0];

  const albumPhotos = selected.pieces.map((p) => ({
    src: p.src,
    width: p.width,
    height: p.height,
    alt: p.alt,
    title: p.title,
  }));

  return (
    <>
      <ul className="flex">
        {galleries.map((gallery) => (
          <li
            key={gallery.slug}
            className="m-2 text-lg leading-8 text-violet-300"
          >
            <Link href={`?gallery=${gallery.slug}`} scroll={false}>
              {gallery.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* {albumPhotos.length > 0 && (
        <RowsPhotoAlbum photos={albumPhotos} defaultContainerWidth={1200} />
      )} */}

      {/* {albumPhotos.length > 0 && (
        <SSR breakpoints={[300, 600, 900, 1200]}>
          <RowsPhotoAlbum photos={albumPhotos} defaultContainerWidth={1200} />
        </SSR>
      )} */}

      {albumPhotos.length > 0 && (
        <div className="w-full">
          <RowsPhotoAlbum
            photos={albumPhotos}
            defaultContainerWidth={1200}
            breakpoints={[300, 600, 900, 1200]}
          />
        </div>
      )}
    </>
  );
};
