import { gql } from "@apollo/client";

export const ALLVIDEOS = gql`
  query GetallVideos($limit: Int, $tags: String, $after: String) {
    allVideos(limit: $limit, tags: $tags, after: $after) {
      items {
        id
        name
        url
        poster
        Tags {
          name
        }
      }
      cursor {
        before
        after
      }
    }
  }
`;
