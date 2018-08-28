import React from "react";

export default class PaintingDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: this.props.painting.votes
    };
  }

  render() {
    let { image, title, artist, museum, dimensions } = this.props.painting;
    return (
      <div>
        <img src={image} />
        <h2>{title}</h2>
        <h3>
          {artist.name} {artist.birthday}-{artist.deathday}
        </h3>
        <h3>{museum.name}</h3>
        <h3>
          {dimensions.width} x {dimensions.height}
        </h3>

        <div>
          <span>{this.state.votes}</span>
          <button
            onClick={e => {
              this.setState({ votes: this.state.votes + 1 });
            }}
          >
            Vote
          </button>
        </div>
      </div>
    );
  }
}
