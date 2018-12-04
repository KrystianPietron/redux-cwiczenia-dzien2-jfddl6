import React from 'react'
import { connect } from 'react-redux'
import { addToDo, toggleTodo } from './Store/ToDos';


const mapStateToProps = state => ({
    _todos: state.todos.allTodos,
    _visibleTodos: state.todos.visibleTodos,

})
const mapDispatchToProps = dispatch => ({
    _addToDo: text => dispatch(addToDo(text)),
    _toogleTodo: index => dispatch(toggleTodo(index))
})


class ToDoList extends React.Component {
    state = {}

    handleInputChange = event => {
        this.setState({ value: event.target.value })
    }
    handleButtonClick = () => {
        console.log('want to save todo: ', this.state.value)
        this.props._addToDo(this.state.value)
    }
    handleTodoClick = (index) => {
        this.props._toogleTodo(index)
    }
    render() {
        return (
            <div>
                <input onChange={this.handleInputChange} />
                <button onClick={this.handleButtonClick}>Add ToDo</button>
                {this.props._todos.map((todo, index) =>
                    <div key={todo.text}
                        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                        onClick={() => this.handleTodoClick(index)}
                    >
                        {todo.text}
                    </div>
                )}
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ToDoList)