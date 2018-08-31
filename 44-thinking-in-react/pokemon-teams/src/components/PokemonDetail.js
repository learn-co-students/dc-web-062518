import React, { Component } from "react";

const pretendPokemon = {
  height: 20,
  weight: 1000,
  id: 3,
  name: "venusaur",
  abilities: ["overgrow", "chlorophyll"],
  moves: [],
  stats: [
    {
      value: 100,
      name: "special-defense"
    },
    {
      value: 100,
      name: "special-attack"
    },
    {
      value: 83,
      name: "defense"
    },
    {
      value: 82,
      name: "attack"
    },
    {
      value: 80,
      name: "speed"
    },
    {
      value: 80,
      name: "hp"
    }
  ],
  types: ["grass", "poison"],
  sprites: {
    front:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
    back:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/3.png"
  }
};

// React.createElement(name, {props}, undefined)

class PokemonDetail extends Component {
  render() {
    let stats = pretendPokemon.stats.map(stat => {
      return (
        <div key={stat.name}>
          {stat.name}: {stat.value}
        </div>
      );
    });

    return (
      <div style={{ display: "flex", flexDirection: "row", margin: 50 }}>
        <div>
          <img src={pretendPokemon.sprites.front} alt={pretendPokemon.name} />
        </div>
        <div>
          <h2>{pretendPokemon.name}</h2>
          <div className="poke-stats">
            <div>ID: {pretendPokemon.id}</div>
            <div>types: {pretendPokemon.types.join(", ")}</div>
            <div>height: {pretendPokemon.height}</div>
            <div>weight: {pretendPokemon.weight}</div>
            <div>abilities: {pretendPokemon.abilities.join(", ")}</div>
            {stats}
          </div>
        </div>
      </div>
    );
  }
}

export default PokemonDetail;
