import React from "react";
import './style.sass'

const CatalogPizaCard = (props) => {

    const titleSizeText = 'Размер, см:';
    const textBtnBuy = 'Заказать';

    return(
        <li className="catalogPizzaCard__item">
            <div className="catalogPizzaCard__wrapImg">
                <span className="catalogPizzaCard__borderBigPizza"></span>
                <span className="catalogPizzaCard__borderMiddlePizza"></span>
                <img src={process.env.PUBLIC_URL + props.image} alt="" className="catalogPizzaCard__img"/>
            </div>
            <h4 className="catalogPizzaCard__title">{props.title}</h4>
            <p className="catalogPizzaCard__recept smallText">{props.recept}</p>
            <p className="catalogPizzaCard__titleSize">{titleSizeText}</p>
            <ul className="catalogPizzaCard__sizeList">
                {
                    props.size.map(size=>(
                        <li className="catalogPizzaCard__sizeItem" key={size.textSize}>
                            <button
                                className={'catalogPizzaCard__sizeBtn' + ' ' + (size.active ? 'active' : '')}
                                onClick={()=>props.clickSize(props.title, size.textSize)}
                            >
                                {size.textSize}
                            </button>
                        </li>
                    ))
                }
            </ul>
            <p className="catalogPizzaCard__price">
                {`от ${props.price} руб.`}
            </p>
            <button className="catalogPizzaCard__buy">{textBtnBuy}</button>
        </li>
    )
}

export default CatalogPizaCard;