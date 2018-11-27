import React from 'react';
import './App.css';
import Input from './Components/Input';
import { List } from './Components/List';
import superagent from 'superagent';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: []
    };
  }

  handleInputSubmit = term => {
    console.log(term);
    console.log(this.props.gifs);
    const url = `https://api.giphy.com/v1/stickers/search?q=${encodeURIComponent(
      term
    )}&api_key=SWq0akBClfv0noc1kvCvN8bCBGAKqAZG&limit=10`;

    superagent.get(url, (err, res) => {
      this.setState({ gifs: res.body.data });
    });
  };

  render() {
    return (
      <div>
        <Input onInputSubmit={term => this.handleInputSubmit(term)} />
        <List gifs={this.state.gifs} />
      </div>
    );
  }
}

export default App;
