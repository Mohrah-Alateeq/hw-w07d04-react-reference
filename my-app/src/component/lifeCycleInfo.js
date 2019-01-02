import React, { Component } from 'react';

class LifeCycleInfo extends Component {
  render() {
    return (
      <div className="LifeCycleInfo">
        <h3>LifeCycleInfo</h3>
        <h4> Some Methods : </h4>
        <ol>
            <li>componentDidMount()</li>
            <li>componentWillUnmount()</li>
        </ol>

      </div>
    )
  }
}

export default LifeCycleInfo;