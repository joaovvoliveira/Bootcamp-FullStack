import React, { Component } from "react";
import User from "./User";

export default class Users extends Component {
  constructor() {
    super();

    this.state = {
      secondVisible: 0,
    };

    this.interval = null;
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      const { secondVisible } = this.state;

      this.setState({
        secondVisible: secondVisible + 1,
      });
    }, 1000);
  }
  componentDidUpdate() {
    console.log("Update Users");
  }
  componentWillUnmount() {
    clearInterval(this.interval);
    console.log("Unmount Users");
  }

  render() {
    const { users } = this.props;
    const { secondVisible } = this.state;
    return (
      <div>
        <p>Componente visivel por {secondVisible} segundos</p>
        <ul>
          {users.map((user) => {
            const { login, name, picture } = user;
            return (
              <li key={login.uuid}>
                <User user={user} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
