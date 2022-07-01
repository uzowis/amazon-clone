import React, { useEffect } from 'react'
import Footer from './Footer'
import Header from './Header'
import truncate from './truncate'
import "./Checkout.css"
import Subtotal from './Subtotal';
import { useDataLayerValue } from './DataLayer';
import {Link, useNavigate} from 'react-router-dom';
import CurrencyFormat from 'react-currency-format'

const Checkout = () => {
    const [{ basket, qty, user }, dispatch ] = useDataLayerValue();
    const navigate = useNavigate();

    useEffect(()=>{
        if(!user){
            navigate('/signin');
        }
    })

    const removeFromCart =(id) =>{
        dispatch({
            type : 'REMOVE_FROM_CART',
            id : id
        })
    }
    const handleQty = (e, id) =>{
        dispatch({
            type: "QTY",
            id : id,
            qty : e.target.value,
            // price : price

        })

    }
  return (
    <div className="checkout">
        <Header user={user}/>
        <div className="checkout__container">
            <div className="cart__container">
                <h3>Shopping Cart</h3>
                { (basket.length < 1) && <p>No Item in Cart - <Link to={'/allproducts/All'}> Add Items </Link></p>}
                <p>Price</p>
                {
                    basket?.map((cart, index) => (
                        <div key={index} className="cart__product">
                            <img src={cart.src} alt="Product Image" />
                            <div className="product__info">
                                <h3>{truncate(`${cart.product}`, 100)}</h3>
                                <select onChange={(e)=>{handleQty(e, cart.id)}} value={cart.qty} name="" id="">
                                    <option value="1" selected >Qty: 1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                </select>
                                <span><a onClick={()=>{removeFromCart(cart.id)}} href="#">Delete</a></span>
                                <span><a href="#">Save for later</a></span>
                                <span><a href="#">compare with similar items</a></span>
                            </div>
                            <div className="product__price">
                                <CurrencyFormat 
                                    renderText={(value)=>(
                                        <>
                                            <p className="subtotal__value"><strong>{value}</strong></p> 
                                            
                                        </>
                                    )}

                                    decimalScale={'2'}
                                    value={cart.priceNew}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                    
                                />
                            </div>
                        </div>
                    ))
                }
                
                <div className="products__subtotal">
                    <Subtotal className="title"/>
                </div>
            </div>
            <div className="subtotal">
                <Subtotal />
                <small className="subtotal__gift">
                    <input type="checkbox" /> This order contains a gift
                </small>
                <button>Proceed to Checkout</button>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Checkout