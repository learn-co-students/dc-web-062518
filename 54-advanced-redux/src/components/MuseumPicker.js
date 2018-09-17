import React from "react";
import { connect } from "react-redux";
import { selectGallery } from "../redux/actions";

// const galleries = [
// "National Gallery of Art, Washington D.C.",
// "Mauritshuis, The Hague"
// ];

// galleries - nice to have them coming in from the data
const MuseumPicker = ({ activeGallery, selectGallery, galleries }) => {
  return (
    <div className="row">
      <div className="ui inverted menu">
        <div
          onClick={() => selectGallery("")}
          className={activeGallery === "" ? "ui active item" : "item"}
        >
          All Museums
        </div>
        <select
          value={activeGallery}
          onChange={e => selectGallery(e.target.value)}
        >
          {galleries.map(gallery => <option key={gallery}>{gallery}</option>)}
        </select>
      </div>
    </div>
  );
};

const uniqMuseums = arr => {
  let uniqueItems = [];
  arr.forEach(item => {
    if (!uniqueItems.includes(item) && item !== "") {
      uniqueItems.push(item);
    }
  });
  return uniqueItems;
};

const mapStateToProps = state => {
  return {
    activeGallery: state.activeGallery,
    galleries: uniqMuseums(
      state.paintings.map(painting => painting.collecting_institution)
    )
  };
};

export default connect(
  mapStateToProps,
  { selectGallery }
)(MuseumPicker);
