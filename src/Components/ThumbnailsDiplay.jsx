import { useState } from "react";
import { useQuery } from "@apollo/client";

import { ALLVIDEOS } from "./Query";

import "../Styles/Thumbnails.css";
import { useHistory } from "react-router-dom";

export default function ThumbnailsDisplay({ limit, tags, name }) {
  const [next, setNext] = useState("");
  const [previous, setPrevious] = useState("");
  const history = useHistory();

  function handleClickNext() {
    if (data.allVideos.cursor.after !== null) {
      setNext(data.allVideos.cursor.after);
      setPrevious("");
      refetch();
    }
  }

  function handleClickPrevious() {
    if (data.allVideos.cursor.before !== null) {
      setPrevious(data.allVideos.cursor.before);
      setNext("");
      refetch();
    }
  }

  const { loading, error, data, refetch } = useQuery(ALLVIDEOS, {
    variables: {
      limit,
      tags,
      before: previous,
      after: next,
    },
  });

  if (loading) return <p className="pInfo">Loading...</p>;
  if (error) return <p className="pInfo">Error ;(</p>;

  return (
    <>
      <h2 className="title">{name} Videos :</h2>
      <div className="container">
        {data.allVideos.items.map(({ id, name, poster, Tags }) => (
          <div key={name} className="card">
            {poster !== null ? (
              <img
                className="poster"
                src={poster}
                alt={name}
                onClick={() => {
                  history.push(`/video-details/${id}`);
                }}
              />
            ) : (
              <img
                className="poster"
                src="https://via.placeholder.com/300"
                alt={name}
                onClick={() => {
                  history.push(`/video-details/${id}`);
                }}
              />
            )}
            <h3 className="videoName">{name}</h3>
            <div className="tags">
              <h4>Tags :</h4>
              {Tags.length === 0
                ? "no Tags"
                : Tags.map((tag) => <p>#{tag.name}</p>)}
            </div>
          </div>
        ))}
      </div>
      <div className="buttonDiv">
        {data.allVideos.cursor.before !== null ? (
          <button
            onClick={() => {
              handleClickPrevious();
            }}
          >
            PREVIOUS
          </button>
        ) : (
          <div></div>
        )}
        {data.allVideos.cursor.after !== null ? (
          <button
            onClick={() => {
              handleClickNext();
            }}
          >
            NEXT
          </button>
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
}
