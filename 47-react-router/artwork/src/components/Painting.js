import React from "react";
import { Link } from "react-router-dom";

const Painting = ({ painting, selectPainting }) => {
  return (
    <div className="ui card">
      <div>
        <img
          style={{ marginTop: 20 }}
          src={painting.image}
          alt={painting.title}
        />
        <div style={{ marginTop: 0 }} className="ui small header">
          {painting.title}
        </div>
      </div>
      <Link className="ui button" to={`/painting/${painting.id}`}>
        More Info
      </Link>
    </div>
  );
};

export default Painting;
