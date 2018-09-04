import React from "react";

const SearchBar = props => {
  return (
    <div>
      <input
        style={{ height: 36, width: 400, fontSize: 24 }}
        value={props.value}
        onChange={e => props.onChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
