import React from 'react';
import "./Footer.css";

const Footer = ({ param }) => {
  return (
    <div className="footer__container">
        <a href="#"><div className="to__top">
            <p>Back to top</p>
        </div>
        </a>
        <div className="footer">
            <div className="footer__widget">
                <h3>Get to know Us</h3>
                <a href="">Careers</a>
                <a href="">Blog</a>
                <a href="">About Amazon</a>
                <a href="">Investor Relations</a>
                <a href="">Amazon Devices</a>
                <a href="">Amazon Science</a>
            </div>
            <div className="footer__widget">
                <h3>Make Money with Us</h3>
                <a href="">Sell products on Amazon</a>
                <a href="">Sell on Amazon Business</a>
                <a href="">Sell apps on Amazon</a>
                <a href="">Become an Affiliate</a>
                <a href="">Advertise Your Products</a>
                <a href="">Self-Publish with Us</a>
                <a href="">Host an Amazon Hub</a>
                <a href="">See More Make Money with Us</a>
            </div>
            <div className="footer__widget">
                <h3>Amazon Payment Products</h3>
                <a href="">Amazon Business Card</a>
                <a href="">Shop with Points</a>
                <a href="">Reload Your Balance</a>
                <a href="">Amazon Currency Converter</a>
            </div>
            <div className="footer__widget">
                <h3>Let Us Help You</h3>
                <a href="">Amazon and COVID-19</a>
                <a href="">Your Account</a>
                <a href="">Your Orders</a>
                <a href="">Shipping Rates & Policies</a>
                <a href="">Returns & Replacements</a>
                <a href="">Manage Your Content and Devices</a>
                <a href="">Amazon Assistant </a>
                <a href="">Help </a>
            </div>
        </div>
        <div className="footer__end">
            <img src={`${param ? '../footer_logo.png' : './footer_logo.png'}`} alt="Amazon Logo" />
            <p ><a href="https://github.com/uzowis" target="_blank">Designed by _uzowis | Techcrest Innovations</a></p>
        </div>
    </div>
  )
}

export default Footer