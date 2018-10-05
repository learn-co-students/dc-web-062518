import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor() {
    super()
    this.state = {
    eatenSushi: [],
    allSushi: [],
    walletValue: 100,
    initialValue: 0
  }
  }

  componentDidMount() {
    fetch(API).then(r => r.json()).then(sushi => this.setState({allSushi: sushi}))

  }

  eatSushi = (sushi) => {
    if(this.state.walletValue >= sushi.price) {
    let newWalletValue = this.state.walletValue - sushi.price
    this.setState({
      eatenSushi: [...this.state.eatenSushi, sushi],
      walletValue: newWalletValue
    })
  }
  }

  moreSushi = () => {
    let initialValue = this.state.initialValue + 4
    this.setState({
      initialValue: initialValue
    })
  }
  render() {
    return (
      <div className="app">
        <SushiContainer
          sushis={this.state.allSushi.slice(this.state.initialValue, this.state.initialValue + 4)}
          eatSushi={this.eatSushi}
          moreSushi={this.moreSushi}
          eatenSushi={this.state.eatenSushi}
        />
        <Table
          eatenSushi={this.state.eatenSushi}
          amountLeft={this.state.walletValue}
        />
      </div>
    );
  }
}

export default App;
