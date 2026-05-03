import Image from "next/image";

interface ArtFrameProps {
  key?: string;
  title: string;
  description?: string;
  pathToImage: string;
  width?: number;
  height?: number;
  mediums?: string[];
}

export const ArtFrame = ({
  key,
  title,
  pathToImage,
  width,
  height,
}: ArtFrameProps) => {
  return (
    <div className="art-card" key={key}>
      <div
        id="art-frame"
        className="overflow-hidden shadow-lg border-20 border-amber-950 rounded-lg"
      >
        {/* <div className="overflow-hidden shadow-lg border-100 border-gray-200"> */}
        <div 
          id="art-frame-mat" 
          className="overflow-hidden shadow-lg border-100 border-texture"
          style={{
            borderImage: `url('/images/gallery/setup/kiwihug-MS9Tnh3if1o-unsplash_edited.jpg') 32 round`,
          }}
        >
          <Image
            src={pathToImage}
            alt={title}
            className="art-card-image object-cover"
            width={width}
            height={height}
          />
        </div>
      </div>

      
    </div>
  );
};
