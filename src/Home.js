
import React from 'react';
import "./Home.css";
import ProductsByCat from './ProductsByCat';


const Home = () => {
    // Multiple Category items
    const gamingAcc = [
        {title : "Headsets", src : "./headsets_cat.jpg"},
        {title : "Keyboards", src : "./keyboard_cat.jpg"},
        {title : "Computer mice", src : "./mouse_cat.jpg"},
        {title : "Chairs", src : "./chairs_cat.jpg"}
    ];
    const compAcc = [
        {title : "Computer & Accessories", src : "./omp_ass_cat.jpg"},
        {title : "Video Games", src : "./vidgame_cat.jpg"},
        {title : "Baby", src : "./babies_cat.jpg"},
        {title : "Toys & Games", src : "./toys_cat.jpg"}
    ];

    // Single Category Items
    const electronics = {src : "./electonics_cat.jpg"};
    const comp_acc = {src : "./comp_acc.jpg"};
    const fitness = {src : "./fitness_cat.jpg"};
    const health = {src : "./health_cat.jpg"};
    const gifts = {src : "./gifts.jpg"};
    const promo = {src : "./promo_cat.jpg"};
    const shops = {src : "./shops_cat.jpg"};
    const strpLight = {src : "./strp_light_cat.jpg"};
    const newArrival = {src : "./new_toys_cat.jpg"};

    // Product Items
    const popularProducts = [
        "./products/pr1.jpg",
        "./products/pr2.jpg",
        "./products/pr3.jpg",
        "./products/pr4.jpg",
        "./products/pr5.jpg",
        "./products/pr6.jpg",
        "./products/pr7.jpg",
        "./products/pr8.jpg",
        "./products/pr9.jpg",
        "./products/pr11.jpg",
        "./products/pr22.jpg",
        "./products/pr33.jpg",
        "./products/pr44.jpg",
        "./products/pr55.jpg"
    ];

    const topSellerBooks = [
        "./products/bk1.jpg",
        "./products/bk2.jpg",
        "./products/bk3.jpg",
        "./products/bk4.jpg",
        "./products/bk5.jpg",
        "./products/bk6.jpg",
        "./products/bk7.jpg",
        "./products/bk8.jpg",
        "./products/bk9.jpg"
    ];


  return (
    
    <div className="home">
       
            <img src="./imgs/slider1.jpg" alt="Furniture Slider" className="slider__img"/>
            
            <div className="home__container">
                <ProductsByCat categories={gamingAcc} title="Gaming Accessories" link="See More" cat/>
                <ProductsByCat categories={compAcc} title="Computer and Accessories" link="Shop Now" cat/>
                <ProductsByCat categories={gamingAcc} title="Gaming Accessories" link="See More" cat/>
                <ProductsByCat categories={electronics} title="Electronics" link="Shop more" single />
                <ProductsByCat categories={comp_acc} title="Computer & Accessories" link="Shop more" single />
                <ProductsByCat categories={gifts} title="Deal of the Day" link="See more" single />
                <ProductsByCat categories={health} title="Health & Personal Care" link="Shop more" single />
                <ProductsByCat categories={fitness} title="For Your Fitness Needs" link="Shop more" single />
             
            </div>

            <div className="row__container">
                <ProductsByCat 
                    title="Popular products in PC internationally"
                    categories={popularProducts}
                    productRow
                />
            </div>
            <div className="row__container">
                <ProductsByCat 
                    title="Top Sellers in Books for you"
                    categories={topSellerBooks}
                    productRow
                />
            </div>

            <div className="home__container">
                <ProductsByCat categories={promo} title="Promo products" link="See more" single />
                <ProductsByCat categories={shops} title="Shop Laptops & Tablets" link="See more" single />
                <ProductsByCat categories={strpLight} title="Create with strip lights" link="Shop now" single />
                <ProductsByCat categories={newArrival} title="New arrivals in Toys" link="Shop Now" single />
            </div>
            
    </div>
  )
}

export default Home