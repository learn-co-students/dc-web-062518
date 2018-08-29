import React from "react";
import PaintingListItem from "./PaintingListItem";

export default class PaintingsList extends React.Component {
  constructor() {
    super();
    // console.log("constructor", "PaintingsList");
  }

  componentDidMount() {
    console.log("componentDidMount", "PaintingsList");
  }
  render() {
    // console.log(this.props);
    console.log("render", "PaintingsList");
    return (
      <div>
        {this.props.paintings.map(p => (
          <PaintingListItem
            handleClick={this.props.handleSelect}
            painting={p}
            key={p.id}
          />
        ))}
      </div>
    );
  }
}
