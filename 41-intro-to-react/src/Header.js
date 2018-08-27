import React, { Component } from "react";

// let title = string => React.createElement("h1", /* props */ {}, string);

// let header = (title, description, logo, color) =>
//   React.createElement(
//     "div",
//     { className: `ui inverted ${color} menu` },
//     React.createElement(
//       "a",
//       { className: "item" },
//       React.createElement("h2", { className: "ui header" }, [
//         React.createElement("i", { className: `${logo} icon` }, null),
//         React.createElement("div", { className: "content" }, title),
//         React.createElement("div", { className: "sub header" }, description)
//       ])
//     )
//   );

// const Header = props => {
//   // console.log("props are: ", props);
//   return (
//     <div className={`ui inverted ${props.color} menu`}>
//       <a className="item">
//         <h2 className="ui header">
//           <i className={`${props.logo} icon`} />
//           <div className="content">{props.title}</div>
//           <div className="sub header">{props.description}</div>
//         </h2>
//       </a>
//     </div>
//   );
// };
//

const names = ["Rob", "Ann", "Hillary"];

export default class Header extends Component {
  render() {
    return (
      <div className={`ui inverted ${this.props.color} menu`}>
        <a className="item">
          <h2 className="ui header">
            <i className={`${this.props.logo} icon`} />
            <div className="content">{this.props.title}</div>
            <div className="sub header">{this.props.description}</div>
            {names.map(name => <span>{name}</span>)}
          </h2>
        </a>
      </div>
    );
  }
}

// export default Header;
