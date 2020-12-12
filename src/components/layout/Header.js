import React, { Component } from 'react';

class Header extends Component {
  render () {
    return ( 
      <header style={headerStyle}>
        <h1 style={titleStyle}>Customers</h1>
        <a href='#' style={logOutStyle}>Log out</a>
      </header>
      );
  }
}

const headerStyle = {
  color: '#fff',
  width: '100%',
  backgroundColor: '#FF7F00',
  float: 'left'
}

const titleStyle = {

}

const logOutStyle = {
  textDecoration: 'none',
  float: 'right'
}

export default Header;
