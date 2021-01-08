import axios from "axios"
import { ADD_CART_REQUEST, REMOVE_CART_ITEM } from "../constants/cartConstants"
import Axios from 'axios'
export const addToCart=(productId,quantity)=>async(dispatch, getState)=>{
    const {data}=await Axios(`/api/products/${productId}`)
    dispatch({
        type:ADD_CART_REQUEST,
        payload:{
            name:data.name,
            image:data.image,
            price:data.price,
            count:data.count,
            id:data._id,
            quantity
        }
    })
    localStorage.setItem('cart',JSON.stringify(getState().userCart.cart))
}

export const removeCartItem=(productId)=>(dispatch,getState)=>{
    dispatch({
        type:REMOVE_CART_ITEM,
        payload:{
            id:productId
        }
    })
    localStorage.setItem('cart',JSON.stringify(getState().userCart.cart));
}