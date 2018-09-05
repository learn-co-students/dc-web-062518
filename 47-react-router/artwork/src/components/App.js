import React, { Component } from "react";
import "../App.css";
import NavBar from "./NavBar";
import PaintingsList from "./PaintingsList";
import Searchbar from "./Searchbar";
import PaintingDetails from "./PaintingDetails";

class App extends Component {
  constructor() {
    super();
    this.state = {
      paintings: [],
      searchTerm: "",
      paintingId: null
    };
  }

  componentDidMount() {
    fetch(`http://localhost:3000/paintings`)
      .then(response => response.json())
      .then(paintings => {
        this.setState({ paintings });
      });
  }

  onSearchHandler = event => {
    this.setState({ searchTerm: event.target.value });
  };

  selectPainting = paintingId => {
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
        {this.state.paintingId ? (
          <PaintingDetails
            clearPainting={() => this.selectPainting(null)}
            painting={this.state.paintings.find(
              painting => painting.id === this.state.paintingId
            )}
          />
        ) : null}
        <Searchbar
          onChangeHandler={this.onSearchHandler}
          value={this.state.searchTerm}
        />
        <PaintingsList
          filterTerm={this.state.searchTerm}
          paintings={this.state.paintings}
          selectPainting={this.selectPainting}
        />
      </div>
    );
  }
}

export default App;
