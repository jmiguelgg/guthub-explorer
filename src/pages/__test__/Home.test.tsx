import React from "react";
import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { GET_TOPICS } from "../../querys/topics";
import Home from "../Home";

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
      <Home />
    </MockedProvider>
  );
  expect(await screen.findByTestId("TopicsList-Spinner")).toBeInTheDocument();
});
