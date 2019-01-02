import React, { Component } from 'react';

class StateInfo extends Component {
  render() {
    return (
      <div className="State-Info">
        <h3>StateInfo</h3>
        <p>Properties are defined when components are created, whether by JSX or by pure JavaScript. State, on the other hand, is only seen on the inside of component definitions. This is the first, and most important difference between the two.
	            When you think of properties, you should be thinking of component initialisation. When you think of state, you should think of an internal data-set which affects the rendering of components.</p>
      </div>
    )
  }
}

export default StateInfo;