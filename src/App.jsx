import React, { Component } from 'react';

import './App.css';

class App extends Component {
  static handleSubmit(e) {
    e.preventDefault();
  }

  constructor() {
    super();
    this.state = {
      input: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ input: event.target.value });
  }

  render() {
    const { input } = this.state;
    return (
      <main className="container">
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={input} onChange={this.handleChange} />
          <button type="submit">ADD TODO</button>
        </form>
      </main>
    );
  }
}

export default App;
