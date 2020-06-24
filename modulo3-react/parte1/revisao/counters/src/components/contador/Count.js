import React, { Component } from "react";
import css from "./count.module.css";
import Inc from "./Inc";
import Dec from "./Dec";
import Value from "./Value";
import Steps from "./Steps";

export default class Count extends Component {
  constructor() {
    super();

    this.state = {
      currentNumber: 1,
      steps: 0,
    };
  }

  btnClick = (type) => {
    const { currentNumber, steps } = this.state;

    this.setState({
      currentNumber: type === "+" ? currentNumber + 1 : currentNumber - 1,
      steps: steps + 1,
    });
  };

  render() {
    const { currentNumber, steps } = this.state;
    return (
      <div>
        <div className={css.contador}>
          <Dec onDecrement={this.btnClick} />
          <Value value={currentNumber} />
          <Inc onIncrement={this.btnClick} />
          <Steps steps={steps} />
        </div>
      </div>
    );
  }
}
