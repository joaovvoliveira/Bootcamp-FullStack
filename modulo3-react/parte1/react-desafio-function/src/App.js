import React, { Component } from "react";
import Header from "./components/Header";
import Spinner from "./components/Spinner";
import Candidates from "./components/Candidates";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      candidates: [],
    };

    this.interval = null;
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      fetch("http://localhost:8080/votes")
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          this.setState({
            candidates: json.candidates,
          });
        });
    }, 2000);
  }

  render() {
    const { candidates } = this.state;
    if (candidates.length === 0) {
      return <Spinner description="Loading..." />;
    } else {
      return (
        <div>
          <Header title="Votação" />
          <Candidates candidates={candidates} />
        </div>
      );
    }
  }
}
