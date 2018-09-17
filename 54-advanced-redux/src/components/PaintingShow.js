import React from "react";
import { deletePainting } from "../redux/actions";
import { connect } from "react-redux";

const PaintingShow = props => {
  let { painting } = props;
  return (
    <div className="ui card">
      <div className="image">
        <img src={painting.image} alt={painting.slug} />
      </div>
      <div className="content">
        <div className="header">{painting.title}</div>
        <div className="meta">{painting.date}</div>
        <div className="meta">
          {painting.dimensions.width} in. x {painting.dimensions.height} in.
        </div>
        <div className="meta">{painting.collecting_institution}</div>
        <div className="description">
          by {painting.artist.name}
          <p>
            {painting.artist.birthday} - {painting.artist.deathday}
          </p>
          <p>{painting.artist.hometown}</p>
        </div>
        <div
          onClick={() => props.deletePainting(painting.id)}
          className="ui basic red right aligned button"
        >
          Delete
        </div>
      </div>
    </div>
  );
};

export default connect(
  null,
  { deletePainting }
)(PaintingShow);
