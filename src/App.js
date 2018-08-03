import React, { Component } from 'react';
import MoviesContainer from './Users/Container';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <MoviesContainer />
      </div>
    );
  }
}

export default App;
