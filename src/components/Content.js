import React, { Component } from 'react';
import MainBox from './MainBox';

class Content extends Component {
  render () {
    return (
      <div style={boxStyle}>
        <MainBox />
      </div>
    );
  }
}

const boxStyle = {
  position: 'static'
}

export default Content;