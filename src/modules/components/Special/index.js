import React from "react";
import './style.sass';

const Speacial = () => {

    const events = [
        {
            title: 'Закажи 2 пиццы – 3-я в подарок',
            about: 'При заказе 2-х больших пицц – средняя пицца в подарок',
            image: '/assets/images/event-1.jpg'
        },
        {
            title: 'Напиток в подарок',
            about: 'Скидка на заказ от 3 000 рублей + напиток в подарок',
            image: '/assets/images/event-2.jpg'
        },
        {
            title: '25% при первом заказе',
            about: 'Скидка новым клиентам!',
            image: '/assets/images/event-3.jpg'
        }
    ]

    return(
        <div className="container">
            <ul className="specialList">
                {
                    events.map(event=>(
                        <li className="specialList__item" key={event.title}>
                            <div className="specialList__wrapImg">
                                <img src={process.env.PUBLIC_URL + event.image} alt="" className="specialList__img"/>
                            </div>
                            <p className="specialList__title">{event.title}</p>
                            <p className="specialList__about">{event.about}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Speacial;