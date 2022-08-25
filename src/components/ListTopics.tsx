import React from "react";
import { useQuery } from "@apollo/client";
import { TopicRequest, TopicResponse } from "../models/Topic";
import { GET_TOPICS } from "../querys/topics";
import {Spinner} from "./styles/Spinner";
import {SubList, Text} from './styles/Topic';
import Topic from './Topic';

interface ListTopicsProps {
  searchTerm: string;
}

const ListTopics = ({ searchTerm }: ListTopicsProps): JSX.Element => {
  const { loading, error, data } = useQuery<TopicResponse, TopicRequest>(
    GET_TOPICS,
    {
      variables: { name: searchTerm },
    }
  );

  if (loading) return <Spinner />;
  else if (error) return <Text>An error occurred with the request</Text>;
  else if (
    data &&
    (data.topic === null || data.topic.relatedTopics.length === 0)
  ) {
    return <Text>No results found</Text>;
  } else {
    return (
      <SubList>
        {data?.topic?.relatedTopics.map((topic, index) => (
          <Topic key={`${topic.name}-${index}`} data={topic} />
        ))}
      </SubList>
    );
  }
};

export default ListTopics;
