import React from "react";
import Position from "./Position";
import Picture from "./Picture";
import Info from "./Info";
import Name from "./Name";
import Votes from "./Votes";
import Percentage from "./Percentage";
import Popularity from "./Popularity";

export default function Candidate({ candidate, position }) {
  const { id, name, votes, percentage, popularity } = candidate;

  const imageSource = `${id}.jpg`;
  const title = `Vingador ${id}`;
  return (
    <div>
      <Position>{position}</Position>
      <Picture imageSource={imageSource} description={title} />
      <Info>
        <Name>{name}</Name>
        <Votes>{votes}</Votes>
        <Percentage>{percentage}</Percentage>
        <Popularity value={popularity} max={10}></Popularity>
      </Info>
    </div>
  );
}
