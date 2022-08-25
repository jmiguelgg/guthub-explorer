import React, { useState } from 'react';
import ListTopics from '../components/ListTopics';
import { InfoContainer, Input, Root } from './styles/Home';

const defaultSearchTerm = 'react';

const Home = (): JSX.Element => {
  const [searchTopic, setSearchTopic] = useState(defaultSearchTerm);

  const hadleSearchTerm = (event: React.FormEvent<HTMLInputElement>) => {
    const term = event.currentTarget.value.trim();
    setSearchTopic(term);
  };
  
  return (
    <Root>
      <Input placeholder='Search term' value={searchTopic} onChange={hadleSearchTerm} />
      <InfoContainer>
        <ListTopics searchTerm={searchTopic} />
      </InfoContainer>
    </Root>
  );
};

export default Home;
