import React from 'react'

const Ratings=(props)=>{
    return(
        <div className="rating">
            {console.log(props)};
            <span><i className={props.stars>=1?"fa fa-star":props.stars>=0.5?"fa fa-star-half-o":"fa fa-star-o"}></i></span>
            <span><i className={props.stars>=2?"fa fa-star":props.stars>=1.5?"fa fa-star-half-o":"fa fa-star-o"}></i></span>
            <span><i className={props.stars>=3?"fa fa-star":props.stars>=2.5?"fa fa-star-half-o":"fa fa-star-o"}></i></span>
            <span><i className={props.stars>=4?"fa fa-star":props.stars>=3.5?"fa fa-star-half-o":"fa fa-star-o"}></i></span>
            <span><i className={props.stars>=5?"fa fa-star":props.stars>=4.5?"fa fa-star-half-o":"fa fa-star-o"}></i></span>
            <span>{props.numReviews} reviews </span>
        </div>
    )
}

export default Ratings