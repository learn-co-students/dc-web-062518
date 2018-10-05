import React, { Component } from 'react';
import './App.css';
import WordsContainer from './components/WordsContainer'
import { fetchWords } from "./redux/actions"
import { connect } from 'react-redux'


class App extends Component {
  render() {
    return (
      <WordsContainer />
    );
  }
}

export default App
