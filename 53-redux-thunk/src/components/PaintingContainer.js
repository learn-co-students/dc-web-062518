import React, { Component } from "react";
import { connect } from "react-redux";
import PaintingList from "./PaintingList";
import PaintingShow from "./PaintingShow";
import { fetchPaintings } from "../actions";
// NOTE: actions is a directory.
// By default import will look for a file called index.js in any directory

class PaintingContainer extends Component {
  componentDidMount() {
    this.props.fetchPaintings();
  }

  render() {
    return (
      <div className="row">
        <div className="six wide column">
          <PaintingList paintings={this.props.paintings} />
        </div>
        <div className="ten wide column">
          {this.props.activePainting ? (
            <PaintingShow painting={this.props.activePainting} />
          ) : (
            <h3>select a painting</h3>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  paintings: state.activeGallery
    ? state.paintings.filter(
        painting => state.activeGallery === painting.collecting_institution
      )
    : state.paintings,
  activePainting: state.paintings.find(p => p.id === state.activePaintingId)
});

export default connect(
  mapStateToProps,
  { fetchPaintings }
)(PaintingContainer);

// NOTE: here we're using the shorthand syntax for mapDispatchToProps
// (This is the recommended way to do this)
// it works like this:
// the second arg to connect is an object where the keys
// are the names of the functions we want as props and the values
// are the appropriate action creator functions
// (action creators are just functions which return actions)
