import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { VIDEO } from "./Query";

import "../Styles/Thumbnails.css";

export default function SingleVideoDisplay() {
  const params = useParams();
  const id = params.id;

  const { loading, error, data } = useQuery(VIDEO, {
    variables: {
      id,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error ;(</p>;

  const { name, poster } = data.video;

  return (
    <div className="thumbnails">
      <img src={poster} alt={name} />
      <h3>{name}</h3>
      <h4>Tags :</h4>
      {data.video.Tags.length === 0
        ? "no Tags"
        : data.video.Tags.map((tag) => <p>#{tag.name}</p>)}
    </div>
  );
}
