import React, { Component } from 'react';

class BuildingButton extends Component {

  render () {
    const { name } = this.props;
    return (
    <div style={buttonsContainer}>
      <button type='button' style={buttonStyle}>
        {name}
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
  margin: '5px 0px 0px 450px'
}

export default BuildingButton;