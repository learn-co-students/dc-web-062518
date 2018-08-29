import React from "react";

export default class PaintingListItem extends React.Component {
  render() {
    return (
      <div onClick={() => console.log("clicked", this.props.painting.title)}>
        {this.props.painting.title}
      </div>
    );
  }
}
