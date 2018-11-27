import React from 'react';

class Input extends React.Component {
    constructor(props) {
      super(props);
      this.state = { term: "" };
      this.updateInput = this.updateInput.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    updateInput(event) {
      this.setState({ term: event.target.value });
      console.log("The updateInput function submit says: Your input value is: " + event.target.value);
    }
  
    handleSubmit() {
      console.log("The handleSubmit function says: Your input value is: " + this.state.term);
      this.props.onInputSubmit(this.state.term);
    }
  
    render() {
      return (
        <div>
          <input type="text" onChange={this.updateInput} />
          <input type="submit" value="give gif" onClick={this.handleSubmit} />
        </div>
      );
    }
  }