import React from "react";

class HogTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
  }

  getHogImg = () => {
    const nameOfFile = this.props.hog.name
      .toLowerCase()
      .split(" ")
      .join("_");
    const hog = require(`../hog-imgs/${nameOfFile}.jpg`);
    return hog;
  };

  handleButtonClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    const { name, specialty } = this.props.hog;
    const weight = this.props.hog[
      "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
    ];
    const medal = this.props.hog["highest medal achieved"];

    return (
      <div className="ui card four wide column">
        <div className="image">
          <img
            style={{ margin: "auto", height: 200, width: 200 }}
            src={this.getHogImg()}
          />
        </div>
        <div className="content">
          <h3 className="header">{name}</h3>
          <button onClick={this.handleButtonClick}>
            {this.state.clicked ? "Hide Details" : "More Details"}
          </button>
          {this.state.clicked ? (
            <div className="meta">
              <p>Specialty: {specialty}</p>
              <p>Highest medal achived: {medal}</p>
              <p>
                weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door
                Refrigerator with Thru-the-Door Ice and Water:
                {weight}
              </p>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default HogTile;
