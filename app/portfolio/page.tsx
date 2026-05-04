// "use client";
// import { useEffect, useState } from "react";
import { ArtDetails } from "@/components/ArtDetails/ArtDetails";
import { ArtFrame } from "../../components/ArtFrame/ArtFrame";
import { Button } from "../../components/Button/Button";
import { GalleryAlbum } from "../../components/GalleryAlbum/GalleryAlbum";
import { galleryConfig } from "../../config/galleryConfig";
import Link from "next/link";

type PortfolioPageProps = {
  searchParams: Promise<{ gallery?: string }>;
};

export default async function Portfolio({ searchParams }: PortfolioPageProps) {
  const params = await searchParams;
  const galleryParam = params.gallery;
  console.log("Gallery param:", galleryParam);

  const gallery =
    typeof galleryParam === "string" ? galleryParam : galleryParam?.[0];

  console.log("Selected gallery:", gallery);
  console.log(
    "available:",
    galleryConfig.map((g) => g.name),
  );

  const selected =
    galleryConfig.find((g) => g.slug.toLowerCase() === gallery?.toLowerCase()) ?? galleryConfig[0];

  return (
    <main className="flex flex-1 w-full flex-col items-center justify-between py-32 px-16 sm:items-start">
      <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-emerald-200">
        Portfolio
      </h1>

      <ul className="flex">
        {galleryConfig.map((gallery) => (
          <li
            key={gallery.name}
            className="m-2 text-lg leading-8 text-violet-300"
          >
            <Link href={`?gallery=${gallery.slug}`} scroll={false}>
              {gallery.name}
            </Link>
          </li>
        ))}
      </ul>

      <GalleryAlbum key={selected.name} photos={selected.pieces} />

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
