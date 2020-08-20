import React from "react";
import './style.sass'

const Basket = () => {
    const pathBasketIcon = '/assets/icons/basket.svg';
    return(
        <div className="basket">
            <div className="basket__wrapIcon">
                <img src={process.env.PUBLIC_URL + pathBasketIcon} alt="" className="basket__icon"/>
                <span className="basket__countIcon">3</span>
            </div>
            <div className="basket__wrapText">
                <span className="basket__text">ваш заказ</span>
                <span className="basket__itemsText smallText">Итальянская и ещё 2 пиццы</span>
            </div>
        </div>
    )
}

export default Basket;