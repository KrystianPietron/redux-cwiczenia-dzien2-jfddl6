import React from 'react'
import { connect } from 'react-redux'
import { addToDo } from './Store/ToDos';

const mapDispatchToProps = dispatch => ({
    addToDo: text => dispatch(addToDo(text))
})
class ToDoList extends React.Component {
    state = {}

    handleInputChange = event => {
        this.setState({ value: event.target.value })
    }
    handleButtonClick = () => {
        console.log('want to save todo: ', this.state.value)
        this.props.addToDo(this.state.value)
    }
    render() {
        return (
            <div>
                <input onChange={this.handleInputChange} />
                <button onClick={this.handleButtonClick}>Add ToDo</button>
                {this.props.todos.map(todo =>
                    <div key={todo.text}>
                        {todo.text}
                    </div>
                )}
            </div>
        )
    }
}
export default connect(null, mapDispatchToProps)(ToDoList)