import React, { Component } from "react";
import css from "./country.module.css";
export default class Country extends Component {
  render() {
    const { country } = this.props;
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
}
