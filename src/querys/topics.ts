import { gql } from "@apollo/client";

export const GET_TOPICS = gql`
  query ($name: String!) {
    topic(name: $name) {
      name
      relatedTopics(first: 10) {
        name
        stargazerCount
      }
    }
  }
`;
