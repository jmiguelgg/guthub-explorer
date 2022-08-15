import React, { useState } from "react";
import { ITopic } from "../models/Topic";
import ListTopics from "./ListTopics";
import "./styles/Topic.css";

interface TopicProps {
  data: ITopic;
}

const Topic = ({ data }: TopicProps): JSX.Element => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <div
        className="rowContainer"
        style={{ backgroundColor: open ? "rgba(141, 246, 222, 0.6)" : "white" }}
        onClick={toggle}
      >
        <p className="name">{data.name}</p>
        <p>Stargazers: {data.stargazerCount}</p>
      </div>
      {open && (
        <div className="subList">
          <ListTopics searchTerm={data.name} />
        </div>
      )}
    </>
  );
};

export default Topic;
