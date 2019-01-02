import React, { Component } from 'react';
import ComponentInfo from './componentInfo';
import JsxInfo from './JSXInfo';

class Content extends Component {
  render() {
    return (
      <div className="Content">
        <h3>Content</h3>
        <ComponentInfo/>
        <JsxInfo/>
      </div>
    )
  }
}

export default Content;