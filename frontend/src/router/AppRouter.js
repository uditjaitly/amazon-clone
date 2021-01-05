import React from 'react'
import {BrowserRouter,Router, Route, Switch, Link, NavLink} from 'react-router-dom'
import Home from '../components/Home'
import ProductPage from '../components/ProductPageTemp'
import NotFound from '../components/NotFound'
import Navbar from '../components/Navbar'

const AppRouter=()=>{
    return(
        
        <BrowserRouter>
        <div>
            <Navbar/>
        </div>
                <Switch>
                    <Route path="/" exact={true} component={Home}></Route>
                    <Route path="/product/:id" exact={true} component={ProductPage}></Route>
                    <Route component={NotFound}></Route>
                </Switch>

        </BrowserRouter>
    )
}
export default AppRouter