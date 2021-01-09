import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from '../components/Home'
import ProductPage from '../components/ProductPageTemp'
import NotFound from '../components/NotFound'
import Navbar from '../components/Navbar'
import CartPage from '../components/CartPage'
import Signin from '../components/Signin'

const AppRouter=()=>{

  
    return(
        
        <BrowserRouter>
        <div>
            <Navbar/>
        </div>
                <Switch>
                    <Route path="/" exact={true} component={Home}></Route>
                    <Route path="/cart/:id?" component={CartPage}></Route>
                    <Route path="/product/:id" exact={true} component={ProductPage}></Route>
                    <Route path="/signin" exact={true} component={Signin}></Route>
                    <Route component={NotFound}></Route>
                </Switch>

        </BrowserRouter>
    )
}
export default AppRouter