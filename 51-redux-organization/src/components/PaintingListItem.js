import React from "react";
// import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { selectPainting } from "../actions";

const PaintingListItem = props => {
  return (
    <div
      onClick={() => props.selectPainting(props.painting.id)}
      className="ui item"
    >
      <span style={{ cursor: "pointer" }}>{props.painting.title}</span>
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
