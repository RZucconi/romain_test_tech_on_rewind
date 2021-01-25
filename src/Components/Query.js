import { gql } from "@apollo/client";

export const ALLVIDEOS = gql`
  query GetallVideos(
    $limit: Int!
    $tags: String!
    $after: String!
    $before: String!
  ) {
    allVideos(limit: $limit, tags: $tags, after: $after, before: $before) {
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

export const VIDEO = gql`
  query Getvideo($id: ID!) {
    video(id: $id) {
      name
      poster
      Tags {
        name
      }
    }
  }
`;
