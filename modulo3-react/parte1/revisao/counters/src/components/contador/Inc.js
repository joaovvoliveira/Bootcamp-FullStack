import React from "react";
import css from "./count.module.css";

export default function Inc(props) {
  const handleClick = () => {
    props.onIncrement("+");
  };
  return (
    <button className={css.btnI} onClick={handleClick}>
      +
    </button>
  );
}
