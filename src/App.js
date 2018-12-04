import React, { Component } from 'react';
import { connect } from 'react-redux'

import ToDoList from './ToDoList'

const mapStateToProps = state => ({
  todos: state.todos.allTodos,
  visibleTodos: state.todos.visibleTodos
})

class App extends Component {
  render() {
    return (
      <ToDoList todos={this.props.todos}
        visibleTodos={this.props.visibleTodos} />
    );
  }
}

export default connect(mapStateToProps)(App)
