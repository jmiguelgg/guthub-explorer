import React, { useState } from "react";
import { ITopic } from "../models/Topic";
import TopicsList from "./TopicsList";
import { Row, Topic as STopic, Text, TipicContainer } from "./styles/Topic";

interface TopicProps {
  data: ITopic;
}

const Topic = ({ data }: TopicProps): JSX.Element => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <TipicContainer>
      <Row isSelected={open} data-testid='Topic-Row' onClick={toggle}>
        <STopic>{data.name}</STopic>
        <Text data-testid='Topic-StargazersNumber'>Stargazers: {data.stargazerCount}</Text>
      </Row>
      {open && <TopicsList data-testid='Topic-TopicList' searchTerm={data.name} />}
    </TipicContainer>
  );
};

export default Topic;
