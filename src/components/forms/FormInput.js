import React, { Component } from 'react';

class FormInput extends Component {

  render () {
    const { name, type } = this.props;
    return (
      <div style={inputStyle}>
        <label htmlFor={name}>
          {name}
        </label>
        <input type={type} id={name} name={name} />
      </div>
    );
  }
}

const inputStyle = {
  width: '40%',
}

export default FormInput;