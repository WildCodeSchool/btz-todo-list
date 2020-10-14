import React, { Component } from 'react';

import './App.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

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
        <TodoForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          inputValue={input}
        />
        <TodoList todos={todos} />
      </main>
    );
  }
}

export default App;
