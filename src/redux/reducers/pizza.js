const initialState = {
    items: [
        {
            title: 'Итальянская',
            recept: 'Томат, шампиньон, сыр, оливки, чили, соус, тесто, базилик',
            size: [
                {
                    class: 'small',
                    textSize: 20,
                    active: true
                },
                {
                    class: 'middle',
                    textSize: 30,
                    active: false
                },
                {
                    class: 'big',
                    textSize: 40,
                    active: false
                }
            ],
            sizeActiveClass: 'small',
            price: '699',
            type: ['all','hot'],
            image:'/assets/images/pizza-01.jpg',
        },
        {
            title: 'Маргарита',
            recept: 'Тесто со шпинатом, молодой сыр и колбаски, много колбасок',
            size: [
                {
                    class: 'small',
                    textSize: 20,
                    active: true
                },
                {
                    class: 'middle',
                    textSize: 30,
                    active: false
                },
                {
                    class: 'big',
                    textSize: 40,
                    active: false
                }
            ],
            sizeActiveClass: 'small',
            price: '479',
            type: ['all','beaf'],
            image:'/assets/images/pizza-01.jpg',
        },
        {
            title: 'Римская',
            recept: 'Тесто со шпинатом, молодой сыр и колбаски, много колбасок',
            size: [
                {
                    class: 'small',
                    textSize: 20,
                    active: true
                },
                {
                    class: 'middle',
                    textSize: 30,
                    active: false
                },
                {
                    class: 'big',
                    textSize: 40,
                    active: false
                }
            ],
            sizeActiveClass: 'small',
            price: '399',
            type: ['all', 'hot'],
            image:'/assets/images/pizza-01.jpg',
        },
        {
            title: 'Барбекю',
            recept: 'Циплёнок (маленький кура), оливки, моцарелла, соус барбекю',
            size: [
                {
                    class: 'small',
                    textSize: 20,
                    active: true
                },
                {
                    class: 'middle',
                    textSize: 30,
                    active: false
                },
                {
                    class: 'big',
                    textSize: 40,
                    active: false
                }
            ],
            sizeActiveClass: 'small',
            price: '399',
            type: ['all', 'beaf'],
            image:'/assets/images/pizza-01.jpg',
        },
        {
            title: 'Вегетарианская',
            recept: 'Томат, шампиньон, сыр, оливки, чили, соус, тесто, базилик',
            size: [
                {
                    class: 'small',
                    textSize: 20,
                    active: true
                },
                {
                    class: 'middle',
                    textSize: 30,
                    active: false
                },
                {
                    class: 'big',
                    textSize: 40,
                    active: false
                }
            ],
            sizeActiveClass: 'small',
            price: '399',
            type: ['all', 'vega'],
            image:'/assets/images/pizza-01.jpg',
        },
        {
            title: 'Мясная',
            recept: 'Томат, шампиньон, сыр, оливки, чили, соус, тесто, базилик',
            size: [
                {
                    class: 'small',
                    textSize: 20,
                    active: true
                },
                {
                    class: 'middle',
                    textSize: 30,
                    active: false
                },
                {
                    class: 'big',
                    textSize: 40,
                    active: false
                }
            ],
            sizeActiveClass: 'small',
            price: '399',
            type: ['all', 'beaf', 'hot'],
            image:'/assets/images/pizza-01.jpg',
        },
        {
            title: 'С грибами',
            recept: 'Томат, шампиньон, сыр, оливки, чили, соус, тесто, базилик',
            size: [
                {
                    class: 'small',
                    textSize: 20,
                    active: true
                },
                {
                    class: 'middle',
                    textSize: 30,
                    active: false
                },
                {
                    class: 'big',
                    textSize: 40,
                    active: false
                }
            ],
            sizeActiveClass: 'small',
            price: '399',
            type: ['all', 'cheese'],
            image:'/assets/images/pizza-01.jpg',
        }
    ]
}

const pizza = (state = initialState, action) => {
    if (action.type === "SET_PIZZA") {
        return {
            ...state,
            items: action.payload
        }
    }
    return state;
}

export default pizza;