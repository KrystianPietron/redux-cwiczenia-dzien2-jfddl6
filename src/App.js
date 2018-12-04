import React, { Component } from 'react';
import ToDoList from './ToDoList'

class App extends Component {
  render() {
    return (
      <ToDoList todos={[
        { text: 'First todo from App' },
        { text: 'Second todo from App' }
      ]} />
    );
  }
}

export default App;
