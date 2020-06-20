import React, { Component } from "react";
import Counter from "./components/Counter/Counter";
import Counter2 from "./components/Counter/Counter2";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      currentCount: 3,
      steps: 0,
    };
  }

  handleCount = (clickType) => {
    const { currentCounter, steps } = this.state;
    this.setState({
      currentCounter:
        clickType === "+" ? currentCounter + 1 : currentCounter - 1,
      steps: steps + 1,
    });
  };

  render() {
    const { currentCount, steps } = this.state;
    return (
      <div>
        <h2>Counter 1</h2>
        <Counter />
        <Counter />
        <Counter />

        <h2>Counter 2</h2>
        <Counter2
          onCount={this.handleCount}
          countValue={currentCount}
          currentStep={steps}
        />
        <Counter2
          onCount={this.handleCount}
          countValue={currentCount}
          currentStep={steps}
        />
        <Counter2
          onCount={this.handleCount}
          countValue={currentCount}
          currentStep={steps}
        />
      </div>
    );
  }
}
