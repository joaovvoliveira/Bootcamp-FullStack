import React from "react";
import css from "./count.module.css";
import Inc from "./Inc";
import Dec from "./Dec";
import Value from "./Value";
import Steps from "./Steps";

export default function Count(props) {
  const handleButtonClick = (type) => {
    props.onCount(type);
  };

  const { currentCounter, steps } = props;

  return (
    <div>
      <div className={css.contador}>
        <Dec onDecrement={handleButtonClick} />
        <Value value={currentCounter} />
        <Inc onIncrement={handleButtonClick} />
        <Steps steps={steps} />
      </div>
    </div>
  );
}
