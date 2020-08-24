const initialState = {
    items: [
        {
            title: 'Все',
            type: 'all',
            active: true,
        },
        {
            title: 'Острые',
            type: 'hot',
            active: false,
        },
        {
            title: 'Мясные',
            type: 'beaf',
            active: false,
        },
        {
            title: 'Сырные',
            type: 'cheese',
            active: false,
        },
        {
            title: 'Веганские',
            type: 'vega',
            active: false,
        }
    ]
}

const category = (state = initialState, action) => {
    if (action.type === "SET_CATEGORY") {
        return {
            ...state,
            sortCategory: action.payload
        }
    }
    return state;
}

export default category;