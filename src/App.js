import React, { Component } from 'react';
import './App.css';
import Header from './components/layout/Header';
import Content from './components/Content'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Content />
      </div>
    );
  }
}

export default App;
