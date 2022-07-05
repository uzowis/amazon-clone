import Header from "./Header";
import React from 'react';
import "./Payment.css";
import { useDataLayerValue } from "./DataLayer";
import truncate from "./truncate";
import CurrencyFormat from "react-currency-format";
import Subtotal from "./Subtotal";
import { usePaystackPayment } from "react-paystack";
import { getBasketTotal } from "./reducer";
import Footer from "./Footer";
import { useNavigate } from "react-router";
import { db } from "./firebase";




const Payment = () => {
    const [{basket, user}, dispatch] = useDataLayerValue();
    const navigate = useNavigate();

    const config ={
        reference : (new Date()).getTime().toString(),
        email : user?.email,
        amount: ((getBasketTotal(basket) * 610) * 100),
        publicKey : "pk_test_76e499693f20addcc0962acd9bd83b612d95c0e4",

    }

    const onSuccess = (reference) =>{
        if(reference?.status === "success"){
            dispatch({
                type : 'SET_REFERENCE',
                reference : reference?.status
            })
                // db
                // .collection('users')
                // .doc(user?.uid)
                // .collection('orders')
                // .doc(reference?.reference)
                // .set({
                //     amount : ((getBasketTotal(basket) * 610) * 100),
                //     basket: basket,
                // })
           
            navigate('/success');
            console.log(reference);

            
        }
        
       
       
    }
    
    const onClose = () =>{
        alert("Payment Cancelled");
    }

    const initializePayment = usePaystackPayment(config);


  return (
    <div className="payment">
        <Header user={user}/>
        <h3 style={{textAlign: "center", fontSize: "20px"}}>Checkout ({basket?.length} items)</h3>
        <div className="payment__container">
            <div className="products__incart">
                <h3>Review Items for Delivery</h3>
            {
                    basket?.map((cart, index) => (
                        <div key={index} className="cart__product">
                            <img src={cart.src} alt="Product Image" />
                            <div className="product__info">
                                <h3>{truncate(`${cart.product}`, 100)}</h3>
                                <p><b>Qty: {cart?.qty}</b> </p>
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
            </div>
            
            <div className="delivery">
                <h3>Delivery Address:</h3>
                <p>#14 Glassdoor Street, Port Harcourt, Nigeria.</p>
            </div>

            <div style={{textAlign:"center", padding: "20px 0 20px 0"}} className="products__subtotal">
                <Subtotal className="title"/>
            </div>
            
            <div className="payment__method">
                <h3>Payment Method:</h3>
                <div className="payment__button ">
                    <button className="btn " onClick={()=>initializePayment(onSuccess, onClose)}>
                        Pay with Card
                    </button>
                </div>
            </div>
            
           

        </div>

        <Footer />
    </div>
  )
}

export default Payment