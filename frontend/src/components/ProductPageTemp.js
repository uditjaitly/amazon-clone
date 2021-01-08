import React, { useEffect , useState} from 'react'
import Ratings from './Ratings'
import {useSelector, useDispatch} from 'react-redux'
import {detailsOfProducts} from '../actions/productActions'
import MessageBox from '../components/MessageBox'
import Loading from './Loading'

const ProductPage=(props)=>{

    const dispatch = useDispatch();
    const [quantity, handleQuantity] = useState(1);
    const productId=props.match.params.id;
    console.log(productId)
    const productDetails=useSelector((state)=>state.productDetails)
    const {loading, error,products}=productDetails
    useEffect(()=>{
        dispatch(detailsOfProducts(productId));
    },[dispatch,productId])
    
    console.log(products)
   
    const handleAddToCart=()=>{
        props.history.push(`/cart/${productId}?quantity=${quantity}`)

    }
  

    return(
        <div>
            {loading ? (<Loading></Loading>):error?(<MessageBox variant="danger">{error}</MessageBox>):(
            <div className="row top">
                <div className="col-2">
                    <img className="large" src={products.images} alt={products.name}/>
                </div>

                <div className="col-1">
                <ul>
                    <li>
                        <h1>{products.name}</h1>
                    </li>
                    <li>
                        <Ratings numReviews={products.numReviews} stars={products.rating}/>
                    </li>
                    <li>
                        <h2>{`Price $${products.price}`}</h2>
                    </li>
                </ul>
                </div>

                <div className="col-1">
                    <div className="card">
                        <ul>
                            <li>
                                <div className="row">
                                    <div>Price</div>
                                    <div className="price">${products.price}</div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div>Status:</div>
                                   
                                    <div className={products.count>0 ? "in-stock" : "out-of-stock"}>{products.count>0 ? "In stock" : "Out of stock"}</div>
                                </div>
                            
                            </li>
                            {
                                products.count > 0  && (
                                    <li>
                                        <div className="row">
                                            <div>Quantity</div>
                                            <div>
                                                <select value={quantity} onChange={e=>handleQuantity(e.target.value)}>
                                                    {[...Array(products.count).keys()].map(
                                                        (x)=>(
                                                            <option key={x+1} value={x+1}>{x+1}</option>
                                                        )

                                                    )}
                                                </select>
                                            </div>
                                        
                                        </div>
                                        <button onClick={handleAddToCart} className="primary-add"> Add To Cart</button>
                                
                                    </li>
                                )

                            }
                           
                        </ul>
                    </div>
                
                </div>
                
            </div>
            )}
        </div>
       
    )
}
export default ProductPage