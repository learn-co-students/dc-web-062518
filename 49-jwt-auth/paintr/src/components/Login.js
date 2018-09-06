import React from "react";

const baseUrl = "http://localhost:3001";
class Login extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    let data = JSON.stringify({
      email: e.target.querySelector('input[name="email"]').value,
      password: e.target.querySelector('input[name="password"]').value
    });
    fetch(baseUrl + "/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: data
    });
  }

  render() {
    return (
      <div className="ui card">
        <form className="ui form" onSubmit={this.handleSubmit}>
          <input
            className="ui field"
            placeholder="email"
            name="email"
            type="text"
          />
          <input
            className="ui field"
            placeholder="password"
            name="password"
            type="text"
          />
          <button className="ui primary button" type="submit">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
