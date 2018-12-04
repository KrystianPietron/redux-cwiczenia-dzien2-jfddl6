import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import './index.css';
import App from './App';


import { combineReducers, createStore } from 'redux'
import todos, { addToDo, visibleTodos, toggleTodo, deleteTodo } from './Store/ToDos'
import Counter, { addInc, addDec, reset } from './Store/Counter'
import ItemsList, { addItem } from './Store/ItemsList'



const rootReducer = combineReducers({
    ItemsList,
    todos,
    Counter
})
const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.dispatch(addToDo('Go Shopping'))
store.dispatch(addToDo('Some other thing'))
store.dispatch(addToDo('Clean the house'))
// store.dispatch(addInc())
// store.dispatch(addInc())
// store.dispatch(addInc())

window.increment = () => store.dispatch(addInc())
window.addToDo = (text) => store.dispatch(addToDo(text))
window.decrement = () => store.dispatch(addDec())
window.restart = () => store.dispatch(reset())
window.addItem = (title, price) => store.dispatch(addItem(title, price))
window.filter = (text) => store.dispatch(visibleTodos(text))
window.toggle = (index) => store.dispatch(toggleTodo(index))
window.delete = (index) => store.dispatch(deleteTodo(index))


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
document.getElementById('root'));
