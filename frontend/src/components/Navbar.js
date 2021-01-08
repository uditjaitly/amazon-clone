import React  from 'react'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'

const Navbar =()=>{
    const cartItems= useSelector((state)=>state.userCart)
    
    const {cart}=cartItems

    return(
        <header className="header-row">
                <div className="logo">
                    <Link to={"/"}>amazon</Link>
                </div>
                <div>
                    <Link to="/sign-in">Sign-In</Link>
                    <Link to="/cart">Cart
                    { cart.length>0 && (<span className="badge">{cart.length}</span>)  }
                    </Link>
                </div>
        </header>
    )
}

export default Navbar