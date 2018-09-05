import React from "react";

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
      <button
        className="ui button"
        onClick={() => selectPainting(painting.id)}
        data-painting-id={painting.id}
      >
        More Info
      </button>
    </div>
  );
};

export default Painting;
