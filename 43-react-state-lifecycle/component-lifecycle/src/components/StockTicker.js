import React, { Component } from "react";

class StockTicker extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    // cleanup on aisle setInterval!!!
    console.log("mount");
    this.interval = setInterval(this.updateTicker, 1000);
  }

  componentWillUnmount() {
    console.log("unmount");
    clearInterval(this.interval);
  }

  updateTicker = () => {
    this.setState({ value: Math.floor(Math.random() * 100) });
  };

  render() {
    return (
      <div className="app-children">
        <div id="ticker">
          <h2>Flatiron</h2>
          <div style={{ color: "black" }}>{this.state.value}</div>
        </div>
      </div>
    );
  }
}

export default StockTicker;
