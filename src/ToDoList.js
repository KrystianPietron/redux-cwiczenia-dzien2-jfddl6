import React from 'react'

class ToDoList extends React.Component {
   state  = {}

   handleInputChange = event => {
       this.state({value: event.target.value})
   }

handleButtonClick = () => {
    console.log('want to save todo: ',this.state.value)
}
   
   
    render() {
        return (
            <div>
                <input onChange={this.handleInputChange}/>
                <button onClick ={this.handleButtonClick}>Add ToDo</button>
                {this.props.todos.map(todo =>
                    <div key={todo.text}>
                        {todo.text}
                    </div>
                )}
                {this.props.visibleTodos.map(visible =>
                    <div key={visible.text}>
                        {visible.text}
                    </div>
                )}
            </div>
        )
    }
}
export default ToDoList