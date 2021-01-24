import { useState } from "react";
import { useQuery } from "@apollo/client";

import { ALLVIDEOS } from "./Query";

import "../Styles/thumbnails.css";

export default function ThumbnailsDisplay({ id, limit, tags, name }) {
  const [next, setNext] = useState("");
  const [previous, setPrevious] = useState("");

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
          <div key={id} className="thumbnail">
            {poster !== null ? (
              <img src={poster} alt={name} />
            ) : (
              <img
                className="poster"
                src="https://via.placeholder.com/613x345"
                alt={name}
                onClick={() => {
                  history.push(`/video-details/${id}`);
                }}
              />
            )}
            <h3>{name}</h3>
            <div className="tags">
              <h4>Tags :</h4>
              {Tags.length === 0
                ? "no tags"
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
