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


function App() {
  const [{ user}, dispatch] = useDataLayerValue();
 
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
            
            {/* Product CheckOut Route */}
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
