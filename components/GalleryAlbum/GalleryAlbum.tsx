// import { MasonryPhotoAlbum } from "react-photo-album";
// import "react-photo-album/masonry.css";

// export const GalleryAlbum = ({ photos }: { photos: any[] }) => {
//   return <MasonryPhotoAlbum photos={photos} />;
// }

/*
 * If this example does not work correctly in a sandbox,
 * you can download and run it locally
 */

"use client";
import { useMemo } from "react";

import Image from "next/image";
import {
  ColumnsPhotoAlbum,
  MasonryPhotoAlbum,
  RenderImageContext,
  RenderImageProps,
  RowsPhotoAlbum,
} from "react-photo-album";
import "react-photo-album/rows.css";

type GalleryPhoto = {
  src: string;
  width: number;
  height: number;
  alt?: string;
  title?: string;
  year?: number;
  mediums?: string[];
  referenceImages?: {
    src: string;
    width: number;
    height: number;
    alt?: string;
  }[];
  detailImages?: {
    src: string;
    width: number;
    height: number;
    alt?: string;
  }[];
};

function renderNextImage(
  { alt = "", title, sizes }: RenderImageProps,
  { photo, width, height }: RenderImageContext,
) {
  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        aspectRatio: `${width} / ${height}`,
      }}
    >
      <Image
        key={photo.src}
        fill
        src={photo.src}
        alt={alt}
        title={title}
        sizes={sizes}
        // placeholder={"blurDataURL" in photo ? "blur" : undefined}
      />
    </div>
  );
}

export const GalleryAlbum = ({ photos }: { photos: GalleryPhoto[] }) => {
  const albumPhotos = useMemo(
    () =>
      photos.map((p) => ({
        src: p.src,
        width: p.width,
        height: p.height,
        alt: p.alt,
        title: p.title,
      })),
    [photos],
  );
  console.log("GalleryAlbum albumPhotos:", albumPhotos);
  return (
    <>
      {/* <div className="grid grid-cols-2 gap-4">
        {photos.map((photo) => (
          <>
            <img
              key={photo.src}
              src={photo.src}
              alt={photo.alt || ""}
              className="w-full h-auto"
            />
          </>
        ))}
      </div> */}

      <RowsPhotoAlbum
        key={albumPhotos.map((p) => p.src).join("-")}
        photos={albumPhotos}
        // render={{ image: renderNextImage }}
        defaultContainerWidth={1200}
        // sizes={{
        //   size: "1168px",
        //   sizes: [{ viewport: "(max-width: 1200px)", size: "calc(100vw - 32px)" }],
        // }}
      />
    </>
  );
};
