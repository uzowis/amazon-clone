import React from 'react';
import "./ProductsByCat.css";
import CatProduct from "./CatProduct";
import { useNavigate} from 'react-router';

const ProductsByCat = ({ title, link, categories, productRow, single, cat}) => {
  
  const navigate = useNavigate();

  function nav(){
      navigate(`/allproducts/${title}`);
  }

  return (
    <div className={`${!productRow ? 'cat__container': 'product__row'} `} >
        <h3>{title}</h3>
        {
          // For Product Row
          productRow && (
            <div className="products" onClick={nav} >
            {
              categories.map((src, index) =>(
              <>
              <img key={index} src={src} alt="" />
              </>
            ))
            }
            </div>
          
          )
        }

        {
          // For Multiple Categories
          cat && (
            <>
            <CatProduct  categories={categories} nav={nav} />
            <a onClick={nav} >{link}</a>
            </>
          )
        }
        
        
        {
          // For Single Category
        single && (
            <>
          <img onClick={nav} src={categories.src} alt={title}  className="single__cat"/>
          <a onClick={nav} >{link}</a>
          </>
          )
        }
       
        

    </div>
  )
}

export default ProductsByCat