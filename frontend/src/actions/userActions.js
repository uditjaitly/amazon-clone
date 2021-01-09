import axios from "axios";
import { SIGN_IN_FAIL, SIGN_IN_REQUEST, SIGN_IN_SUCCESS, SIGN_OUT_REQUEST } from "../constants/userConstants"


export const signin=(email,password)=>async(dispatch)=>{
    dispatch({type:SIGN_IN_REQUEST, payload:{email,password}});
    try{
        const {data}= await axios.post('/api/users/signin',{email,password})
        dispatch({type:SIGN_IN_SUCCESS,payload:data});
        localStorage.setItem("userInfo", JSON.stringify(data))
    }
    catch(error){
        dispatch({type:SIGN_IN_FAIL,payload: error.response && error.response.data.message ? error.response.data.message:error.message,})
    }
}

export const signout=()=>async(dispatch)=>{
    localStorage.removeItem("userInfo");
    localStorage.removeItem("cart")
    dispatch({type:SIGN_OUT_REQUEST})
}