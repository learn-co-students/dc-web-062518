import React from "react";

const NavBar = props => {
  return (
    <div className={`ui inverted ${props.color} menu navbar`}>
      <a className="item">
        <h2 className="ui header">
          <i className={`${props.icon} icon`} />
          <div className="content">{props.title}</div>
          <div className="sub header">{props.subtitle}</div>
        </h2>
      </a>
    </div>
  );
};

export default NavBar;
