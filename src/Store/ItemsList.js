const ADD_TO_CART = 'ADD_TO_CART'
const INITIAL_STATE = {
    cardTotal: 0,
    items: []
}

export const addItem = (title, price) => ({
    type: ADD_TO_CART,
    item: {
        title,
        price,
    }
})

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                items: [...state.items, action.item],
                cardTotal: (state.cardTotal + action.item.price)
            }
        default:
            return state
    }
}