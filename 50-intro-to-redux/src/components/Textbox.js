import React from "react";
import { connect } from "react-redux";

class Textbox extends React.Component {
  render() {
    console.log(this.props);
    return (
      <textarea
        value={this.props.tV}
        onChange={e => this.props.uT(e.target.value)}
      />
    );
  }
}

// substitute for calling store.getState
const mapStateToProps = state => {
  return { tV: state.textValue };
};

// substitute for calling store.dispatch correctly
const mapDispatchToProps = dispatch => {
  return {
    uT: value => dispatch({ type: "CHANGE_TEXT", value: value })
  };
};

const connectingFunction = connect(
  mapStateToProps,
  mapDispatchToProps
);

const ConnectedTextbox = connectingFunction(Textbox);

export default ConnectedTextbox;

// export default connect(mapStateToProps, mapDispatchToProps)(Textbox)
