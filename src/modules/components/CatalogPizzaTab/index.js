import React from "react";
import './style.sass'


const CatalogPizzaTab = (props) => {
    return(
        <li className='catalogPizzaTabs__item'>
            <button
                className={"catalogPizzaTabs__icon" + ' ' + (props.active ? 'active' : '')}
                onClick={props.click}
            >
                {props.iconComponent()}
            </button>
            <button
                className={'catalogPizzaTabs__btn'  + ' ' + (props.active ? 'active' : '')}
                onClick={props.click}
            >
                {props.title}
            </button>
        </li>
    )
}

export default CatalogPizzaTab;