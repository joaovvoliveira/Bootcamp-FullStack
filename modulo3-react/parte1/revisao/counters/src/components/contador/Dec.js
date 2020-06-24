import React from "react";
import css from "./count.module.css";

export default function Dec(props) {
  const handleClick = () => {
    props.onDecrement("-");
  };
  return (
    <button className={css.btnD} onClick={handleClick}>
      -
    </button>
  );
}
