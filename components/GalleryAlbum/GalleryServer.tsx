import ServerPhotoAlbum from "react-photo-album/server";
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

export const GalleryServer = ({ photos }: { photos: GalleryPhoto[] }) => {
  const albumPhotos = photos.map((p) => ({
    src: p.src,
    width: p.width,
    height: p.height,
    alt: p.alt,
    title: p.title,
  }));

  return (
    <ServerPhotoAlbum
      layout="rows"
      photos={albumPhotos}
      breakpoints={[300, 600, 900, 1200]}
    />
  );
};
