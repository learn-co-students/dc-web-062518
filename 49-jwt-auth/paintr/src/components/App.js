import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import "../App.css";
import NavBar from "./NavBar";
import PaintingsList from "./PaintingsList";
import Searchbar from "./Searchbar";
import PaintingDetails from "./PaintingDetails";
import About from "./About";
import Login from "./Login";

const requestHelper = url =>
  fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    }
  }).then(res => {
    if (res.status === 401) {
      alert("login failed");
    } else {
      return res.json();
    }
  });

class App extends Component {
  constructor() {
    super();
    this.state = {
      paintings: [],
      searchTerm: "",
      user: null
      // paintingId: null
    };
  }

  fetchPaintings = () => {
    fetch(`http://localhost:3000/paintings`)
      .then(response => response.json())
      .then(paintings => {
        this.setState({ paintings });
      });
  };

  fetchUser = () => {
    requestHelper("http://localhost:3001/me").then(this.updateUser);
  };

  componentDidMount() {
    if (localStorage.getItem("token")) {
      this.fetchUser();
    }
    this.fetchPaintings();
  }

  updateUser = user => {
    this.setState({ user });
  };

  onSearchHandler = event => {
    this.setState({ searchTerm: event.target.value });
  };

  selectPainting = paintingId => {
    // TODO: Fix!
    this.setState({ paintingId });
  };

  render() {
    return (
      <div className="App">
        <NavBar
          title="Paintr"
          icon="paint brush"
          color="blue"
          subtitle="List of Paintings"
          user={this.state.user}
        />

        {/* if path matches '/about', render About component, otherwise null */}
        {/* <Route
          path="/about/:paintingId"
          render={props => {
            console.log(props);
            return <About />;
          }}
        /> */}
        <Switch>
          <Route
            path="/login"
            render={() => <Login updateUser={this.updateUser} />}
          />
          <Route path="/about" component={About} />
          <Route
            path="/painting/:paintingId"
            render={props => {
              return (
                <PaintingDetails
                  clearPainting={() => this.selectPainting(null)}
                  painting={this.state.paintings.find(
                    painting => painting.id === props.match.params.paintingId
                  )}
                />
              );
            }}
          />
          <Route
            path="/"
            render={() => {
              return (
                <React.Fragment>
                  <Searchbar
                    onChangeHandler={this.onSearchHandler}
                    value={this.state.searchTerm}
                  />
                  <PaintingsList
                    filterTerm={this.state.searchTerm}
                    paintings={this.state.paintings}
                    selectPainting={this.selectPainting}
                  />
                </React.Fragment>
              );
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
