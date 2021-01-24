import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

import { VIDEO } from "../Components/Query";

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
    <div className="singleVideoCard">
      {poster !== null ? (
        <img className="singleVideoPoster" src={poster} alt={name} />
      ) : (
        <img
          className="singleVideoPoster"
          src="https://via.placeholder.com/835x470"
          alt={name}
        />
      )}
      <h3 className="videoName">{name}</h3>
      <div className="tags">
        <h4>Tags :</h4>
        {data.video.Tags.length === 0
          ? "no Tags"
          : data.video.Tags.map((tag) => <p key={tag.name}>#{tag.name}</p>)}
      </div>
    </div>
  );
}
