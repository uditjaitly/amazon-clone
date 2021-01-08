import {productListReducer,productDetailsReducer} from "../reducers/productReducers"
import {cartReducer} from "../reducers/cartReducer"
import {applyMiddleware, combineReducers, compose, createStore} from "redux"
import thunk from 'redux-thunk'
const initialState={
    userCart:{  cart:localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')):[]

    }

    
};

const reducer=combineReducers({
    productList:productListReducer,
    productDetails:productDetailsReducer,
    userCart:cartReducer,
    }
    )
const composeEnhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(reducer,initialState,composeEnhancer(applyMiddleware(thunk)));

export default store;