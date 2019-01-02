import React, { Component } from 'react';
import LifeCycleInfo from './lifeCycleInfo';
import StateInfo from './stateInfo';
import PropsInfo from './propsInfo';

class ComponentInfo extends Component {
  render() {
    return (
      <div className="Component-Info">
        <h3>Component</h3>
        <p>Components let you split the UI into independent,
         reusable pieces, and think about each piece in isolation.</p>

        <PropsInfo/>
        <StateInfo/> 
        <LifeCycleInfo/>
        

      </div>
    )
  }
}

export default ComponentInfo;