import React, { Component } from 'react';
import CSSModule from './CSSModule';
import SassComponent from './SassComponent';
import StyledComponent from './StyledComponent';

class App extends Component {
  render() {
    return (
      <div>
        <CSSModule />
        <hr />
        <StyledComponent />
      </div>
    );
  }
}

export default App;
