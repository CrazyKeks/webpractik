import React from "react";
import './style.sass'

import {useSelector, useDispatch} from "react-redux";

const CatalogPizaCard = (props) => {

    const titleSizeText = 'Размер, см:';
    const textBtnBuy = 'Заказать';

    return(
        <li className="catalogPizzaCard__item">
            <div className="catalogPizzaCard__wrapLeftSideMobile">
                <div className="catalogPizzaCard__wrapIcon">
                    {
                        props.type.map(itemType => {
                            if (itemType !== 'all'){
                                return props.iconComponent(itemType)
                            }
                        })
                    }
                </div>
                <div className="catalogPizzaCard__wrapImg">
                    <span className="catalogPizzaCard__borderBigPizza"></span>
                    <span className="catalogPizzaCard__borderMiddlePizza"></span>
                    <img
                        src={process.env.PUBLIC_URL + props.image}
                        alt=""
                        className={'catalogPizzaCard__img' + ' ' + props.sizeImgPizzaClass}/>
                </div>
            </div>
            <div className="catalogPizzaCard__wrapRightSideMobile">
                <h4 className="catalogPizzaCard__title">{props.title}</h4>
                <p className="catalogPizzaCard__recept smallText">{props.recept}</p>
                <p className="catalogPizzaCard__titleSize">{titleSizeText}</p>
                <ul className="catalogPizzaCard__sizeList">
                    {
                        props.size.map(size=>(
                            <li className="catalogPizzaCard__sizeItem" key={size.textSize}>
                                <button
                                    className={'catalogPizzaCard__sizeBtn' + ' ' + (size.active ? 'active' : '')}
                                    onClick={()=>props.clickSize(props.title, size.textSize, size.class)}
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
                <button
                    className="catalogPizzaCard__buy"
                    onClick={props.clickBuy}
                >
                    {textBtnBuy}
                </button>
                <button className="catalogPizzaCard__buy mobileBuy" onClick={props.clickBuy}>{`от ${props.price} руб.`}</button>
            </div>
        </li>
    )
}

export default CatalogPizaCard;