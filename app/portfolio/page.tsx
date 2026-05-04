import Link from "next/link";
import { ArtDetails } from "@/components/ArtDetails/ArtDetails";
import { ArtFrame } from "../../components/ArtFrame/ArtFrame";
import { Button } from "../../components/Button/Button";
import { GalleryClient } from "../../components/GalleryAlbum/GalleryClient";
import { GalleryServer } from "../../components/GalleryAlbum/GalleryServer";
import { galleryConfig } from "../../config/galleryConfig";

type PortfolioPageProps = {
  searchParams: Promise<{ gallery?: string }>;
};

export default async function Portfolio({ searchParams }: PortfolioPageProps) {
  const params = await searchParams;
  const galleryParam =
    typeof params.gallery === "string" ? params.gallery : params.gallery?.[0];

  const selected =
    galleryConfig.find(
      (g) => g.slug.toLowerCase() === galleryParam?.toLowerCase(),
    ) ?? galleryConfig[0];

  return (
    <main className="flex flex-1 w-full flex-col items-center justify-between py-32 px-16 sm:items-start">
      <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-emerald-200">
        Portfolio
      </h1>
      
      <ul className="flex">
        {galleryConfig.map((gallery) => (
          <li key={gallery.slug} className="m-2 text-lg leading-8 text-violet-300">
            <Link href={`?gallery=${gallery.slug}`} scroll={false}>
              {gallery.name}
            </Link>
          </li>
        ))}
      </ul>

      {selected.pieces.length > 0 && (
        <GalleryServer photos={selected.pieces} />
      )}

      {/* <ArtFrame
        title="Original Bucket Head Sketch"
        description="This is an example piece of art."
        pathToImage="/images/logo/bucket head sketch (face only).JPG"
        width={478}
        height={465}
        mediums={["pencil on paper"]}
      />
      <ArtDetails
        title="Original Bucket Head Sketch"
        description="This is an example piece of art."
        mediums={["pencil on paper"]}
      /> */}
    </main>
  );
}
