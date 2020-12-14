import React, { Component } from 'react';
import Item from './Item';

class ItemsList extends Component {
  render () {
    return this.props.customers.map((customer) => (
      <Item key={customer.id} customer={customer} />
    ));
  }
}

export default ItemsList;