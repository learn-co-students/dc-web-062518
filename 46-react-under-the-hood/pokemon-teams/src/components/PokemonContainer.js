import React from "react";
import PokemonCard from "./PokemonCard";

class PokemonContainer extends React.Component {
  render() {
    return (
      <div style={{ width: "100vw" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            margin: 50
          }}
        >
          {this.props.pokemons.map(pokemon => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      </div>
    );
  }
}

export default PokemonContainer;
