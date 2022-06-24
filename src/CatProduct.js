import React from 'react';
import "./CatProduct.css";

function CatProduct({ categories, nav}) {
  return (
    <div className="product__container" onClick={nav}>
      { 
        categories.map((category, index) =>(
          <div key={index} className="product">
            <img src={category.src} alt="" />
            <p className="title">{category.title}</p>
          </div>
        ))
      
      }
        

    </div>
  )
}

export default CatProduct