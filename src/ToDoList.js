import React from 'react'
import { connect } from 'react-redux'
import { addToDo, toggleTodo, deleteTodo, visibleTodos } from './Store/ToDos';


const mapStateToProps = state => ({
    _todos: state.todos.allTodos,
    _visibleTodos: state.todos.visibleTodos,

})
const mapDispatchToProps = dispatch => ({
    _addToDo: text => dispatch(addToDo(text)),
    _toogleTodo: index => dispatch(toggleTodo(index)),
    _deleteTodo: index => dispatch(deleteTodo(index)),
    _filterTodo: text => dispatch(visibleTodos(text))
})


class ToDoList extends React.Component {
    state = {}

    handleInputChange = event => {
        this.setState({ valueInput: event.target.value })
    }
    handleButtonClick = () => {
        console.log('want to save todo: ', this.state.valueInput)
        this.props._addToDo(this.state.valueInput)
    }
    handleTodoClick = (index) => {
        this.props._toogleTodo(index)
    }
    handleDelete = (index) => {
        this.props._deleteTodo(index)
    }
    handleInputSearch = (event) => {
        this.setState({ valueSearch: event.target.value })
    }
    handleButtonSearch = () => {
        this.props._filterTodo(this.state.valueSearch)
    }
    render() {
        return (
            <div>
                {this.renderInput()}
                {this.renderList()}
                {this.renderSearch()}
            </div>
        )
    }
    renderInput() {
        return (
            <div>
                <input
                    onChange={this.handleInputChange}
                />
                <button
                    onClick={this.handleButtonClick}
                >
                    Add ToDo
            </button>
            </div>
        )
    }
    renderList() {
        return this.props._todos.map((todo, index) =>
            <div key={todo.text}
                style={{
                    textDecoration: todo.completed ?
                        'line-through'
                        :
                        'none'
                }}
            >
                <div
                    onClick={() =>
                        this.handleTodoClick(index)}
                >
                    {todo.text}
                </div>
                <div><button
                    onClick={() =>
                        this.handleDelete(index)}
                >
                    X
                    </button>
                </div>
            </div>
        )
    }
    renderSearch() {
        return (
            <div>
                <input onChange={this.handleInputSearch} />
                <button onClick={this.handleButtonSearch}>Search</button>
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ToDoList)