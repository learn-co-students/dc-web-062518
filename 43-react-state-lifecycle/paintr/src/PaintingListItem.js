import React from "react";

export default class PaintingListItem extends React.Component {
  constructor() {
    super();
    // console.log("constructor", "PaintingsListItem");
  }

  componentDidMount() {
    // what should we do here?
    // errors?
    // initial setup which doesn't belong in the constructor
    // - fetch some data
    // - hook in an external library
    // - set up a timer
    console.log("componentDidMount", "PaintingsListItem");
  }

  render() {
    // console.log(this.props);
    console.log("render", "PaintingsListItem");
    return (
      <div onClick={() => this.props.handleClick(this.props.painting.id)}>
        {this.props.painting.title}
      </div>
    );
  }
}
