import React from "react";
import PaintingsList from "./PaintingsList";
import PaintingDetail from "./PaintingDetail";
import paintings from "./painting_data";

export default class PaintingsContainer extends React.Component {
  constructor(props) {
    super(props);
    // state _shape_
    // activePainting - painting object
    // activePaintingTitle - would need to find the painting again
    // activePaintingKey
    // activePaintingId - (safer), ensures that painting is on the list, single source of truth
    // allpaintings  - []painting objects
    this.state = {
      activePaintingId: paintings[0].id,
      allPaintings: paintings
    };
    // this.selectPainting = this.selectPainting.bind(this);
  }

  findPainting(id) {
    // map filter forEach
    return this.state.allPaintings.find(painting => painting.id === id);
  }

  selectPainting = paintingId => {
    // here!
    this.setState({ activePaintingId: paintingId });
    // console.log("selectPainting", paintingId, this);
  };

  increaseVotes = id => {
    // before
    //  { activePaintingId, allPaintings[5].votes }
    // after
    // { activePaintingId, allPaintings[5].votes + 1 }

    // console.log("increaseVotes", id, this.findPainting(id));
    let paintingsArray = this.state.allPaintings.map(painting => {
      if (painting.id === id) {
        return { ...painting, votes: painting.votes + 1 };
      } else {
        return painting;
      }
    });

    this.setState({
      allPaintings: paintingsArray
    });
  };

  componentDidMount() {
    console.log("componentDidMount", "PaintingsContainer");
  }

  render() {
    console.log("render", "PaintingsContainer");
    return (
      <div>
        <PaintingDetail
          painting={this.findPainting(this.state.activePaintingId)}
          handleVote={this.increaseVotes}
        />
        <PaintingsList
          handleSelect={this.selectPainting}
          paintings={this.state.allPaintings}
        />
      </div>
    );
  }
}
