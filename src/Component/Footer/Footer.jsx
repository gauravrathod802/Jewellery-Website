import React from 'react';
import './Footer.css';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { FaGooglePlusG } from "react-icons/fa";
import Visa from "../images/visa.png";
import MasterCard from "../images/mastercard.png";
import Paypal from "../images/paypal.png";



const Footer = () => {
  return (
    <div>
       {/* <!-- footer section starts --> */}
        <footer className="footer_widgets footer_black">
            <div className="container">
                <div className="footer_top">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-8">
                            <div className="widgets_container contact_us">
                                <h3>About Kalyani</h3>
                                <div className="footer_contact">
                                    <p>Address : Kalyani palace, Surat, Gujarat</p>
                                    <p>Phone : (+91) 888888885555</p>
                                    <p>Email : kalyanijewlers@gmail.com</p>
                                    <ul>
                                        <li><a href="#" style={{fontSize:20}}><FaFacebookF/></a></li>
                                        <li><a href="#" style={{fontSize:20}}><FaTwitter /></a></li>
                                        <li><a href="#" style={{fontSize:23}}><FaWhatsapp /></a></li>
                                        <li><a href="#"style={{fontSize:27}} ><FaGooglePlusG /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-4 col-6">
                            <div className="widgets_container widget_menu">
                                <h3>Information</h3>
                                <div className="footer_menu">
                                    <ul>
                                        <li><a href="#">About Us</a></li>
                                        <li><a href="#">Blog</a></li>
                                        <li><a href="#">Contact</a></li>
                                        <li><a href="#">Services</a></li>
                                        <li><a href="#">Collection</a></li>
                                        <li><a href="#">Portfolio</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-5 col-6">
                            <div className="widgets_container widget_menu">
                                <h3>My Account</h3>
                                <div className="footer_menu">
                                    <ul>
                                        <li><a href="#">My Account</a></li>
                                        <li><a href="#">Contact</a></li>
                                        <li><a href="#">Wishlist</a></li>
                                        <li><a href="#">Portfolio</a></li>
                                        <li><a href="#">Checkout</a></li>
                                        <li><a href="#">Frequently Questions</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-7">
                            <div className="widgets_container product_widget">
                                <h3 className='popular_product'>Popular Products</h3>
                                <div className="simple_product">
                                    <div className="simple_product_items">
                                        
                                        <div className="simple_product_content">
                                            <div className="tag_cate">
                                                <a href="#">Women,</a>
                                                <a href="#"> Earrings</a>
                                            </div>
                                            <div className="product_name">
                                                <h3><a href="#">Bracelet</a></h3>
                                            </div>
                                            <div className="product_price">
                                                <span className="old_price">Rs. 45612.54</span>
                                                <span className="current_price">Rs. 41612.54</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="simple_product_items">
                                        {/* <div className="simple_product_thumb">
                                            <a href="#"><img src="https://www.giva.co/cdn/shop/files/R0688_5.jpg?v=1685630347&width=320" alt="" /></a>
                                        </div> */}
                                        <div className="simple_product_content">
                                            <div className="tag_cate">
                                                <a href="#">Women,</a>
                                                <a href="#"> Earrings</a>
                                            </div>
                                            <div className="product_name">
                                                <h3><a href="#">Ring</a></h3>
                                            </div>
                                            <div className="product_price">
                                                <span className="old_price">Rs. 75612.54</span>
                                                <span className="current_price">Rs. 71612.54</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer_bottom">
                    <div className="row">
                        <div className="col-12">
                            <div className="copyright_area">
                                <p>Copyright &copy; 2024 <a href="#">Kalyani</a> All rights Reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
              <div className="footer_bottom_payment">
                <div className="row">
                  <div className="payment_area">
                    <a href='#'><img src={Visa}></img></a>
                    <a href='#'><img src={MasterCard}></img></a>
                    <a href=''><img src={Paypal}></img></a>
                  </div>
                </div>
              </div>
            </div>
        </footer>
        {/* <!-- footer section ends --> */}

    </div>

  )
}

export default Footer;