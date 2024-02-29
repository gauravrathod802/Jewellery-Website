import React from 'react';
import "./EssentialProduct.css";

const EssentialProduct = () => {
  return (
    <div className='essential-product'>
        <h1>Kalyan Essentials</h1>
        <div className='essential-product-container'>
            <div className='essential-product-1'>
                <img src="https://www.giva.co/cdn/shop/files/Desktop_gold-min.jpg?v=1708431427&width=1500" alt="pure gold image" />
            </div>
            <div className='essential-product-2'>
                <img src="https://www.giva.co/cdn/shop/files/Desktop_silver_1_-min.jpg?v=1708431479&width=1500" alt="pure silver image" />
            </div>
        </div>
    </div>
  )
}

export default EssentialProduct;