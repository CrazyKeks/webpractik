const initialState = {
    items: [],
    sum: 0
}

const basket = (state = initialState, action) => {
    if (action.type === "ADD_BASKET") {
        return {
            ...state,
            items: action.payload.items,
            sum: action.payload.sum
        }
    }
    return state;
}

export default basket;