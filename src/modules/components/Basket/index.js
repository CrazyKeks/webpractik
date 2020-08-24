import React from "react";
import './style.sass'

import {useSelector, useDispatch} from "react-redux";
import {statusModalBasket} from "../../../redux/action/openModalBasket";

const Basket = () => {
    const pathBasketIcon = '/assets/icons/basket.svg';

    const dispatch = useDispatch();
    const {statusModal, basket} = useSelector(({openModalBasket, basket})=>{
        return {
            statusModal: openModalBasket.status,
            basket: basket.items
        }
    })
    const switchPopupBaasket = () => {
        if (statusModal) {
            dispatch(statusModalBasket(false))
        } else {
            dispatch(statusModalBasket(true))
        }
    }

    const countBasket = () => {
        let count = 0;
        basket.map(item => {
            count += item.count;
        })
        return count;
    }
    return(
        <div className="basket" onClick={switchPopupBaasket}>
            <div className="basket__wrapIcon">
                <img src={process.env.PUBLIC_URL + pathBasketIcon} alt="" className="basket__icon"/>
                <span className="basket__countIcon">{countBasket()}</span>
            </div>
            <div className="basket__wrapText">
                <span className="basket__text">ваш заказ</span>
                <span className="basket__itemsText smallText">
                    {basket.length > 0 && basket.length < 2 && basket[0].title}
                    {basket.length > 1 && basket[0].title + " и еще " + (countBasket() - 1) + " пиццы"}
                </span>
            </div>
        </div>
    )
}

export default Basket;