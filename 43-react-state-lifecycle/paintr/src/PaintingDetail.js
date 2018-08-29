import React from "react";

export default class PaintingDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {
      image,
      title,
      artist,
      museum,
      dimensions,
      votes
    } = this.props.painting;
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
          <span>{votes}</span>
          <button
            onClick={e => {
              this.props.handleVote(this.props.painting.id);
            }}
          >
            Vote
          </button>
        </div>
      </div>
    );
  }
}
