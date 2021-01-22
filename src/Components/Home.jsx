import { useQuery } from "@apollo/client";

import { ALLVIDEOS } from "./Query";

import "../Styles/thumbnails.css";

export default function Home() {
  const { loading, error, data, fetchMore } = useQuery(ALLVIDEOS, {
    variables: {
      limit: 5,
      after: null,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error ;(</p>;

  return (
    <>
      {data.allVideos.items.map(({ id, name, poster, Tags }) => (
        <div key={id} className="thumbnail">
          {poster !== null ? (
            <img src={poster} alt={name} />
          ) : (
            <img src="https://via.placeholder.com/150" alt={name} />
          )}
          <h3>{name}</h3>
          <div className="tags">
            <h4>Tags :</h4>
            {Tags.length === 0
              ? "no tags"
              : Tags.map((tag) => <p>{tag.name}</p>)}
          </div>
        </div>
      ))}
      <button
        onClick={() => {
          const { after } = data.allVideos.cursor;

          fetchMore({
            variables: { after: after },
            updateQuery: (prevResult, { fetchMoreResult }) => {
              console.log(prevResult);
              console.log(fetchMoreResult);
              fetchMoreResult.allVideos.items = [
                ...prevResult.allVideos.items,
                ...fetchMoreResult.allVideos.items,
              ];
              return fetchMoreResult;
            },
          });
        }}
      >
        more
      </button>
    </>
  );
}
