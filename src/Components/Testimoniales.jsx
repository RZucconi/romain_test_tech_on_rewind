import { gql, useQuery } from "@apollo/client";

const ALLVIDEOS = gql`
  query GetallVideos {
    allVideos(limit: 5, tags: "Testimoniales") {
      items {
        name
        url
        poster
        Tags {
          name
        }
      }
    }
  }
`;

export default function Testimoniales() {
  const { loading, error, data } = useQuery(ALLVIDEOS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error ;(</p>;

  return data.allVideos.items.map(({ name, url, poster, Tags }) => (
    <div key={url}>
      <img src={poster} alt={name} />
      <h3>{name}</h3>
      <h4>Tags :</h4>
      {Tags.map((tag) => (
        <p>{tag.name}</p>
      ))}
    </div>
  ));
}
