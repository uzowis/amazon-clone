import React from 'react';
import { useParams } from 'react-router';
import "./AllProducts.css";
import Header from './Header';
import Products from './Products';
import { useDataLayerValue } from './DataLayer';


const AllProducts = () => {
    const { category } = useParams();
    const [{ inCart, user }] = useDataLayerValue();
    const products =[
        { title : "Lenovo Flex 5 Laptop, 14.0\" FHD Touch Display, AMD Ryzen 5 5500U, 16GB RAM, 256GB Storage, AMD Radeon Graphics,", rating : 5, price: 588.80, oldPrice: 849.99, src : "../products/prod1.jpg"},
        { title : "2022 Acer 15.6\" FHD IPS Touchscreen Chromebook, Intel Dual-Core Celeron N Processor Up to 2.50GHz, 4G", rating : 2, price: 558.80, oldPrice: 849.99, src : "../products/prod2.jpg"},
        { title : "Samsung Galaxy Tab A8 Android Tablet, 10.5” LCD Screen, 64GB Storage, Long-Lasting Battery, Kids Content,", rating : 4, price: 688.80, oldPrice: 849.99, src : "../products/prod3.jpg"},
        { title : "Acer Nitro 5 AN515-55-53E5 Gaming Laptop | Intel Core i5-10300H | NVIDIA GeForce RTX 3050 Laptop GPU | 15.6\" FHD", rating : 3, price: 785.80, oldPrice: 950.99, src : "../products/prod4.jpg"},
        { title : "Apple iPad 9.7inch with WiFi 32GB- Space Gray (2017 Model) (Renewed)", rating : 5, price: 900.80, oldPrice: 1200.99, src : "../products/prod5.jpg"},
        { title : "Samsung Galaxy Tab S8 Android Tablet, 11” LCD Screen, 128GB Storage, DeX Productivity, Qualcomm, 16GB RAM, 256GB Storage, AMD Radeon Graphics,", rating : 2, price: 285.80, oldPrice: 420.99, src : "../products/prod6.jpg"},
        { title : "ATMPC 10.1” Display Tablet PC FHD 1920X1200 Pixels. 4GB RAM 64GB ROM 128GB Expandable 13MP/8PM Dual", rating : 2, price: 587.80, oldPrice: 680.99, src : "../products/prod7.jpg"},
        { title : "Apple iPad (2018 Model) with Wi-Fi only 32GB Apple 9.7in iPad - Space Gray (Renewed)", rating : 5, price: 300.80, oldPrice: 540.99, src : "../products/prod8.jpg"},
        { title : "Dell Optiplex 9020 Small Form Factor Desktop with Intel Core i7-4770 Upto 3.9GHz, HD Graphics 4600 4K", rating : 5, price: 785.80, oldPrice: 849.99, src : "../products/prod9.jpg"},
        { title : "Lenovo Flex 5 Laptop, 14.0\" FHD Touch Display, AMD Ryzen 5 5500U, 16GB RAM, 256GB Storage, AMD Radeon Graphics,", rating : 1, price: 312.40, oldPrice: 540.99, src : "../products/prod11.jpg"},
        { title : "Lenovo Flex 5 Laptop, 14.0\" FHD Touch Display, AMD Ryzen 5 5500U, 16GB RAM, 256GB Storage, AMD Radeon Graphics,", rating : 3, price: 210.50, oldPrice: 620.99, src : "../products/prod22.jpg"},
        { title : "Lenovo Flex 5 Laptop, 14.0\" FHD Touch Display, AMD Ryzen 5 5500U, 16GB RAM, 256GB Storage, AMD Radeon Graphics,", rating : 4, price: 321.20, oldPrice: 560.99, src : "../products/prod33.jpg"},
        { title : "Lenovo Flex 5 Laptop, 14.0\" FHD Touch Display, AMD Ryzen 5 5500U, 16GB RAM, 256GB Storage, AMD Radeon Graphics,", rating : 5, price: 450.50, oldPrice: 750.99, src : "../products/prod44.jpg"},

    ]
  return (
    <div className="all__products">
        <Header param  user={user} sticky/>
        <div className="shop">
            <div className="shop__title">
                <h3>{category}</h3><span>{inCart}</span>
            </div>
            <div className="shop__container">
                <Products products={products} />
            </div>
        </div>

    </div>
  )
}

export default AllProducts