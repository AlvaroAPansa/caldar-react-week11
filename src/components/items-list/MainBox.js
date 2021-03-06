import React, { Component } from 'react';
import SearchInput from './SearchInput';
import ListHeader from './ListHeader';
import ItemsList from './ItemsList';

class MainBox extends Component {
  render () {
    return (
      <div style={boxStyle}>
        <SearchInput />
        <ListHeader />
        <ItemsList customers={this.props.customers} />
      </div>
    );
  }
}

const boxStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'flex-start',
  alignContent: 'flex-start',
  margin: 'auto',
  padding: '60px 0px 0px 0px',
  width: '90%',
  height: '500px',
  boxShadow: '7px 7px 5px grey'
}

export default MainBox;