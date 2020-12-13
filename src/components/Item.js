import React, { Component } from 'react';

class ListItem extends Component {
  render () {
    const customer = this.props.customer;
    return (
      <div style={listItemStyle}>
        <p style={idStyle}>
          {customer.id}
        </p>
        <p style={nameStyle}>
          {customer.businessName}
        </p>
        <p style={nameStyle}>
          {customer.email}
        </p>
        <p style={nameStyle}>
          {customer.phone}
        </p>
        <p style={nameStyle}>
          {customer.contact}
        </p>
        <p style={nameStyle}>
          {customer.fiscalAddress}
        </p>
        <p style={actionsStyle}>Actions</p>
      </div>
    );
  }
}

const listItemStyle = {
  display: 'flex',
  flexBasis: '100%',
  flexWrap: 'nowrap',
  padding: '2px 20px 0px 20px',
  borderBottom: '2px solid grey'
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

export default ListItem;
