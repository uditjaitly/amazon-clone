import React  from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import { signout } from '../actions/userActions'

const Navbar =()=>{
    const cartItems= useSelector((state)=>state.userCart)
    const {user}=useSelector((state)=>state.userSignIn)
   
    const {cart}=cartItems
    const dispatch= useDispatch();
    const handleSignout=()=>{
        dispatch(signout());
    }

    return(
        <header className="header-row">
                <div className="logo">
                    <Link to={"/"}>amazon</Link>
                </div>
                <div>
                    {user ?(
                        <div className="dropdown">   
                        <Link to="#">{user.name}<i className="fa fa-caret-down"></i></Link><ul className="dropdown-content"> <Link to="#signout" onClick={handleSignout}>Sign Out</Link></ul></div>) :  (<Link to="/signin">Sign-In</Link>)}
                        
                    <Link to="/cart">Cart
                    { cart.length>0 && (<span className="badge">{cart.length}</span>)  }
                    </Link>
                </div>
        </header>
    )
}

export default Navbar