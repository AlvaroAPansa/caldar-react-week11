import React, { Component } from 'react';
import FormHeader from './FormHeader';
import FormInput from './FormInput';

class AddCustomerForm extends Component {
  state = {
    id: ''
  };

  render () {
    return (
      <form style={formStyle}>
        <FormHeader />
        <FormInput name='ID' type='text' />
      </form>
    );
  }
}

const formStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  alignComponents: 'flex-start',
  width: '700px',
  height: '550px',
  margin: 'auto',
  marginTop: '10px',
  boxShadow: '7px 7px 5px grey'
}

export default AddCustomerForm;