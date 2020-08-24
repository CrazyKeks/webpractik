import React, {useState} from "react";
import './style.sass'

const BuyForm = () => {

    const [validateForm, updateValidateForm] = useState({
        firstname: {
            value: '',
            complete: false,
            error: false
        },
        phone: {
            value: '',
            complete: false,
            error: false
        },
        address: {
            value: '',
            complete: false,
            error: false
        }
    })

    const checkEmpty = (event) => {
        let dataValidate = {...validateForm};
        if (event.target.value) {
            dataValidate[event.target.id].complete = true;
            dataValidate[event.target.id].error = false;
        } else {
            dataValidate[event.target.id].error = true;
        }
        updateValidateForm(dataValidate);
    }

    const saveValue = (event) => {
        let dataValidate = {...validateForm};
        dataValidate[event.target.id].value = event.target.value;
        updateValidateForm(dataValidate);
    }

    const checkValidateForm = (event) => {
        let dataValidate = {...validateForm},
            error = 0;

        for (let item in dataValidate) {
            if (!dataValidate[item].error || dataValidate[item].value.length) {
                dataValidate[item].error = true
                error++;
            }
        }

        if (error) {
            event.preventDefault();
            updateValidateForm(dataValidate);
        }
    }

    return(
            <form className="buyForm" onSubmit={checkValidateForm}>
            <span className="buyForm__title">Контакты</span>
            <div className="buyForm__wrap twoColumn">
                <div className={"buyForm__wrapInput" + (validateForm.firstname.error ? " error" : "") + (validateForm.firstname.complete ? " complete": '')}>
                    <input type="text"
                           className="buyForm__input"
                           name="firstname"
                           id="firstname"
                           onChange={saveValue}
                           onBlur={checkEmpty}
                           defaultValue={validateForm.firstname.value}
                    />
                    <label className="buyForm__label" htmlFor="">Ваше имя</label>
                </div>
                <div className={"buyForm__wrapInput" + (validateForm.phone.error ? " error" : "") + (validateForm.phone.complete ? " complete": '')}>
                    <input
                        type="text"
                        className="buyForm__input"
                        name="phone"
                        id="phone"
                        onChange={saveValue}
                        onBlur={checkEmpty}
                        defaultValue={validateForm.phone.value}
                    />
                    <label className="buyForm__label" htmlFor="">Телефон</label>
                </div>
            </div>
            <div className="buyForm__wrap">
                <div className={"buyForm__wrapInput" + (validateForm.address.error ? " error" : "") + (validateForm.address.complete ? " complete": '')}>
                    <input
                        type="text"
                        className="buyForm__input"
                        name="address"
                        id="address"
                        onChange={saveValue}
                        onBlur={checkEmpty}
                        defaultValue={validateForm.address.value}
                    />
                    <label className="buyForm__label" htmlFor="">Адрес доставки</label>
                </div>
            </div>
            <span className="buyForm__title">Способ оплаты</span>
            <div className="buyForm__wrapRadio">
                <input type="radio" className="buyForm__radio" name='payment' id="paymentСourier" checked/>
                <label htmlFor="paymentСourier" className="buyForm__radioLabel">Оплата наличными или картой курьеру</label>
            </div>
            <div className="buyForm__wrapRadio">
                <input type="radio" className="buyForm__radio" name='payment' id="paymentSite" />
                <label htmlFor="paymentSite" className="buyForm__radioLabel">Оплата картой онлайн на сайте</label>
            </div>

            <button type="submit" className="buyForm__btnBuy">Оформить заказ</button>

            <p className="buyForm__info smallText">Нажимая кнопку «Оформить заказ» вы соглашаетесь с политикой конфиденциальности</p>
        </form>
    )
}

export default BuyForm;