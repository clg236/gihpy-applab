import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './Components/Input'

class App extends React.Component {
  handleInputSubmit(term) {
    console.log(term);
  }

  render() {
    return (
      <div>
        <Input onInputSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
