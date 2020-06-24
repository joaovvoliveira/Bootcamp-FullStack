import React, { Component } from "react";

export default class Band extends Component {
  constructor() {
    super();

    this.state = {
      bandMembers: [
        {
          id: 1,
          name: "João Victor",
          instrument: "Bateria",
        },
        {
          id: 2,
          name: "Patrícia Saretto",
          instrument: "Triangulo",
        },
        {
          id: 3,
          name: "Everton",
          instrument: "Guitarra",
        },
        {
          id: 4,
          name: "Jeffinho",
          instrument: "Baixo",
        },
      ],
    };
  }
  render() {
    const { bandMembers } = this.state;
    return (
      <div>
        {bandMembers.map(({ id, name, instrument }) => {
          return (
            <ul>
              <li key={id}>{name + " toca " + instrument}</li>
            </ul>
          );
        })}
      </div>
    );
  }
}
