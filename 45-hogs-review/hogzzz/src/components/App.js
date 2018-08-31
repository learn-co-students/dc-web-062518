import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import HogList from "./HogList";
import Filter from "./Filter";
import hogs from "../porkers_data";

class App extends Component {
  state = {
    sort: "none", // 'none', 'name', 'weight'
    filter: "all" // 'all', 'greased', 'not-greased'
  };

  // should this take in the event?
  changeFilter = newFilter => {
    this.setState({ filter: newFilter });
  };

  changeSort = newSort => {
    this.setState({ sort: newSort });
  };

  filterHogs = list => {
    // 'all', 'greased', 'not-greased'
    if (this.state.filter === "all") {
      return list;
    } else if (this.state.filter === "greased") {
      // hogs = [{ name: , greased: true }]
      return list.filter(hog => hog.greased === true);
    } else {
      return list.filter(hog => hog.greased === false);
    }
  };

  sortHogs = list => {
    // 'none', 'name', 'weight'
    if (this.state.sort === "none") {
      return list;
    } else if (this.state.sort === "name") {
      // list sorted by name
      return list.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        } else if (b.name > a.name) {
          return -1;
        } else {
          return 0;
        }
      });
    } else {
      // list sorted by weight
      return list.sort((a, b) => {
        if (
          a[
            "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
          ] >
          b[
            "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
          ]
        ) {
          return 1;
        } else if (
          b[
            "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
          ] >
          a[
            "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
          ]
        ) {
          return -1;
        } else {
          return 0;
        }
      });
    }
  };

  render() {
    return (
      <div className="App">
        <Nav />
        <Filter
          activeFilter={this.state.filter}
          changeFilter={this.changeFilter}
          changeSort={this.changeSort}
        />
        <HogList hogs={this.sortHogs(this.filterHogs(hogs))} />
      </div>
    );
  }
}

export default App;
