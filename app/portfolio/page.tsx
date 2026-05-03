import { ArtDetails } from "@/components/ArtDetails/ArtDetails";
import { ArtFrame } from "../../components/ArtFrame/ArtFrame";

export default function Portfolio() {
  return (
    <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 sm:items-start">
      <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-emerald-200">
        Portfolio
      </h1>
      <ul>
        <li className="text-lg leading-8 text-violet-300">
          Doodles
        </li>
        <li className="text-lg leading-8 text-violet-300">
          Digital Art
        </li>
        <li className="text-lg leading-8 text-violet-300">
          Traditional Art
        </li>
        <li className="text-lg leading-8 text-violet-300">
          Mixed Media
        </li>
      </ul>

      <ArtFrame
        title="Original Bucket Head Sketch"
        description="This is an example piece of art."
        pathToImage="/images/logo/bucket head sketch (face only).jpg"
        width={478}
        height={465}
        mediums={["pencil on paper"]}
      />
      <ArtDetails
        title="Original Bucket Head Sketch"
        description="This is an example piece of art."
        mediums={["pencil on paper"]}
      />
    </main>
  );
}