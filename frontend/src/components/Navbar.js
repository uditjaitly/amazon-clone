import React from 'react'


const Navbar =()=>{
    return(
        <header className="header-row">
                <div className="logo">
                    <a href={"/"}>amazon</a>
                </div>
                <div>
                    <a href="/sign-in">Sign-In</a>
                    <a href="/cart">Cart</a>
                </div>
        </header>
    )
}

export default Navbar