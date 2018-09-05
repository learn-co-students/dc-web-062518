import React from "react";

const Searchbar = props => {
  return (
    <div>
      <div className="ui large icon input">
        <input
          type="text"
          onChange={props.onChangeHandler}
          value={props.value}
        />
        <i className="search icon" />
      </div>
    </div>
  );
};

export default Searchbar;
