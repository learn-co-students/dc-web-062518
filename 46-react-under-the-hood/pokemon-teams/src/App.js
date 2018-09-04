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
    this.setState(
      state => ({ searchInput: searchInput }),
      () =>
        // called after the state has been set
        console.log(searchInput, this.state.searchInput)
    );
    // fetch
    // searchPokemon(searchInput);
  };

  loadPokemon = () => {
    this.setState({ allPokemon: [] });
    fetch("http://localhost:3001/pokemons")
      .then(res => res.json())
      .then(allPokemon => this.setState({ allPokemon }));
  };

  componentDidMount() {
    this.loadPokemon();
  }

  matchingPokemon = () => {
    // [] => [] (subset)
    return this.state.allPokemon.filter(p =>
      p.name.includes(this.state.searchInput)
    );
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.loadPokemon}>Refresh Pokemon List</button>
        <PokemonContainer pokemons={this.state.team} />
        <PokemonDetail />
        <SearchBar
          value={this.state.searchInput}
          onChange={this.changeSearchInput}
        />
        <PokemonContainer pokemons={this.matchingPokemon()} />
      </div>
    );
  }
}

export default App;
