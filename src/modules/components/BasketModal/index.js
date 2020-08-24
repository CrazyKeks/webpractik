import React from "react";
import './style.sass'

import {ReactComponent as All} from "./icons/all.svg";
import {ReactComponent as Beaf} from "./icons/beaf.svg";
import {ReactComponent as Cheese} from "./icons/cheese.svg";
import {ReactComponent as Hot} from "./icons/hot.svg";
import {ReactComponent as Vega} from "./icons/vegetable.svg";

import {useSelector, useDispatch} from "react-redux";
import {basketItems} from "../../../redux/action/basket";

const BasketModal = () => {
    const dispatch = useDispatch();
    const itemsBasket = useSelector(({basket})=>{
        return basket
    })
    const returnComponent = (componentName) => {
        switch (componentName) {
            case 'all':
                return <All key={'All'} />
                break;
            case 'beaf':
                return <Beaf key={'Beaf'}/>
                break;
            case 'cheese':
                return <Cheese key={'Cheese'} />
                break;
            case 'hot':
                return <Hot key={'Hot'}/>
                break;
            case 'vega':
                return <Vega key={'Vega'}/>
                break;
        }
    }
    const returnSize = (activeClass) => {
        switch(activeClass) {
            case 'small':
                return '20 см';
                break;
            case 'middle':
                return '30 см';
                break;
            case 'big':
                return '40 см';
                break;
        }
    }

    const plusClick = (pizza) => {
        const basketPizzas = [...itemsBasket.items];
        let allPrice = 0;

        basketPizzas.map(item => {
            if (item.title === pizza.title && item.sizeActiveClass === pizza.sizeActiveClass) {
                item.count++;
            }
        })

        basketPizzas.map(item => {
            allPrice += item.count * item.price;
        })


        dispatch(basketItems(basketPizzas, allPrice))
    }

    const minusClick = (pizza) => {
        if (pizza.count === 1) return

        const basketPizzas = [...itemsBasket.items];
        let allPrice = 0;

        basketPizzas.map(item => {
            if (item.title === pizza.title && item.sizeActiveClass === pizza.sizeActiveClass) {
                item.count--;
            }
        })

        basketPizzas.map(item => {
            allPrice += item.count * item.price;
        })

        dispatch(basketItems(basketPizzas, allPrice))
    }

    const removeCLick = (pizza) => {
        const basketPizzas = [...itemsBasket.items];
        let allPrice = 0;

        basketPizzas.map((item, index) => {
            if (item.title === pizza.title && item.sizeActiveClass === pizza.sizeActiveClass) {
                basketPizzas.splice(index,1)
            }
        })

        basketPizzas.map(item => {
            allPrice += item.count * item.price;
        })

        dispatch(basketItems(basketPizzas, allPrice))
    }

    return(
        <div className="wrapBasket">
            <ul className="basketModal">
                {
                    itemsBasket.items &&
                    itemsBasket.items.map(item => (
                        <li className="basketModal__item" key={item.title + item.sizeActiveClass}>
                            <div className={"basketModal__wrapImg " + item.sizeActiveClass}>
                                <div className="basketModal__wrapIconsType">
                                    {
                                        item.type.map(icon=>{
                                            if (icon !== 'all') {
                                                return returnComponent(icon)
                                            }
                                        })
                                    }
                                </div>
                                <span className="basketModal__bigSizeBorderPizza"/>
                                <span className="basketModal__middleSizeBorderPizza"/>
                                <img src={process.env.PUBLIC_URL + item.image} alt="" className="basketModal__imgPizza"/>
                            </div>
                            <div className="basketModal__wrapText">
                                <span className="basketModal__titlePizza">{item.title}</span>
                                <span className="basketModal__sizePizza">
                                {
                                    returnSize(item.sizeActiveClass)
                                }
                            </span>
                            </div>
                            <div className="basketModal__wrapCount">
                                <button className={"basketModal__minus"} onClick={()=>minusClick(item) }></button>
                                <input type="text" className="basketModal__count" value={item.count} disabled/>
                                <button className="basketModal__plus" onClick={()=>plusClick(item)}></button>
                            </div>
                            <div className="basketModal__wrapPrice">
                                <span className="basketModal__price">{item.price + ' руб'}</span>
                                <button className="basketModal__removeItem" onClick={()=>removeCLick(item)}></button>
                            </div>
                        </li>
                    ))
                }
            </ul>
            <span className="sumBasket">
                <span className="sumBasket__text">
                    Сумма заказа :
                </span>
                <span className="sumBasket__sum">
                    {itemsBasket.sum + ' руб'}
                </span>
            </span>
        </div>
    )
}

export default BasketModal;