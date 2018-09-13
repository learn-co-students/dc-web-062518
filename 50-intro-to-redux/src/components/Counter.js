import React, { Component } from "react";
import store from "../redux/store";
import Textbox from "./Textbox";

export default class Counter extends Component {
  // decrement = amount => {
  // action: type
  // { type: 'DECREMENT' }
  // store.dispatch({ type: "DECREMENT", amount: amount });
  // };

  update = amount => {
    store.dispatch({ type: "UPDATE", amount: amount });
  };

  render() {
    return (
      <div className="Counter">
        <Textbox />
        <h1>{store.getState().count}</h1>
        <button onClick={() => this.update(-5)}> - 5 </button>
        <button onClick={() => this.update(-1)}> - </button>
        <button onClick={() => this.update(1)}> + </button>
        <button onClick={() => this.update(3)}> + 3 </button>
      </div>
    );
  }
}
