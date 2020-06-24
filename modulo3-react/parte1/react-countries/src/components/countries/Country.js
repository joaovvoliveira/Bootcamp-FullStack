import React from "react";
import css from "./country.module.css";

export default function Country({ country }) {
  const { name, flag } = country;

  return (
    <div>
      <div className={`${css.border} ${css.country}`}>
        <span>
          <img src={flag} alt={name} className={css.img} />
        </span>
        <span>{name}</span>
      </div>
    </div>
  );
}
