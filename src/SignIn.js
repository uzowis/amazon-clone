import React, { useState } from 'react';
import './SignIn.css';
import { auth } from './firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@firebase/auth';
import { useNavigate } from 'react-router';
import { useDataLayerValue } from './DataLayer';
import { Link } from 'react-router-dom';

const SignIn = () => {
    const [{basket}] = useDataLayerValue();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignIn =() =>{
        signInWithEmailAndPassword(auth, email, password)
        .then((auth)=>{
            if(basket.length >0){
                navigate('/checkout');
              }else{
                navigate('/');
              }
            
        })
        .catch((error) => {
            if(error.message){
                setError('Incorrect Username/Password');
            }
        });
        

    }
    const handleRegister =() =>{
        // alert("Register was clicked");
        createUserWithEmailAndPassword(auth, email, password)
        .then((userDetails)=>{
            navigate('/');

        })
        .catch((error) => {
            setError(error.message)
        });

    }
  return (
    <div className="sign__in">
        <Link to={'/'}>
        <div className="sign__in__logo">
        <img src="./amazon_login_logo.png" alt="" />
        </div>
        </Link>
        
        <div className="sign__in__container">
            <h3>Sign-In</h3>
            <p style={{color: "red", textAlign :"center", fontSize: "12px", fontWeight: "bold"}}>{error}</p>
            <p><strong>Email </strong></p>
            <input value={email} type="text" onChange={(e)=>{setEmail(e.target.value); setError('')}} />
            <p><strong>Password </strong></p>
            <input value={password} type="password" onChange={(e)=>{setPassword(e.target.value); setError('')}} /><br/>
            <button onClick={()=>{handleSignIn()} } className="sign__in__button" type="submit">Sign In</button><br/>
            <small> By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</small>
            <br/><br/><a href="#">Need Help?</a>

        </div>

        <div className="register__container">
            <div className="divider">
                <div className="divider__line">________________</div>
                <div className="divider__title">New to Amazon?</div>
                <div className="divider__line">________________</div>
            </div>

            <button onClick={()=>{handleRegister()} } className="register__button" type="submit">Create your Amazon Account</button>
        </div>
    </div>
  )
}

export default SignIn