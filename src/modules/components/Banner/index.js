import React from "react";
import './style.sass'

const Banner = () => {

    const title = 'Пицца на заказ',
        text = 'Бесплатная и быстрая доставка за час\n' +
            'в любое удобное для вас время',
        buttonText = 'Выбрать пиццу',
        imgPizza = '/assets/images/img-pizza.png',
        imgLeaves = '/assets/images/img-leaves.png',
        imgBg = '/assets/images/img-bg.png';

    return (
        <div className="container">
            <div className="banner">
                <div className="banner__wrapContent">
                    <div className="banner__leftSide">
                        <h1 className="banner__title">{title}</h1>
                        <p className="banner__text bigText">{text}</p>
                        <button className="banner__anchor">{buttonText}</button>
                    </div>
                    <div className="banner__rightSide">
                        <img src={process.env.PUBLIC_URL + imgLeaves} alt="" className="banner__imgLeaves"/>
                        <img src={process.env.PUBLIC_URL + imgPizza} alt="" className="banner__imgPizza"/>
                        <img src={process.env.PUBLIC_URL + imgBg} alt="" className="banner__imgBg"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;