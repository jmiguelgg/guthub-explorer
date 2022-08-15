import React, { useState } from 'react';
import ListTopics from '../components/ListTopics';

const defaultSearchTerm = 'react';

const Home = (): JSX.Element => {
  const [searchTopic, setSearchTopic] = useState(defaultSearchTerm);

  const hadleSearchTerm = (event: React.FormEvent<HTMLInputElement>) => {
    const term = event.currentTarget.value.trim();
    setSearchTopic(term);
  };
  
  return (
    <div>
      <input placeholder='Search term' value={searchTopic} onChange={hadleSearchTerm} />
      <ListTopics searchTerm={searchTopic} />
    </div>
  );
};

export default Home;
