import React, { Component } from 'react';

class BandInput extends Component {

    constructor(props) {
    super(props);

    this.state = {
      text: ''
    };
  }

  handleChange(event) {
    this.setState({
      text: event.target.value,
    });
  };

  handleSubmit(event) {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_BAND',
      band: this.state.text,
    });
    this.setState({
      text: '',
    });
  };

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
