import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import "../App.css";
import NavBar from "./NavBar";
import PaintingsList from "./PaintingsList";
import Searchbar from "./Searchbar";
import PaintingDetails from "./PaintingDetails";
import About from "./About";
import Login from "./Login";

class App extends Component {
  constructor() {
    super();
    this.state = {
      paintings: [],
      searchTerm: ""
      // paintingId: null
    };
  }

  componentDidMount() {
    fetch(`http://localhost:3000/paintings`)
      .then(response => response.json())
      .then(paintings => {
        console.log(paintings);
        this.setState({ paintings });
      });
  }

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
          <Route path="/login" component={Login} />
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
