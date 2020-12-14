import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FormHeader extends Component {

  render () {
    return (
      <header style={formHeaderStyle}>
        <h2 style={formTitleStyle}>Add a new Customer</h2>
        <Link to='/'>
          <button type='button' style={buttonStyle}>X</button>
        </Link>
      </header>
    );
  }
}

const formHeaderStyle = {
  display: 'flex',
  width: '100%',
  height: '50px',
  color: 'white',
  backgroundColor: '#555',
  alignItems: 'center'
}

const formTitleStyle = {
  flex: '10',
  padding: '0px 10px'
}

const buttonStyle = {
  flex: '1',
  padding: '0px 10px',
  color: 'white',
  backgroundColor: '#555',
  borderStyle: 'none',
  fontWeight: 'bold',
  fontSize: '20px',
  cursor: 'pointer'
}

export default FormHeader;