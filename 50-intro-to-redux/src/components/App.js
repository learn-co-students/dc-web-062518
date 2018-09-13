import React, { Component } from "react";
import Header from "./Header";
import Counter from "./Counter";
import store from "../redux/store";
import Textbox from "./Textbox";

class App extends Component {
  componentDidMount() {
    store.subscribe(() => {
      this.forceUpdate();
    });
  }

  render() {
    return (
      <div className="App">
        <Textbox />
        <Header />
        <Counter />
      </div>
    );
  }
}

export default App;
