import React from 'react'
import { connect } from 'react-redux'
import { addInc, addDec, reset } from './Store/Counter';

const mapStateToProps = store => ({
    _counterValue: store.counter
})
const mapDispatchToProps = dispatch => ({
    _increment: (howMatchInc) => dispatch(addInc(howMatchInc)),
    _decrement: (howMatchDec) => dispatch(addDec(howMatchDec)),
    _reset: () => dispatch(reset())
})
const Counter = (props) => {
    return (<div>
        <h2>Counter State: {props._counterValue}</h2>
        <button onClick={() => props._increment(1)}>+</button>
        <button onClick={() => props._increment(3)}>+ 3</button>
        <button onClick={() => props._decrement(1)}>-</button>
        <button onClick={() => props._decrement(3)}>- 3</button>
        <button onClick={props._reset}>Reset</button>
    </div>)
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)