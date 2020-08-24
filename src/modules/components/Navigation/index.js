import React from "react";
import './style.sass';

const Navigation = (props) => {

    const navigationList = [
        {
            text: 'меню',
            link: '#menu',
        },
        {
            text: 'о нас',
            link: '#about'
        },
        {
            text: 'контакты',
            link: '#contacts'
        }
    ]

    const linkMobileWhiteMenu = '/assets/icons/logo-white.svg'

    return (
        <nav className={"navigation" + (props.statusMobileMenu ? " open" : '') }>
            <img src={process.env.PUBLIC_URL + linkMobileWhiteMenu} alt="" className="logoMobileMenu"/>
            <ul className="navigation__list">
                {
                    navigationList.map(menuLink => (
                        <li className="navigation__item" key={menuLink.text}>
                            <a href={menuLink.link} className="navigation__link">{menuLink.text}</a>
                        </li>
                    ))
                }
            </ul>
            <div className="aboutBlockMobile">
                <span className="aboutBlockMobile__title">заказать по телефону</span>
                <a href="tel:+79184326587" className="aboutBlockMobile__phone">+7 (918) 432-65-87</a>
                <span className="aboutBlockMobile__timeInfo">Ежедневно с 9:00 до 23:00</span>
            </div>
            <div className="languageSiteMobile">
                <button className="languageSiteMobile__btn">English</button>
            </div>
        </nav>
    )
}

export default Navigation;