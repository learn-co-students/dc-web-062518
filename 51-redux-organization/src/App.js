import React, { Component } from "react";
import PaintingContainer from "./components/PaintingContainer";
import MuseumPicker from "./components/MuseumPicker";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="ui grid container">
          <MuseumPicker />
          <PaintingContainer />
        </div>
      </div>
    );
  }
}

export default App;
