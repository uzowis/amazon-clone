import { Star } from '@material-ui/icons';
import React from 'react';
import "./Products.css";
import truncate from './truncate';
import { useDataLayerValue } from './DataLayer';

const Products = ({ products }) => {
    const [{ basket, inCart}, dispatch ] = useDataLayerValue();

    
    
    const addToCart = (id, src, product, price, qty) =>{
        const index = basket.findIndex((item)=> item.id === id);
        if(index >= 0){
            // dispatch({
            //     type : 'ALREADY_IN_CART',
            //     inCart : "Already in Cart"
            // })
            alert("Already In Cart");
        }else{
            dispatch({
                type : 'ADD_TO_CART',
                item : {
                    id : id,
                    src: src,
                    product: product,
                    price : price,
                    qty : qty,
                    priceNew : price
                }
            })
            dispatch({
                    type: 'ALREADY_IN_CART',
                    inCart : ''
                })
        }
        
    }

   
  return (
    <div className="shop__product__container">
        {
            products.map((product, index) =>(
                <div key={index} className="shop__product">
                    <div  className="wrap">
                        <img src={product.src} alt="Product Image" />
                        <h3>{ truncate( product.title, 110)}</h3>
                        {
                        Array(product.rating).fill().map((_, i) =>(
                            <Star className="rating"/>
                        ))
                        }
                        
                        <p className="price">${product.price} { product.oldPrice && <strike className="oldprice">${product.oldPrice}</strike>}</p>
                    </div>
                    <button onClick={()=>{addToCart(index, product.src, product.title, product.price, 1)}}>Add to Cart</button>
                </div>
            ))
        }
        
    </div>
  )
}

export default Products