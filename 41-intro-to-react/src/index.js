import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";

ReactDOM.render(
  <Header
    title="Trainr"
    description="Manage trains at the station"
    logo="train"
    color="yellow"
  />,
  document.querySelector("#main")
);
