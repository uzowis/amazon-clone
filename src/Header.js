import React from "react";
import "./Header.css";
import FmdGood from '@mui/icons-material/FmdGood';
import { AddShoppingCartOutlined, Search } from "@material-ui/icons";
import { MenuOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useDataLayerValue } from './DataLayer';

const Header = ({ param }) => {
    const [{ basket } ] = useDataLayerValue();
  return (
    
    <div className="header__main">
        <div className="header">  
            <div className="header__left">
                <div className="logo">
               <Link to={'/'}> <img src={`${param ? '../Amazon_logo.svg.png' : './Amazon_logo.svg.png'}`} alt="Amazon Logo" className="logo" /> </Link>
                </div>
                <div className="address">
                <div className="address__icon">
                    <FmdGood />
                </div>
                <div className="address__details">
                    <p>Deliver to</p>
                    <h3><strong>Nigeria</strong></h3>
                </div>
                </div>
            </div>
            <div className="header__center">
                <div className="searchbar">
                    <input type="text" />
                    <span className="search__icon">
                        <Search />
                    </span>
                </div>
            </div>
            <div className="header__right">
                <div className="info__text">
                    <p>Hello, Wisdom</p>
                    <h3><strong>Sign in </strong></h3>
                </div>
                <div className="info__text">
                    <p>Returns</p>
                    <h3><strong>& Orders</strong></h3>
                    
                </div>
                
                <Link to={'/checkout'}>
                    <div className="cart__info">
                        <AddShoppingCartOutlined className="cart" />
                        <strong><h3 style={{textDecoration: "none"}}>{basket?.length}</h3></strong>
                    </div>
                </Link>
            
            </div>

        


        </div>

        {/* Progressive Nav-Bar */}
        <div className="nav">
            <div className="nav__left">
                <span><MenuOutlined /></span>
               <Link  to={'/allproducts/All Products'}> <a>All</a> </Link>
                <a>Today's Deals</a>
                <a>Customer Service</a>
                <a>Registry</a>
                <a>Gift Cards</a>
                <a>Sell</a>
            </div>
            
            <div className="nav__right">
                <a>Shop Father's Day Gifts</a>
            </div>
            
        </div>

    </div>
  );
};

export default Header;
