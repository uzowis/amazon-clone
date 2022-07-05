import { CheckCircleOutlineOutlined } from '@material-ui/icons';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useDataLayerValue } from './DataLayer';
import Footer from './Footer';
import Header from './Header';
import "./Success.css";


const Success = () => {
    const navigate = useNavigate();
    const [{ user, reference }, dispatch] = useDataLayerValue();
    
    useEffect(()=>{
        dispatch({
            type: "EMPTY_BASKET",
            basket : []
        });
    }, [])
  return (
    <div className="success">
        <Header user={user} />
        <div className="container">
            <div className="container__details">
                <CheckCircleOutlineOutlined style={{fontSize: "60px"}} className="success__icon" />
                <h3>Your Payment was Successful </h3>
                <p>Thank you for shopping with US</p>
                <button onClick={()=>{navigate('/')}}>Shop More</button>
            </div>
        </div>
        
        <Footer />
    </div>
  )
}

export default Success