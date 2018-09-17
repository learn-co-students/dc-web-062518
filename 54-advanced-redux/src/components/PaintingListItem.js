import React from "react";
import { connect } from "react-redux";
import { selectPainting } from "../redux/actions";

const PaintingListItem = props => {
  return (
    <div
      onClick={() => props.selectPainting(props.painting.id)}
      style={{ backgroundColor: props.highlighted ? "grey" : "white" }}
      className="ui item"
    >
      <span style={{ cursor: "pointer" }}>
        <span className="ui sub header">{props.painting.title}</span>
        <span className="ui label">
          {props.painting.collecting_institution || "Unknown Gallery"}
        </span>
      </span>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    highlighted: state.activePaintingId === ownProps.painting.id
  };
};

export default connect(
  mapStateToProps,
  { selectPainting }
)(PaintingListItem);
