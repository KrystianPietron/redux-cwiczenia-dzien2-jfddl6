const ADD_TODO = 'ADD_TODO'
const FILTER_TODO = 'FILTER_TODO'
const TOGGLE_TODO = 'TOGGLE_TODO'
const DELETE_TODO = 'DELETE_TODO'

const INITIAL_STATE = {
    allTodos: [],
    visibleTodos: [],
    filter: ''
}

export const addToDo = text => ({
    type: ADD_TODO,
    text
})
export const filterTodos = text => ({
    type: FILTER_TODO,
    input: text
})
export const toggleTodo = index => ({
    type: TOGGLE_TODO,
    index
})

export const deleteTodo = index => ({
    type: DELETE_TODO,
    index
})
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_TODO:
            const newToDo = { text: action.text, completed: false }
            const newVisibleTodos = newToDo.text.includes(state.filter) ?
                [...state.visibleTodos, newToDo]
                :
                state.visibleTodos
            return {
                ...state,
                allTodos: [
                    ...state.allTodos,
                    newToDo
                ],
                visibleTodos: newVisibleTodos
            }
        case FILTER_TODO:
            return {
                ...state,
                filter: action.input,
                visibleTodos: getVisibleTodos(state.allTodos, action.input)
            }
        case TOGGLE_TODO:
            const allTodosWithToggled = state.allTodos.map((todo, index) => {
                if (index === action.index) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo
            })
            return {
                ...state,
                allTodos: allTodosWithToggled,
                visibleTodos: getVisibleTodos(allTodosWithToggled, state.filter)
            }
        case DELETE_TODO:
            const allTodosWithDeleted = state.allTodos.filter((todo, index) => !(index === action.index))
            return {
                ...state,
                allTodos: allTodosWithDeleted,
                visibleTodos: getVisibleTodos(allTodosWithDeleted, state.filter)
            }
        default:
            return state
    }
}

function getVisibleTodos(allTodos, filter) {
    return allTodos.filter(todo =>
        todo.text.includes(filter)
    )
}