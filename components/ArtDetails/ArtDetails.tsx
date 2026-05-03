import { Badge } from "../Badge/Badge";

interface ArtDetailsProps {
  title: string;
  description?: string;
  mediums?: string[];
}

export const ArtDetails = ({ title, description, mediums }: ArtDetailsProps) => {
  return (
    <div className="art-details">
      <h2 className="art-card-title text-blue-400 text-6xl my-2">{title}</h2>

      {description && (
        <p className="art-card-description text-white">{description}</p>
      )}

      {mediums && (
        <div className="art-card-mediums mt-2">
          {mediums.map((medium) => (
            <Badge key={medium} text={medium} />
          ))}
        </div>
      )}
    </div>
  )
}