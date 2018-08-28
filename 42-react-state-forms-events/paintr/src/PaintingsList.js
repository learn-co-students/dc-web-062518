import React from "react";
import PaintingListItem from "./PaintingListItem";

export default class PaintingsList extends React.Component {
  render() {
    return (
      <div>
        {this.props.paintings.map(p => (
          <PaintingListItem painting={p} key={p.id} />
        ))}
      </div>
    );
  }
}
