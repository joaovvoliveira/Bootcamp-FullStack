import React from "react";
import Position from "./Position";
import Picture from "./Picture";
import Info from "./Info";
import Name from "./Name";
import Votes from "./Votes";
import Percentage from "./Percentage";
import Popularity from "./Popularity";
import css from "./candidate.module.css";
import { formatNumber, formatPorcentage } from "../helpers/formatHelpers";

export default function Candidate({ candidate, position }) {
  const { id, name, votes, percentage, popularity, voteCount } = candidate;

  const imageSource = `${id}.jpg`;
  const title = `Vingador ${id}`;
  return (
    <div className={css.flexRow}>
      <Position>{position}</Position>
      <Picture imageSource={imageSource} description={title} />
      <Info>
        <Name>{name}</Name>
        <Votes value={votes} count={voteCount}></Votes>
        <Percentage>{formatPorcentage(percentage)}</Percentage>
        <Popularity value={popularity} max={10}></Popularity>
      </Info>
    </div>
  );
}
