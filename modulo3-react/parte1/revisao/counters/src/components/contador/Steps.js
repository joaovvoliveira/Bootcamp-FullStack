import React from "react";
import css from "./count.module.css";

export default function Steps(props) {
  const { steps } = props;
  return <span className={css.words}>({steps})</span>;
}
