import React from "react";

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <input
          style={{ height: 36, width: 400, fontSize: 24 }}
          value={this.props.value}
          onChange={e => this.props.onChange(e.target.value)}
        />
      </div>
    );
  }
}

export default SearchBar;
