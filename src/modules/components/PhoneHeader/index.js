import React from "react";
import './style.sass'

const PhoneHeader = () => {
    const pathPhoneIcon = '/assets/icons/telephone.svg';
    return(
        <a href="tel:+79184326587" className="phoneHeader">
            <div className="phoneHeader__wrapIcon">
                <img src={process.env.PUBLIC_URL + pathPhoneIcon} alt="" className="phoneHeader__icon"/>
            </div>
            <div className="phoneHeader__wrapText">
                <span className="phoneHeader__phone">+7 (918) 432-65-87</span>
                <span className="phoneHeader__time smallText">Ежедневно с 9:00 до 23:00</span>
            </div>
        </a>
    )
}

export default PhoneHeader;