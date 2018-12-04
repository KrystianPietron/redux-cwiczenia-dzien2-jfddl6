const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const RESET = 'RESET'

export const addInc = (howMatchInc) => ({
    type: INCREMENT,
    howMatchInc
})
export const addDec = (howMatchDec) => ({
    type: DECREMENT,
    howMatchDec
})
export const reset = () => ({
    type: RESET
})
export default (state = 0, action) => {
    switch (action.type) {
        case INCREMENT:
            return (state + action.howMatchInc)
        case DECREMENT:
            return Math.max((state - action.howMatchDec), 0)
        case RESET:
            return (state = 0)
        default:
            return state
    }
}