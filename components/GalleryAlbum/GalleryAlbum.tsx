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

import Image from "next/image";
import { ColumnsPhotoAlbum, MasonryPhotoAlbum, RenderImageContext, RenderImageProps, RowsPhotoAlbum } from "react-photo-album";
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

function renderNextImage({ alt = "", title, sizes }: RenderImageProps, { photo, width, height }: RenderImageContext) {
  return (
    <div
    style={{
      width: "100%",
      position: "relative",
      aspectRatio: `${width} / ${height}`,
    }}
    >
      <Image
        fill
        src={encodeURI(photo.src)}
        alt={alt}
        title={title}
        sizes={sizes}
        placeholder={"blurDataURL" in photo ? "blur" : undefined}
        />
    </div>
  );
}

export const GalleryAlbum = ({ photos }: { photos: GalleryPhoto[] }) => {
  return (
    <>
    <RowsPhotoAlbum
      photos={photos.map((piece) => ({
        src: piece.src,
        width: piece.width,
        height: piece.height,
        alt: piece.alt,
        title: piece.title,
      }))}
      // render={{ image: renderNextImage }}
      defaultContainerWidth={1200}
      // sizes={{
      //   size: "1168px",
      //   sizes: [{ viewport: "(max-width: 1200px)", size: "calc(100vw - 32px)" }],
      // }}
    />
    </>
  );
}