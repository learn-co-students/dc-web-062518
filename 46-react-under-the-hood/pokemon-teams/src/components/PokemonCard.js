import React from "react";

class PokemonCard extends React.Component {
  render() {
    return (
      <div
        style={{
          margin: 20,
          backgroundColor: "yellow",
          padding: 20,
          border: "1px solid black"
        }}
      >
        <img
          src={this.props.pokemon.sprites.front}
          alt={this.props.pokemon.name}
        />
        <h2>{this.props.pokemon.name}</h2>
      </div>
    );
  }
}

export default PokemonCard;
