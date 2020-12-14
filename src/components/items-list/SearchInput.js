import React, { Component } from 'react';

class SearchInput extends Component {
  render() {
    return (
      <div style={searchContainerStyle}>
        <i className='material-icons'>
          search
        </i>
        <input style={searchInputStyle} type='text' placeholder="Search" /> 
      </div>
    )
  }
}

const searchContainerStyle = {
  display: 'flex',
  justifyContent: 'flex-end',
  flexBasis: '100%',
  padding: '0px 20px'
}

const searchInputStyle = {
  borderStyle: 'none',
  borderBottom: '2px solid grey'
}

export default SearchInput;