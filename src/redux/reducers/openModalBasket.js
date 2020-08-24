const initialState = {
    status: false
}

const openModalBasket = (state = initialState, action) => {
    if (action.type === "STATUS_MODAL_BASKET") {
        return {
            ...state,
            status: action.payload
        }
    }
    return state;
}

export default openModalBasket;