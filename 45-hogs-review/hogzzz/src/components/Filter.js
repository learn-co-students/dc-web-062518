import React from "react";

// class Filter extends React.Component {
// }

// when it doesn't have any state
// when it doesn't use any lifecycle methods
// better to use a function

// const Filter = function(props) {
//  return <div>Filter</div>;
// };

const Filter = props => {
  return (
    <div className="filterWrapper">
      <form>
        <label>Sort By: </label>
        <select name="sort" onChange={e => props.changeSort(e.target.value)}>
          <option value="none">None</option>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
        <div
          onChange={e => {
            e.stopPropagation();
            props.changeFilter(e.target.value);
          }}
        >
          {/* these need to know which one is selected from App state */}
          <label>All?</label>
          <input
            type="radio"
            name="filter"
            value="all"
            defaultChecked={props.activeFilter === "all"}
          />
          <label>Greased Pigs Only?</label>
          <input
            type="radio"
            name="filter"
            value="greased"
            defaultChecked={props.activeFilter === "greased"}
          />
          <label>Ungreased Pigs Only?</label>
          <input
            type="radio"
            name="filter"
            value="not-greased"
            defaultChecked={props.activeFilter === "not-greased"}
          />
        </div>
      </form>
    </div>
  );
};

export default Filter;
