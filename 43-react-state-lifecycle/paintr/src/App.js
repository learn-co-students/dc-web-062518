import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import PaintingsContainer from "./PaintingsContainer";

// js for the header

// React.createElement(Header, { title: "Paintr", descr
class App extends Component {
  componentDidMount() {
    console.log("componentDidMount", "App");
  }
  render() {
    console.log("render", "App");
    return (
      <div className="App">
        <Header
          title="Paintr"
          description="Only the best paintings"
          logo="paint brush"
          color="blue"
        />
        <PaintingsContainer />
      </div>
    );
  }
}

export default App;
