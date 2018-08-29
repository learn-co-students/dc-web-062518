import React, { Component } from "react";
import StockTicker from "./StockTicker";
import DigitalClock from "./DigitalClock";

class WidgetSelector extends Component {
  constructor() {
    super();
    this.state = {
      widget: "stock"
    };
  }
  render() {
    return (
      <div className="app-children">
        <button onClick={() => this.setState({ widget: "clock" })}>
          Clock
        </button>
        <button onClick={() => this.setState({ widget: "stock" })}>
          Stock
        </button>
        {this.state.widget === "stock" ? <StockTicker /> : <DigitalClock />}
      </div>
    );
  }
}

export default WidgetSelector;
