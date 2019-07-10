import React, { Component } from "react";
import "./App.css";
import Counter from "./components/Counter";
import { BrowserRouter as Router, NavLink, Redirect } from "react-router-dom";
import Route from "react-router-dom/Route";

const User = (params) => {
  return <h1>Welcome User {params.username}</h1>;
};

class App extends Component {
  state = {
    loggedIn: false
  };

  logInHandle = () => {
    this.setState({ loggedIn: true });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <NavLink to="/" activeStyle={{ color: "green" }} exact>
            Home
          </NavLink>
          <NavLink to="/about" activeStyle={{ color: "green" }} exact>
            About
          </NavLink>
          <NavLink to="/user/sonia" activeStyle={{ color: "green" }} exact>
            User Sonia
          </NavLink>
          <NavLink to="/user/jain" activeStyle={{ color: "green" }} exact>
            User Jain
          </NavLink>

          <input
            type="button"
            value="log In"
            onClick={this.logInHandle.bind(this)}
          />

          <Route
            path="/"
            exact
            strict
            render={() => {
              return <h1>Welcome</h1>;
            }}
          />
          <Route
            path="/about"
            exact
            strict
            render={() => {
              return <h1>Welcome About</h1>;
            }}
          />

          <Route
            path="/user/:username"
            exact
            strict
            render={({match}) => (this.state.loggedIn ? <User username={match.params.username} /> : <Redirect />)}
          />
          <Counter />
        </div>
      </Router>
    );
  }
}

export default App;
