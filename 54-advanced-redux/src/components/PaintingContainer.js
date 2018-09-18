import React, { Component } from "react";
import { connect } from "react-redux";
import PaintingList from "./PaintingList";
import PaintingShow from "./PaintingShow";
import { fetchPaintings } from "../redux/actions";

class PaintingContainer extends Component {
  componentDidMount() {
    this.props.fetchPaintings();
  }

  render() {
    return (
      <div className="row">
        <div className="six wide column">
          {this.props.loadingPaintings ? (
            <span> Loading...</span>
          ) : (
            <PaintingList paintings={this.props.paintings} />
          )}
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

const mapStateToProps = state => {
  let nonDeletedPaintings = state.paintings.filter(
    painting => !painting.deleted
  );
  return {
    loadingPaintings: state.loadingPaintings,
    // TODO filter paintings
    paintings: state.activeGallery
      ? nonDeletedPaintings.filter(
          painting => state.activeGallery === painting.collecting_institution
        )
      : nonDeletedPaintings,
    activePainting: state.paintings.find(p => p.id === state.activePaintingId)
  };
};

export default connect(
  mapStateToProps,
  { fetchPaintings }
)(PaintingContainer);
