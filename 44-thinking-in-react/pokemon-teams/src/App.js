import React, { Component } from "react";
import "./App.css";
import PokemonDetail from "./components/PokemonDetail";
import SearchBar from "./components/SearchBar";
import PokemonContainer from "./components/PokemonContainer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      team: [],
      allPokemon: [],
      detailPokemonId: null,
      searchInput: ""
    };
  }

  changeSearchInput = searchInput => {
    this.setState({ searchInput });
  };

  componentDidMount() {
    fetch("http://localhost:3001/pokemons")
      .then(res => res.json())
      .then(allPokemon => this.setState({ allPokemon }));
  }

  render() {
    return (
      <div className="App">
        <PokemonContainer pokemons={this.state.team} />
        <PokemonDetail />
        <SearchBar
          value={this.state.searchInput}
          onChange={this.changeSearchInput}
        />
        <PokemonContainer pokemons={this.state.allPokemon} />
      </div>
    );
  }
}

export default App;
