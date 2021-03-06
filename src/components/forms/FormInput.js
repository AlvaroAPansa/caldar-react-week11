import React, { Component } from 'react';

class FormInput extends Component {

  render () {
    const { name, type } = this.props;
    return (
      <div style={inputStyle}>
        <label htmlFor={name}>
          {name} <br />
          <input type={type} id={name} name={name} style={inputComponentsStyle} />
        </label>
      </div>
    );
  }
}

const inputStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  flexBasis: '50%',
  padding: '20px 0px'
}

const inputComponentsStyle = {
  width: '100%'
}

export default FormInput;