import React from "react";
import './style.sass'

const Footer = () => {

    const whiteLogoSite = '/assets/icons/logo-white.svg';

    return(
        <footer className="footer">
            <div className="container footer__container">
                <a href="#" className="footer__wrapLogo">
                    <img src={process.env.PUBLIC_URL + whiteLogoSite} alt="" className="footer__logo"/>
                </a>
                <div className="footer__wrapPhoneInfo">
                    <a href="tel:+79184326587" className="footer__linkPhone">+7 (918) 432-65-87</a>
                    <span className="footer__info">Ежедневно с 9:00 до 23:00</span>
                </div>
                <a href="#" className="footer__confidencial">Политика конфиденциальности</a>
            </div>
        </footer>
    )
}

export default Footer;