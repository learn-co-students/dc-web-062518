let title = string => React.createElement("h1", /* props */ {}, string);

let header = (title, description, logo, color) =>
  React.createElement(
    "div",
    { className: `ui inverted ${color} menu` },
    React.createElement(
      "a",
      { className: "item" },
      React.createElement("h2", { className: "ui header" }, [
        React.createElement("i", { className: `${logo} icon` }, null),
        React.createElement("div", { className: "content" }, title),
        React.createElement("div", { className: "sub header" }, description)
      ])
    )
  );

ReactDOM.render(
  header("Trainr", "Manage trains at the station", "train", "yellow"),
  document.querySelector("#main")
);
