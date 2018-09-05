import React from "react";
import Painting from "./Painting";

const PaintingsList = ({ filterTerm, paintings, selectPainting }) => {
  let filteredPaintings = paintings.filter(painting =>
    painting.title.toLowerCase().includes(filterTerm.toLowerCase())
  );
  return filteredPaintings.map(painting => (
    <Painting
      key={painting.id}
      painting={painting}
      selectPainting={selectPainting}
    />
  ));
};

export default PaintingsList;
