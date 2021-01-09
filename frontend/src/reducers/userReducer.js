import { SIGN_IN_FAIL, SIGN_IN_REQUEST, SIGN_IN_SUCCESS, SIGN_OUT_REQUEST } from "../constants/userConstants";

export const userReducer=(state={},action)=>{
    switch(action.type){
        case SIGN_IN_REQUEST:
            return {loading:true}
        case SIGN_IN_SUCCESS:
            return {loading:false, user:action.payload}
        case SIGN_IN_FAIL:
            return {loading:false, error: action.payload}
        case SIGN_OUT_REQUEST:
            return {}
        default:
            return state
    }

}