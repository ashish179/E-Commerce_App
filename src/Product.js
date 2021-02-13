import React from 'react'
import './css/product.css'
import {useStateValue}  from "./StateProvider";

function Product({id,title,image,price,rating,}) {

    const [{basket},dispatch] = useStateValue();

    const addToBasket= ()=> {

        //DISPATCH ACTION
    dispatch({
        type:'ADD_TO_BASKET',
        item:{

            id:id,
            title:title,
            image:image,
            price:price,
            rating:rating
        }
    })
    }
    return (
        <div className='product'>
            
            <div className="product__info">
                <p>
                   {title}
                </p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_,i) => (

                         <p>*</p>
                    ))}
                   
                    
                </div>


            </div>
            <img className="product__image" alt="product" 
            src={image}></img>
         <button onClick={addToBasket}> add to basket</button>
        </div>
    )
}

export default Product
