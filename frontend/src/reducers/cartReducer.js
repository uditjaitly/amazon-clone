import { ADD_CART_REQUEST, REMOVE_CART_ITEM } from "../constants/cartConstants";

export const cartReducer=(state={cart:[]},action)=>{
    switch(action.type){
        case ADD_CART_REQUEST : 
            const item=action.payload;
            console.log(state)
            const existingItem=state.cart.find((x)=>x.id===item.id);
            if(existingItem){
                return{
                    ...state,
                    cart:state.cart.map((x)=>x.id===existingItem.id ? item : x)
                }
            }else{
                return{...state, cart: [...state.cart, item]}
            }

        case REMOVE_CART_ITEM :
            console.log(action.payload.id)
            return {...state, cart:state.cart.filter((x)=>x.id!==action.payload.id)}
        default: 
            return state;
    }
}