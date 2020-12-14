import React, { Component } from 'react';

class ListHeader extends Component {
  render () {
    return (
      <div style={listHeaderStyle}>
        <p style={idStyle}>ID</p>
        <p style={nameStyle}>Business Name</p>
        <p style={nameStyle}>Email</p>
        <p style={nameStyle}>Phone</p>
        <p style={nameStyle}>Contact</p>
        <p style={nameStyle}>Fiscal Address</p>
        <p style={actionsStyle}>Actions</p>
      </div>
    );
  }
}

const listHeaderStyle = {
  display: 'flex',
  flexBasis: '100%',
  flexWrap: 'nowrap',
  padding: '20px 20px 0px 20px',
  borderBottom: '2px solid grey',
  color: 'orange',
  fontWeight: 'bold'
}

const idStyle = {
  flexBasis: '5%'
}

const nameStyle = {
  flexBasis: '17%'
}

const actionsStyle = {
  flexBasis: '10%'
}

export default ListHeader;