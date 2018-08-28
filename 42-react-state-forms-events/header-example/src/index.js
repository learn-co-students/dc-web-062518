import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";

ReactDOM.render(
  <div>
    <Header
      title="Trainr"
      description="Manage trains at the station"
      logo="train"
      color="yellow"
    />
    <Header
      title="Paintr"
      description="Only the best masterpiece paintings"
      logo="paint brush"
      color="blue"
    />
  </div>,
  document.querySelector("#main")
);
