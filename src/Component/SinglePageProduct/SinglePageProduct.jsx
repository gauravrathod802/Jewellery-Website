import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './SinglePageProduct.css';

const SinglePageProduct = () => {
    
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 3,
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        },
      };
    

    const [productData, setproductData] = useState({
        imagename: '',
        title: '',
        description: '',
        rating: '',
        price:''

    });

    const navigate = useNavigate();
    const { state } = useLocation();
    const event = state?.product;

    //   console.log('Selected Event:', event);

    useEffect(() => {
        // Set initial values from the selected event when component mounts
        if (event) {
            setproductData({
                imagename: '',
                title: '',
                description: '',
                rating:'',
                price: event.price || '', // Set payment field with event price
                // price:''
            });
        }
    }, [event]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setproductData({ ...productData, [name]: value });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        //logic to handle form submission, e.g., sending data to a server
        console.log('Form submitted:', productData, 'Event details:', event);
    };


    const handleBackClick = () => {
        // Navigate back to the previous page
        navigate(-1);
    };


  return (
    <div className="singlepageproduct-container">
        <div className='singlepageproduct-left'>
            <div className="singlepageproduct-image">
                {event && (
                    <div>
                        <img src={event.imagename} alt="image" />
                    </div>
                )}
                <div className='singlepageproduct-button'>
                    <button className='add-to-cart-btn'>Add to Cart</button>
                    <button className='buy-now-btn'>Buy Now</button>
                </div>
            </div>
        </div>
        <div className="singlepageproduct-right">
            <div className='singlepageproduct-details'>
                <div className='singlepageproduct-smalldetails'>
                <h1>Product Details</h1>
                <p>Description: {event.description}</p>
                <p>Rs. {event.price}</p>
                {/* <p>Rating {event.rating}</p> */}
                </div>
                <div className='singlepageproduct-smalldetails'>
                <h1>Product Details</h1>
                <p>Description: {event.description}</p>
                <p>Rs. {event.price}</p>
                {/* <p>Rating {event.rating}</p> */}
                </div>
            </div>
        </div>
</div>
  )
}

export default SinglePageProduct