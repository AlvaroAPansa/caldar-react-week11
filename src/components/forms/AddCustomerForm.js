import React, { Component } from 'react';
import BuildingButton from './BuildingButton';
import ConfirmButton from './ConfirmButton';
import FormHeader from './FormHeader';
import FormInput from './FormInput';
import ListInput from './ListInput';

class AddCustomerForm extends Component {
  state = {
    id: '',
    contact: '',
    customerType: '',
    fiscalAddress: '',
    email: '',
    buildingsId: []
  };

  render () {
    return (
      <form style={formStyle}>
        <FormHeader />
        <FormInput name='ID' type='text' />
        <FormInput name='Contact Name' type='text' />
        <ListInput name='Customer Type' />    
        <FormInput name='Fiscal Address' type='text' />
        <FormInput name='Email' type='email' />
        <FormInput name='Buildings' type='text' />
        <BuildingButton name='Add Building' />
        <BuildingButton name='Edit Building' />
        <ConfirmButton />
      </form>
    );
  }
}

const formStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  alignContent: 'flex-start',
  width: '700px',
  height: '550px',
  margin: 'auto',
  marginTop: '10px',
  boxShadow: '7px 7px 5px grey'
}

export default AddCustomerForm;