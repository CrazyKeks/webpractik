import React from "react";
import './style.sass'

const BurgerBtn = (props) => {
    return (
        <button className={"burger" + (props.statusBurgerMenu ? ' open': '')} onClick={props.click}>
            <span className="burger__icon">
                <span className="burger__line"></span>
                <span className="burger__line"></span>
                <span className="burger__line"></span>
            </span>
        </button>
    )
}

export default BurgerBtn;