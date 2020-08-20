import React from "react";
import './style.sass';

const About = () => {

    const aboutContent = [
        {
            title: 'Изготавливаем пиццу по своим рецептам в лучших традициях',
            text: 'Наша пицца получается сочной, вкусной и главное хрустящей с нежной и аппетитной начинкой, готовим по своим итальянским рецептам',
            image: '/assets/images/about-01.jpg',
            reverseContent: false
        },
        {
            title: 'Используем только свежие ингридиенты',
            text: 'Ежедневно заготавливаем продукты и овощи для наших пицц, соблюдаем все сроки хранения',
            image: '/assets/images/about-02.jpg',
            reverseContent: true
        },
        {
            title: 'Доставка в течение 60 минут или заказ за нас счёт',
            text: 'Все наши курьеры – фанаты серии Need for Speed и призеры гонок World Rally Championship и World Superbike во всех категориях',
            image: '/assets/images/about-03.jpg',
            reverseContent: false
        }
    ]

    const pathMask = '/assets/images/mask-image.png';

    return(
        <div className="container">
            <div className="about">
                <ul className="about__list">
                    {
                        aboutContent.map(content => (
                            <li className={'about__item' + " " + (content.reverseContent ? "reverse" : '')} key={content.title}>
                                <div className="about__wrapImg">
                                    <img src={process.env.PUBLIC_URL + pathMask} alt="" className="about__maskImg"/>
                                    <img src={process.env.PUBLIC_URL + content.image} alt="" className="about__img"/>
                                </div>
                                <div className="about__contentText">
                                    <h3 className="about__title">{content.title}</h3>
                                    <p className="about__text">{content.text}</p>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default About;