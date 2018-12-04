import React from 'react'
import { connect } from 'react-redux'
import { addToDo } from './Store/ToDos';


const mapStateToProps = state => ({
    _todos: state.todos.allTodos,
    _visibleTodos: state.todos.visibleTodos
})
const mapDispatchToProps = dispatch => ({
    _addToDo: text => dispatch(addToDo(text))
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
    render() {
        return (
            <div>
                <input onChange={this.handleInputChange} />
                <button onClick={this.handleButtonClick}>Add ToDo</button>
                {this.props._todos.map(todo =>
                    <div key={todo.text}>
                        {todo.text}
                    </div>
                )}
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ToDoList)