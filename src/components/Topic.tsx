import React, { useState } from "react";
import { ITopic } from "../models/Topic";
import ListTopics from "./ListTopics";
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
      <Row isSelected={open} onClick={toggle}>
        <STopic>{data.name}</STopic>
        <Text>Stargazers: {data.stargazerCount}</Text>
      </Row>
      {open && <ListTopics searchTerm={data.name} />}
    </TipicContainer>
  );
};

export default Topic;
