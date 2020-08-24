import {createStore, combineReducers} from "redux";
import pizza from "./reducers/pizza";
import filters from "./reducers/filters";
import category from "./reducers/category";
import openModalBasket from "./reducers/openModalBasket";
import basket from "./reducers/basket";

const rootReducer = combineReducers({
    pizza,
    filters,
    category,
    openModalBasket,
    basket
});

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;