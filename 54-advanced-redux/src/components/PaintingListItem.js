import React from "react";
// import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { selectPainting } from "../actions";

const PaintingListItem = props => {
  // console.log(props.painting.museum.name);
  return (
    <div
      onClick={() => props.selectPainting(props.painting.id)}
      className="ui item"
    >
      <span style={{ cursor: "pointer" }}>
        <span className="ui sub header">{props.painting.title}</span>
        <span className="ui label">
          {props.painting.collecting_institution}
        </span>
      </span>
    </div>
  );
};

// parent => { painting: { paintingData } }
// store (mapStateToProps) => { name: 'Rob', count: 4 }
// actions (mapDispatchToProps) => { selectPainting: some function that does our action }
// connect => {  painting: { paintingData },  name: 'Rob', count: 4,  selectPainting: some function that does our action }

// const mapDispatchToProps = dispatch => {
//   return {
//     selectPaintingProp: (...allTheArgs) =>
//       dispatch(selectPaintingActionCreator(...allTheArgs))
//   };
// };

// const mapDispatchToProps = function(dispatch) {
//   return bindActionCreators(
//     {
//       selectPainting: selectPaintingActionCreator
//     },
//     dispatch
//   );
// }

export default connect(
  null,
  { selectPainting }
)(PaintingListItem);
