import React, { Component } from 'react';

class Header extends Component {
  render () {
    return ( 
      <header style={headerStyle}>
        <h1>Customers</h1>
        <a href='#' style={logOutStyle}>Log out</a>
      </header>
      );
  }
}

const headerStyle = {
  color: '#fff',
  backgroundColor: '#FF7F00',
  float: 'left',
  padding: '0px 0px 0px 20px'
}

const logOutStyle = {
  textDecoration: 'none',
  float: 'right'
}

export default Header;
