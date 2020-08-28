import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "",
      someValue: ""
    }
  }

  increaseValue = () => {
    let newValue = this.state.value //copy state
    newValue++ //increase the value
    this.setState({ value: newValue }) //updating state
  }

  submitForm = (event) => {
    event.preventDefault();
    this.setState({ value: this.state.someValue })
  }

  onInput = (event) => {
    this.setState({ someValue: event.target.value })
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.value}</h1>
        <form onSubmit={this.submitForm}>
          <input
            type='text'
            onChange={this.onInput}
            placeholder='some text' />
          <button
            type='submit'
          >Click Me</button>
        </form>
      </div>
    );
  }
}

export default App;
