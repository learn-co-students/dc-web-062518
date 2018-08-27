let title = string => React.createElement("h1", /* props */ {}, string);

let header = (title, description, logo, color) =>
  React.createElement("div", {}, [
    React.createElement("div", {}, title),
    React.createElement("div", {}, description)
  ]);

ReactDOM.render(
  header("ZooKeepr", "Keeping track of animals"),
  document.querySelector("#main")
);
