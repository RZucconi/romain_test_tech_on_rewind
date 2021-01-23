import { gql } from "@apollo/client";

export const ALLVIDEOS = gql`
  query GetallVideos(
    $limit: Int!
    $tags: String!
    $before: String!
    $after: String!
  ) {
    allVideos(limit: $limit, tags: $tags, before: $before, after: $after) {
      items {
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
