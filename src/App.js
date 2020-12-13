import React, { Component } from 'react';
import './App.css';
import Header from './components/layout/Header';
import Content from './components/Content'

class App extends Component {
  state = {
    customers: []
  };

  componentDidMount() {
    this.setState ({
      customers: require('./mocks/customers.json')
    })
  }
  
  render() {
    return (
      <div className="App">
        <Header />
        <Content customers={this.state.customers} />
      </div>
    );
  }
}

export default App;
