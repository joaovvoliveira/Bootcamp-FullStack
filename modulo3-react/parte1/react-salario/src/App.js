import React, { Component } from "react";
import Title from "./components/Title";
import Calculos from "./components/Calculos";
import "materialize-css/dist/css/materialize.min.css";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      fullSalary: 0,
    };
  }

  render() {
    return (
      <div>
        <Title />
        <Calculos />
      </div>
    );
  }
}
