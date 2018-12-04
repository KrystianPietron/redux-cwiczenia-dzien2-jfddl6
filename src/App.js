import React, { Component } from 'react';
import ToDoList from './ToDoList'
import Counter from './Counter';

class App extends Component {
  render() {
    return (
      <div>
        <ToDoList />
        <Counter />
      </div>
    );
  }
}

export default App
