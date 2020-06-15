import React, { Component } from "react";
import { getNewMoment, getNewTime } from "./helpers/formatDateHelpers";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      clickArray: [],
    };
  }

  getNewMoment = () => {
    const newClickArray = Object.assign([], this.state.clickArray);
    newClickArray.push(getNewTime());
    this.setState({ clickArray: newClickArray });
  };

  componentDidUpdate() {
    document.title = this.state.clickArray.length.toString();
  }

  render() {
    const { clickArray } = this.state;
    return (
      <div>
        <h1>React com Class Components</h1>
        <button onClick={this.getNewMoment}>Adicionar Horário</button>

        <ul>
          {clickArray.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </div>
    );
  }
}
