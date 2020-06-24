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

  async componentDidMount() {
    const data = await fetch("./salary.js");
    console.log(data);
    const json = await data.json();
    console.log(json);
  }

  render() {
    const { fullSalary } = this.state;
    return (
      <div>
        <Title />
        <Calculos calcular={fullSalary} />
      </div>
    );
  }
}
