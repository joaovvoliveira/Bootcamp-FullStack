import React, { Component } from "react";
import App from "../App";
import salary from "../salary";

export default class Calculos extends Component {
  // const { salarioBruto,baseINSS, descontoINSS, baseIRPF,descontoIRPF, salarioLiquido} = this.props;
  constructor() {
    super();

    this.state = {
      fullSalary: 0,
      calcINSS: 0,
    };
  }

  async componentDidMount() {
    const res = await fetch("./salary.js");
    const json = await res.json();
  }

  valorSalario = (event) => {
    const { fullSalary, calcINSS } = this.state;
    if (event.key == "Enter") {
      const valor = event.target.value;
      this.setState({ fullSalary: valor });
    }
  };

  calcINSS = () => {
    const { fullSalary, calcINSS } = this.state;
    console.log(fullSalary);
  };

  render() {
    const { fullSalary } = this.state;
    return (
      <div className="container">
        <div></div>
        <div className="row">
          <div className="col s8">
            <p>Salário Bruto</p>
            <input type="text" onKeyUp={this.valorSalario} />
          </div>
        </div>
        <div className="row">
          <div className="col s3">
            <p>BASE INSS</p>
            <input type="text" readOnly value={`R$ ${fullSalary}`} />
          </div>
          <div className="col s3">
            <p>Desconto INSS</p>
            <input type="text" readOnly value={this.calcINSS} />
          </div>
          <div className="col s3">
            <p>Base IRPF</p>
            <input type="text" readOnly />
          </div>
          <div className="col s3">
            <p>Desconto IRPF</p>
            <input type="text" readOnly />
          </div>
        </div>
      </div>
    );
  }
}
