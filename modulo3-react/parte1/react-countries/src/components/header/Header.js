import React from "react";
import css from "./header.module.css";

export default function Header(props) {
  const handleInputChange = (event) => {
    const newText = event.target.value;
    props.onChangeFilter(newText);
  };

  const { filter, countriesLength, population } = props;

  return (
    <div>
      <div className="row">
        <div className="col s4">
          <h5>Digite a busca:</h5>
          <input
            placeholder="Filtro"
            type="text"
            value={filter}
            onChange={handleInputChange}
          />
        </div>
        <div className="col s4">
          <h5>Quantidade de Países:</h5>
          <input type="text" readOnly value={countriesLength} />
        </div>
        <div className="col s4">
          <h5>População:</h5>
          <input type="text" readOnly value={population} />
        </div>
      </div>
    </div>
  );
}
