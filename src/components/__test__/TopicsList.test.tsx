import React from "react";
import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import TopicsList from "../TopicsList";
import { GET_TOPICS } from "../../querys/topics";

test("[TopicsList]: Render loading", async () => {
  render(
    <MockedProvider>
      <TopicsList searchTerm="react" />
    </MockedProvider>
  );
  expect(await screen.findByTestId("TopicsList-Spinner")).toBeInTheDocument();
});

test("[TopicsList]: Render error", async () => {
  const topicMock = {
    request: {
      query: GET_TOPICS,
      variables: { name: "react" },
    },
    error: new Error("An error occurred"),
  };
  render(
    <MockedProvider mocks={[topicMock]}>
      <TopicsList searchTerm="react" />
    </MockedProvider>
  );
  expect(await screen.findByTestId("TopicsList-Error")).toBeInTheDocument();
});

test("[TopicsList]: Render data", async () => {
  const topicMock = {
    request: {
      query: GET_TOPICS,
      variables: { name: "react" },
    },
    result: {
      data: {
        topic: {
          name: "react",
          stargazerCount: 10,
          relatedTopics: [{
            name: 'r',
            stargazerCount: 5,
            relatedTopics: [],
          }],
        },
      },
    },
  };
  render(
    <MockedProvider mocks={[topicMock]}>
      <TopicsList searchTerm="react" />
    </MockedProvider>
  );
  expect(await screen.findByTestId("TopicsList-SubList")).toBeInTheDocument();
});
