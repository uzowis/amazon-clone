import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllProducts from './AllProducts';
import './App.css';
import Checkout from './Checkout';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';

function App() {
  return (
    <Router>
      <div className="app">
        {/* Routes */}
        <Routes>
          {/* Home Route */}
          <Route path="/" caseSensitive="false" element=
              {
                <>
                  <Header />
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
            
            {/* All Products Route */}
            <Route path="/checkout" caseSensitive="false" element=
            {
              <>
                <Checkout />
              </>
            }/>

            
        </Routes>

        
        
        

    </div>
    </Router>
    
  );
}

export default App;
