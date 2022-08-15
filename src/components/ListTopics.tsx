import { useQuery } from "@apollo/client";
import React from "react";
import { ITopic } from "../models/Topic";
import { GET_TOPICS } from "../querys/topics";
import Spinner from "./Spinner";
import Topic from "./Topic";

interface ListTopicsProps {
  searchTerm: string;
}

const ListTopics = ({ searchTerm }: ListTopicsProps): JSX.Element => {
  const { loading, error, data } = useQuery(GET_TOPICS, {
    variables: { name: searchTerm },
  });

  if (loading) return <Spinner />;
  else if (error) return <p>An error occurred with the request</p>;
  else if (data.topic === null || data.topic.relatedTopics.length === 0) {
    return <p>No results found</p>;
  } else {
    return data.topic.relatedTopics.map((topic: ITopic, index: number) => (
      <Topic key={`${topic.name}-${index}`} data={topic} />
    ));
  }
};

export default ListTopics;
