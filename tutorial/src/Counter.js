import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     number: 0,
  //     fixnumber: 0,
  //   };
  // }
  state = {
    number: 0,
    fixnumber: 0,
  };
  render() {
    const { number, fixnumber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값 : {fixnumber}</h2>
        <button
          onClick={() => {
            this.setState({ number: number + 1 });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

Counter.propTypes = {};

export default Counter;
