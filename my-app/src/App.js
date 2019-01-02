import React, { Component } from 'react';

import './App.css';
import Header from './component/header';
import Content from './component/content';
import Footer from './component/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
       
      <Header/>
      <Content/>
      <Footer/>
      </div>
    );
  }
}

export default App;
