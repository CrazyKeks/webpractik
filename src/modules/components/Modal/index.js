import React from "react";
import './style.sass'
import BuyForm from "../BuyForm";
import BasketModal from "../BasketModal";

import {useSelector, useDispatch} from "react-redux";
import {statusModalBasket} from "../../../redux/action/openModalBasket";

const Modal = () => {
    const dispatch = useDispatch();
    const stateModal = useSelector(({openModalBasket})=>{
        return {
            statusModal: openModalBasket.status
        }
    })

    const popupSwitch = () => {
        if (stateModal.statusModal) {
            dispatch(statusModalBasket(false))
        } else {
            dispatch(statusModalBasket(true))
        }
    }

    const closePopup = () => {
        dispatch(statusModalBasket(false))
    }

    return(
        <div className={"modal" + (stateModal.statusModal ? '' : ' close')}>
            <div className="modal__bg" onClick={closePopup}></div>
            <div className="modal__wrapper">
                <h3 className="modal__title">Ваш заказ</h3>
                <button className="modal__close" onClick={popupSwitch}></button>
                <BasketModal/>
                <BuyForm/>
            </div>
        </div>
    )
}

export default Modal