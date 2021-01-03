import React from 'react'
import Ratings from './Ratings'

const Product =(props) =>{
    const product=props.product
    return(
        
                      <div key={product._id} className="card">
                        <a href={`/product/${product._id}`}>
                            <img className="medium" src={product.images} alt={product.name}/>
                        </a>
                        <div className="card-body">
                            <div>
                                <a href="product.html">
                                    <h2>{product.name}</h2>
                                </a>
                            </div>
                            <Ratings stars={product.rating} numReviews={product.numReviews}/>
                            <div className="price">${product.price}</div>
                        </div>


                      </div>
      )
            
            
                    
     
    
}

export default Product