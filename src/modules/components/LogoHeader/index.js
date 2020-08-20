import React from "react";
import './style.sass'

const LogoHeader = () => {
    const pathLogo = '/assets/icons/logo.svg';

    return (
        <a href="#" className="logoHeader">
            <img src={process.env.PUBLIC_URL + pathLogo} alt="" className="logoHeader__img"/>
        </a>
    )
}

export default LogoHeader;