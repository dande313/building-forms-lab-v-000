import React, { Component } from 'react';

class BandInput extends Component {
  render() {

    const bands = this.props.store.getState().bands.map((band, index) => {
      return <li key={index}>{band}</li>
    })
    return (
      <ul>
        {bands}
      </ul>
    );
  }
};

export default BandInput;
