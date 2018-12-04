const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const RESET = 'RESET'

export const addInc = () => ({
    type: INCREMENT
})
export const addDec = () => ({
    type: DECREMENT
})
export const reset = () => ({
    type: RESET
})
export default (state = 0, action) => {
    switch (action.type) {
        case INCREMENT:
            return (state + 1)
        case DECREMENT:
            return (state - 1)
        case RESET:
            return (state = 0)
        default:
            return state
    }
}