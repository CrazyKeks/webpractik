import React from "react";
import {useSelector, useDispatch} from "react-redux";

import {setPizza} from "../../../redux/action/pizza";
import {sortCategory} from "../../../redux/action/filters";
import {basketItems} from "../../../redux/action/basket";
import {ReactComponent as All} from "./icons/all.svg";
import {ReactComponent as Beaf} from "./icons/beaf.svg";
import {ReactComponent as Cheese} from "./icons/cheese.svg";
import {ReactComponent as Hot} from "./icons/hot.svg";
import {ReactComponent as Vega} from "./icons/vegetable.svg";

import CatalogPizzaTab from "../CatalogPizzaTab";
import CatalogPizaCard from "../CatalogPizzaCard";

import './style.sass'

const CatalogPizza = () => {

    const dispatch = useDispatch();
    const state = useSelector(({pizza,filters,category,basket})=>{
        return {
            cardPizzas: pizza.items,
            selectFilterCategory: filters.category,
            category: category.items,
            basket: basket
        }
    });

    const selectedCategory = (type) => {
        dispatch(sortCategory(type))
    }

    const clickBuy = (itemOptions) => {
        const itemsBasket = [...state.basket.items];
        const cloneOptionItem = {...itemOptions.cardOption}
        let allPrice = 0,
            found = false;

        if (itemsBasket.length === 0) {
            cloneOptionItem.count = 1;
            itemsBasket.push(cloneOptionItem)
            dispatch(basketItems(itemsBasket, cloneOptionItem.price))
            return true;
        }

        itemsBasket.map(item => {
            if (item.title === cloneOptionItem.title && item.sizeActiveClass === cloneOptionItem.sizeActiveClass) {
                item.count++;
                found = true;
            }
        })

        if (!found) {
            cloneOptionItem.count = 1;
            itemsBasket.push(cloneOptionItem)
        }

        itemsBasket.map(item => {
            allPrice += item.count * item.price;
        })

        dispatch(basketItems(itemsBasket, allPrice))
    }

    const clickSizeCard = (title, size) => {
        let newCatalogCards = [...state.cardPizzas];
        newCatalogCards.map(cardOptions => {
            if (cardOptions.title === title) {
                cardOptions.size.map(sizeCard => {
                    if (sizeCard.textSize === size) {
                        sizeCard.active = true
                        cardOptions.sizeActiveClass = sizeCard.class
                    } else {
                        sizeCard.active = false
                    }
                })
            }
        })
        dispatch(setPizza(newCatalogCards))
    }

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

    return(
        <div className="container">
            <div className="catalogPizza">
                <h2 className="catalogPizza__title">Выберите пиццу</h2>
                <ul className="catalogPizzaTabs">
                    {
                        state.category.map(itemTab=>(
                                <CatalogPizzaTab
                                    title={itemTab.title}
                                    active={state.selectFilterCategory === itemTab.type ? true : false}
                                    key={itemTab.type}
                                    click={()=>selectedCategory(itemTab.type)}
                                    iconComponent={()=>returnComponent(itemTab.type)}
                                />
                        ))
                    }
                </ul>
                <ul className="catalogPizzaCard">
                    {
                        state.cardPizzas.map(cardOption => {
                            if (cardOption.type.indexOf(state.selectFilterCategory) !== -1) {
                                return  <CatalogPizaCard
                                    title={cardOption.title}
                                    recept={cardOption.recept}
                                    price={cardOption.price}
                                    size={cardOption.size}
                                    key={cardOption.title}
                                    image={cardOption.image}
                                    sizeImgPizzaClass={cardOption.sizeActiveClass}
                                    clickSize={clickSizeCard}
                                    iconComponent={returnComponent}
                                    type={cardOption.type}
                                    clickBuy={()=>clickBuy({cardOption})}
                                />
                            }

                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default CatalogPizza;