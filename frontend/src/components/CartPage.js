import React , {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { addToCart, removeCartItem } from '../actions/cartActions';
import {Link} from 'react-router-dom'
import MessageBox from './MessageBox'
export default function CartPage(props) {
    const dispatch=useDispatch()
    const productId=props.match.params.id
    const quantity= props.location.search ? Number(props.location.search.split("=")[1]):1;
    const cartItems=useSelector((state)=>state.userCart);
    const {cart}=cartItems;
    useEffect(() => {
        
        if(productId){
            dispatch(addToCart(productId,quantity))
        }
        
        
    }, [dispatch, productId,quantity])

    const removeFromCartHandler = (id) =>{
        dispatch(removeCartItem(id))
    };

    const checkoutHandler = () =>{
        props.history.push('/signin?redirect=shipping')
    }
    return (
        <div>	    
            <div className="row top">
          	      
            <div className="col-2">
            <h1>Shopping Cart</h1>
              {cartItems.length === 0 ? (
                  <MessageBox>
                Cart is empty. <Link to="/">Go Shopping</Link>
              </MessageBox>
            ) : (
              <ul>
                {cart.map((item) => (
                  <li key={item.id}>
                    <div className="row">
                      <div>
                        <img
                          src={item.image}
                          alt={item.name}
                          className="small"
                        ></img>
                      </div>
                      <div className="min-30">
                        <Link to={`/product/${item.id}`}>{item.name}</Link>
                      </div>
                      <div>
                        <select
                          value={item.qty}
                          onChange={(e) =>
                            dispatch(
                              addToCart(item.id, Number(e.target.value))
                            )
                          }
                        >
                          {[...Array(item.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>${item.price}</div>
                      <div>
                        <button
                          type="button"
                          onClick={() => removeFromCartHandler(item.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="col-1">
            <div className="card card-body">
              <ul>
                <li>
                  <h2>
                    Subtotal ({cart.reduce((a, c) => a + c.quantity, 0)} items) : $
                    {cart.reduce((a, c) => a + c.price * c.quantity, 0)}
                  </h2>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={checkoutHandler}
                    className="primary block"
                    disabled={cart.length === 0}
                  >
                    Proceed to Checkout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>	    
    </div>
    );	
}
