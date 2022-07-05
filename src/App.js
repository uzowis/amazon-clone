import { useNavigate } from 'react-router';
import { onAuthStateChanged } from '@firebase/auth';
import { useEffect } from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllProducts from './AllProducts';
import './App.css';
import Checkout from './Checkout';
import { useDataLayerValue } from './DataLayer';
import { auth } from './firebase';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import SignIn from './SignIn';
import Payment from './Payment';
import Success from './Success';


function App() {
  const [{ user, basket, reference}, dispatch] = useDataLayerValue();
 
  useEffect(() =>{
    onAuthStateChanged(auth, (user)=>{
      if(user){
        dispatch({
          type : 'SET_USER',
          user : user
        })
      }else{
        dispatch({
          type : 'SET_USER',
          user : null
        })
      }
    })
    
  
  }, [user]);

  return (
    <Router>
      <div className="app">
        {/* Routes */}
        <Routes>
          {/* Home Route */}
          <Route path="/" caseSensitive="false" element=
              {
                <>
                  <Header user={user}/>
                  <Home />
                  <Footer />
                </>
              }
              />
            
            {/* All Products Route */}
            <Route path="/allproducts/:category" caseSensitive="false" element=
            {
              <>
                <AllProducts />
                <Footer param/>
              </>
            }/>
            
            {/* Product CheckOut Route */}
            <Route path="/checkout" caseSensitive="false" element=
            {
              <>
                <Checkout />
              </>
            }/> 
            
            {/* Payment Route */}
            <Route path="/payment" caseSensitive="false" element=
            {
              (basket.length > 0)
              ?
              <Payment />
              :
              <AllProducts />
            
            }/>
            
            {/* Payment Success Route */}
            <Route path="/success" caseSensitive="false" element=
            {
              (reference === '')
              ?
              <AllProducts />
              :
              <Success />
              
            
            
            }/>
            
            {/* Authentication Route */}
            <Route path="/signin" caseSensitive="false" element=
            {
              <>
                <SignIn />
              </>
            }/>

            
        </Routes>

        
        
        

    </div>
    </Router>
    
  );
}

export default App;
