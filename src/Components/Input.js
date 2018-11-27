import React from 'react';
import '../App.css';

class Input extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        term: ""
      };
  
      this.updateInput = this.updateInput.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    updateInput(event) {
      this.setState({ term: event.target.value });
    }
  
    handleSubmit() {
      console.log("Your input value is: " + this.state.term);
      this.props.onInputSubmit(this.state.term);
    }
  
    render() {
      return (
        <div>
          <input type="text" onChange={this.updateInput} />
          <input type="submit" value = "give gif"onClick={this.handleSubmit} />
        </div>
      );
    }
  }

  export default Input;