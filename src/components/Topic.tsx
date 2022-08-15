import React from 'react';
import { ITopic } from '../models/Topic';

interface TopicProps {
  data: ITopic;
};

const Topic = ({
  data,
}: TopicProps): JSX.Element => {
  return (
    <div>
      <h1>{data.name}</h1>
      <p>Stargazers: {data.stargazerCount}</p>
    </div>
  );
};

export default Topic;
