import React, { Component } from 'react';

class ListInput extends Component {

  render () {
    const { name } = this.props;
    return (
      <div style={inputStyle}>
        <label htmlFor={name} style={inputComponentsStyle}>
          {name} <br />
          <input list='types' id={name} name={name} />
        </label>
        <datalist id='types'>
          <option value='Particular' />
          <option value='Construciton Company' />
        </datalist>
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

export default ListInput;