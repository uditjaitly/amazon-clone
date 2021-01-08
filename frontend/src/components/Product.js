import React from 'react'
import Ratings from './Ratings'
import {Link} from 'react-router-dom'
const Product =(props) =>{
    const product=props.product
    return(
        
                      <div key={product._id} className="card">
                        <Link to={`/product/${product._id}`}>
                            <img className="medium" src={product.images} alt={product.name}/>
                        </Link>
                        <div className="card-body">
                            <div>
                                <Link to={`/product/${product._id}`}>
                                    <h2>{product.name}</h2>
                                </Link>
                            </div>
                            <Ratings stars={product.rating} numReviews={product.numReviews}/>
                            <div className="price">${product.price}</div>
                        </div>


                      </div>
      )
            
            
                    
     
    
}

export default Product