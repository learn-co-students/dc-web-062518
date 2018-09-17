import React from "react";
import { connect } from "react-redux";
import { selectGallery } from "../actions";

const galleries = [
  "National Gallery of Art, Washington D.C.",
  "Mauritshuis, The Hague"
];

// galleries - nice to have them coming in from the data
// show as active the one we click
const MuseumPicker = ({ activeGallery, selectGallery }) => {
  return (
    <div className="row">
      <div className="ui inverted menu">
        <div
          onClick={() => selectGallery(null)}
          className={activeGallery === null ? "ui active item" : "item"}
        >
          All Museums
        </div>
        {galleries.map(gallery => (
          <div
            key={gallery}
            onClick={() => selectGallery(gallery)}
            className={activeGallery === gallery ? "ui active item" : "item"}
          >
            {gallery}
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    activeGallery: state.activeGallery
  };
};

export default connect(
  mapStateToProps,
  { selectGallery }
)(MuseumPicker);
