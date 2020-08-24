const initialState = {
    category: 'all'
}

const filters = (state = initialState, action) => {
    if (action.type === "SORT_CATEGORY") {
        return {
            ...state,
            category: action.payload
        }
    }
    return state;
}

export default filters;