import React, { Component } from 'react';

class MainBox extends Component {
  render () {
    return (
      <div style={boxStyle}>
        <p>Text inside the box</p>
      </div>
    );
  }
}

const boxStyle = {
  margin: 'auto',
  padding: '120px 0px 0px 0px',
  width: '90%',
  height: '500px',
  boxShadow: '7px 7px 5px grey'
}

export default MainBox;