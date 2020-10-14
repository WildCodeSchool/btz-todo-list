import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      todos: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    this.setState((prevState) => ({
      ...prevState,
      input: '',
      todos: [...prevState.todos, prevState.input],
    }));
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({ input: event.target.value });
  }

  render() {
    const { input, todos } = this.state;
    return (
      <main className="container">
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={input} onChange={this.handleChange} />
          <button type="submit">ADD TODO</button>
        </form>
        <div>
          <ul>
            {todos.map((todo, index) => {
              return <li key={index}>{todo}</li>;
            })}
          </ul>
        </div>
      </main>
    );
  }
}

export default App;
