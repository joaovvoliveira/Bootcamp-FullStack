import React, { Component } from "react";
import Count from "./components/contador/Count";
import Count2 from "./components/contador/Count2";
import Band from "./components/contador/Band";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      currentCounter: 3,
      steps: 0,
    };
  }

  handleCount = (type) => {
    const { currentCounter, steps } = this.state;

    this.setState({
      currentCounter: type === "+" ? currentCounter + 1 : currentCounter - 1,
      steps: steps + 1,
    });
  };

  render() {
    const { currentCounter, steps } = this.state;
    return (
      <div className="container">
        <h1>Contador 1</h1>
        <Count />
        <Count />

        <h1>Contador 2</h1>
        <Count2
          onCount={this.handleCount}
          currentCounter={currentCounter}
          steps={steps}
        />
        <Count2
          onCount={this.handleCount}
          currentCounter={currentCounter}
          steps={steps}
        />
        <Count2
          onCount={this.handleCount}
          currentCounter={currentCounter}
          steps={steps}
        />

        <h1>Band</h1>
        <Band />
      </div>
    );
  }
}
