import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Topic from "../Topic";
import { ITopic } from "../../models/Topic";
import { GET_TOPICS } from "../../querys/topics";
import { MockedProvider } from "@apollo/client/testing";

const dataMock: ITopic = {
  name: "React",
  relatedTopics: [{ name: "r", stargazerCount: 5, relatedTopics: [] }],
  stargazerCount: 10,
};

test("[Topic]: Render component", () => {
  render(<Topic data={dataMock} />);
  const renderResult = screen.getByTestId("Topic-StargazersNumber");
  expect(renderResult).toBeInTheDocument();
});

test("[Topic]: Open list of topics", async () => {
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
          relatedTopics: [
            {
              name: "r",
              stargazerCount: 5,
              relatedTopics: [],
            },
          ],
        },
      },
    },
  };
  render(
    <MockedProvider mocks={[topicMock]}>
      <Topic data={dataMock} />
    </MockedProvider>
  );

  const renderResult = screen.getByTestId("Topic-Row");
  fireEvent.click(renderResult);

  expect(await screen.findByTestId("TopicsList-Error")).toBeInTheDocument();
});
