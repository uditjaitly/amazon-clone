import React from 'react'
import Ratings from './Ratings'

const ProductPage=(props)=>{
    const selectedProduct=data.products.find((product)=>
        product._id===props.match.params.id
        

    )

    if(!selectedProduct){
        return(
            <div>Product Not Found</div>
        )
    }
  
    const {name,category,images,price,brand,rating,numReviews,description,count}=selectedProduct
    console.log(selectedProduct);
    return(
        <div>
            <div className="row top">
                <div className="col-2">
                    <img className="large" src={images} alt={name}/>
                </div>

                <div className="col-1">
                <ul>
                    <li>
                        <h1>{name}</h1>
                    </li>
                    <li>
                        <Ratings numReviews={numReviews} stars={rating}/>
                    </li>
                    <li>
                        <h2>{`Price $${price}`}</h2>
                    </li>
                </ul>
                </div>

                <div className="col-1">
                    <div className="card">
                        <ul>
                            <li>
                                <div className="row">
                                    <div>Price</div>
                                    <div className="price">${price}</div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div>Status:</div>
                                   
                                    <div className={count>0 ? "in-stock" : "out-of-stock"}>{count>0 ? "In stock" : "Out of stock"}</div>
                                </div>
                            
                            </li>
                            <li>
                                <button className="primary-add"> Add To Cart</button>
                            
                            </li>
                        </ul>
                    </div>
                
                </div>
                
            </div>
        
        </div>
       
    )
}
export default ProductPage