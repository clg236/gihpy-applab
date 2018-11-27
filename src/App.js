import React from 'react';
import './App.css';
import Input from './Components/Input'

class App extends React.Component {
  handleInputSubmit(term) {
    console.log(`the app component is getting back: ${term}`);
  }

  render() {
    return (
      <div>
        <Input onInputSubmit={this.handleInputSubmit} />
      </div>
    );
  }
}

export default App;
