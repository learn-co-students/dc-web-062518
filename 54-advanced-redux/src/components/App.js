import React, { Component } from "react";
import PaintingContainer from "./PaintingContainer";
import MuseumPicker from "./MuseumPicker";
import { connect } from "react-redux";

const Error = props => <span style={{ color: "red" }}>{props.error}</span>;

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="ui grid container">
          <MuseumPicker />
          {this.props.error ? <Error error={this.props.error} /> : null}
          <PaintingContainer />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  error: state.error
});

export default connect(mapStateToProps)(App);
