import React from "react";
import PaintingsList from "./PaintingsList";
import PaintingDetail from "./PaintingDetail";
import paintings from "./painting_data";

export default class PaintingsContainer extends React.Component {
  render() {
    return (
      <div>
        <PaintingDetail painting={paintings[0]} />
        <PaintingsList paintings={paintings} />
      </div>
    );
  }
}
