import React, { Component } from 'react';

class Bands extends Component {



  
  render(){
    return (
      <form onSubmit={(event) => this.handleSubmit(event)}>
        <p>
          <label><strong>Band </strong></label>
            <input type="text" value={this.state.text}
            onChange={(event) => this.handleChange(event)} />
        </p>
        <input type="submit" />
      </form>
    );
  }
};

export default Bands;
