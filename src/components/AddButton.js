import React, { Component } from 'react';

class AddButton extends Component {
  render () {
    return (
      <button type='button' style={addButtonStyle}>
        +
      </button>
    );
  }
}

const addButtonStyle = {
  float: 'right',
  width: '70px',
  height: '70px',
  margin: '17px 40px 0px 0px',
  fontSize: '50px',
  color: 'white',
  backgroundColor: '#FF7F00',
  borderStyle: 'none',
  borderRadius: '50%',
  cursor: 'pointer'
}

export default AddButton;