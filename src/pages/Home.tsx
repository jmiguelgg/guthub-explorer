import React, { useState } from 'react';
import ListTopics from '../components/ListTopics';
import './styles/Home.css';

const defaultSearchTerm = 'react';

const Home = (): JSX.Element => {
  const [searchTopic, setSearchTopic] = useState(defaultSearchTerm);

  const hadleSearchTerm = (event: React.FormEvent<HTMLInputElement>) => {
    const term = event.currentTarget.value.trim();
    setSearchTopic(term);
  };
  
  return (
    <div className='root'>
      <input placeholder='Search term' value={searchTopic} onChange={hadleSearchTerm} />
      <div className='infoContainer'>
        <ListTopics searchTerm={searchTopic} />
      </div>
    </div>
  );
};

export default Home;
