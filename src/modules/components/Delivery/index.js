import React from "react";
import './style.sass';

const Delivery = () => {

    const deliveryContent = [
        {
            title: 'Заказ',
            about: 'После оформления заказа мы свяжемся с вами для уточнения деталей.',
            icon: '/assets/icons/icon-order.svg'
        },
        {
            title: 'Доставка курьером',
            about: 'Мы доставим вашу пиццу горячей. Бесплатная доставка по городу.',
            icon: '/assets/icons/icon-delivery.svg'
        },
        {
            title: 'Оплата',
            about: 'Оплатить можно наличными или картой курьеру. И золотом тоже можно.',
            icon: '/assets/icons/icon-pay.svg'
        },
    ]

    const titleBlock = 'Доставка и оплата';

    return(
        <div className="delivery">
            <h2 className="delivery__titleBlock">{titleBlock}</h2>
            <div className="container">
                <ul className="delivery__list">
                    {
                        deliveryContent.map(content => (
                            <li className="delivery__item" key={content.title}>
                                <div className="delivery__wrapIcon">
                                    <img src={process.env.PUBLIC_URL + content.icon} alt="" className="delivery__icon"/>
                                </div>
                                <div className="delivery__wrapText">
                                    <span className="delivery__title">{content.title}</span>
                                    <span className="delivery__about">{content.about}</span>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Delivery;