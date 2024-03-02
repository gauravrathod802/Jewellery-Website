import React from "react";
import "./Products.css";

const product = [{imagename: "https://www.giva.co/cdn/shop/products/BR046_1_2_a91b3ca0-1829-4267-a462-48ac2187e87b.jpg?v=1652443622&width=713",
                title: "Ring",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                rating:"",
                price:"1200",
                },
                {imagename: "https://www.giva.co/cdn/shop/products/BR046_1_2_a91b3ca0-1829-4267-a462-48ac2187e87b.jpg?v=1652443622&width=713",
                title: "Ring",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                rating:"",
                price:"1200",
                },
                {imagename: "https://www.giva.co/cdn/shop/products/BR046_1_2_a91b3ca0-1829-4267-a462-48ac2187e87b.jpg?v=1652443622&width=713",
                title: "Ring",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                rating:"",
                price:"1200",
                },
                {imagename: "https://www.giva.co/cdn/shop/products/BR046_1_2_a91b3ca0-1829-4267-a462-48ac2187e87b.jpg?v=1652443622&width=713",
                title: "Ring",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                rating:"",
                price:"1200",
                },
                {imagename: "https://www.giva.co/cdn/shop/products/BR046_1_2_a91b3ca0-1829-4267-a462-48ac2187e87b.jpg?v=1652443622&width=713",
                title: "Ring",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                rating:"",
                price:"1200",
                },
                {imagename: "https://www.giva.co/cdn/shop/products/BR046_1_2_a91b3ca0-1829-4267-a462-48ac2187e87b.jpg?v=1652443622&width=713",
                title: "Ring",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                rating:"",
                price:"1200",
                },
                {imagename: "https://www.giva.co/cdn/shop/products/BR046_1_2_a91b3ca0-1829-4267-a462-48ac2187e87b.jpg?v=1652443622&width=713",
                title: "Ring",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                rating:"",
                price:"1200",
                },
                {imagename: "https://www.giva.co/cdn/shop/products/BR046_1_2_a91b3ca0-1829-4267-a462-48ac2187e87b.jpg?v=1652443622&width=713",
                title: "Ring",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                rating:"",
                price:"1200",
                },
            ];
const Products = () => {
  return (
    <div className="product-main">      
        <h1>Products</h1>
        <div className="products" id="Products">
        {product.map((product, index) => (
        <div className="box" key={index}>
            <div className="card">
              <div className="image">
                <img src={product.imagename} alt="image" />
              </div>
            <div className="products_text">
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <h3>Rs.{product.price}</h3>
                <div className="products_star">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                </div>
                <a href="#" className="btn">
                Add to Cart
                </a>
            </div>
            </div>
            </div> 
        ))}
    </div>
    </div>
  )
};
export default Products;
