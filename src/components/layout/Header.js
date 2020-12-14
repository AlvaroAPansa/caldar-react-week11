import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render () {
    return ( 
      <header style={headerStyle}>
        <h1 style={titleStyle}>Customers</h1>
        <Link to='/login' style={logOutStyle}>
          Log out
        </Link>
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
