import React from "react";
import './style.sass'

const BurgerBtn = () => {
    return (
        <button className="burger">
            <span className="burger__icon">
                <span className="burger__line"></span>
                <span className="burger__line"></span>
                <span className="burger__line"></span>
            </span>
        </button>
    )
}

export default BurgerBtn;