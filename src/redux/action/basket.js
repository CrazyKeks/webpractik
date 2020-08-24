export const basketItems = (items, sum) => (
    {
        type: 'ADD_BASKET',
        payload: {
            items: items,
            sum: sum
        },
    }
)