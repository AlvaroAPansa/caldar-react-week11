import React, { Component } from 'react';

class ConfirmButton extends Component {

  render () {
    return (
      <div style={buttonsContainer}>
        <button type='button' style={buttonStyle}>
          Confirm
        </button>
      </div>
    );
  }
}

const buttonsContainer = {
  flexBasis: '100%'
}

const buttonStyle = {
  width: '20%',
  margin: '5px 0px 0px 300px'
}

export default ConfirmButton;