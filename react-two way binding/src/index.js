import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Text from './Text';
import Div from './Div';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.changeText = this.changeText.bind(this);
    this.state = {
      name: 'Ankur'
    };
    this.input = React.createRef();
  }
  changeText(event) {
    // console.log(event.target);
    const value = event.target.value;
    console.log(this.input.current.value, event.target.value);
    this.setState({
      name: value
    });
  }

  render() {
    return (
      <div>
        Hello Component
        <Hello {...{
          name: this.state.name,
          call: this.changeText,
          inp: this.input
        }} />
        <br />
        <br />
        Text Component
        <Text {...{
          changeText: this.changeText,
          name: this.state.name
        }}
        />
        <br />
        <br />
        Result Component
        <Div output={this.state.name} />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
