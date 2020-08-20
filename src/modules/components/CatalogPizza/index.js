import React from "react";
import {useSelector, useDispatch} from "react-redux";

import {setPizza} from "../../../redux/action/pizza";
import {sortCategory} from "../../../redux/action/filters";
import {ReactComponent as AllIcon} from "./icons/all.svg";
import {ReactComponent as BeafIcon} from "./icons/beaf.svg";
import {ReactComponent as CheeseIcon} from "./icons/cheese.svg";
import {ReactComponent as HotIcon} from "./icons/hot.svg";
import {ReactComponent as VegaIcon} from "./icons/vegetable.svg";

import CatalogPizzaTab from "../CatalogPizzaTab";
import CatalogPizaCard from "../CatalogPizzaCard";

import './style.sass'

const CatalogPizza = () => {

    const dispatch = useDispatch();
    const state = useSelector(({pizza,filters,category})=>{
        return {
            cardPizzas: pizza.items,
            selectFilterCategory: filters.category,
            category: category.items
        }
    });

    const components = {
        AllIconComponent: AllIcon,
        BeafIconComponent: BeafIcon,
        CheeseIconComponent: CheeseIcon,
        HotIconComponent: HotIcon,
        VegaIconComponent: VegaIcon
    }

    const selectedCategory = (type) => {
        dispatch(sortCategory(type))
    }

    const clickBuy = (itemOptions) => {

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
        const myComponent = components[componentName];
        return < components[componentName] />
    }

    return(
        <div className="container">
            <div className="catalogPizza">
                <h2 className="catalogPizza__title">Выберите пиццу</h2>
                <ul className="catalogPizzaTabs">
                    {
                        state.category.map(itemTab=>(
                            <div>
                                {returnComponent(itemTab.icon)}
                                <CatalogPizzaTab
                                    title={itemTab.title}
                                    active={state.selectFilterCategory === itemTab.type ? true : false}
                                    key={itemTab.type}
                                    click={()=>selectedCategory(itemTab.type)}
                                />
                            </div>

                        ))
                    }
                </ul>
                <ul className="catalogPizzaCard">
                    {
                        state.cardPizzas.map(cardOption => (
                            <CatalogPizaCard
                                title={cardOption.title}
                                recept={cardOption.recept}
                                price={cardOption.price}
                                size={cardOption.size}
                                key={cardOption.title}
                                image={cardOption.image}
                                sizeImgPizzaClass={cardOption.sizeActiveClass}
                                clickSize={clickSizeCard}
                            />
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default CatalogPizza;