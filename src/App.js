import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './components/layout/Header';
import Content from './components/items-list/Content';
import AddCustomerForm from './components/forms/AddCustomerForm';

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
      <Router>
        <div className="App">
          <Header />
          <Route exact path='/'>
            <Content customers={this.state.customers} />
          </Route>
          <Route path='/addCustomer'>
            <AddCustomerForm />
          </Route>
        </div>
      </Router>
    );
  }
}

export default App;
