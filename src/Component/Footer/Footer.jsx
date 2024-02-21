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
        <footer class="footer_widgets footer_black">
            <div class="container">
                <div class="footer_top">
                    <div class="row">
                        <div class="col-lg-4 col-md-6 col-sm-8">
                            <div class="widgets_container contact_us">
                                <h3>About Kalyani</h3>
                                <div class="footer_contact">
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
                        <div class="col-lg-2 col-md-6 col-sm-4 col-6">
                            <div class="widgets_container widget_menu">
                                <h3>Information</h3>
                                <div class="footer_menu">
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
                        <div class="col-lg-2 col-md-6 col-sm-5 col-6">
                            <div class="widgets_container widget_menu">
                                <h3>My Account</h3>
                                <div class="footer_menu">
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
                        <div class="col-lg-4 col-md-6 col-sm-7">
                            <div class="widgets_container product_widget">
                                <h3>Top Rated Products</h3>
                                <div class="simple_product">
                                    <div class="simple_product_items">
                                        <div class="simple_product_thumb">
                                            <a href="#"><img src="images/product/14.jpg" alt="" /></a>
                                        </div>
                                        <div class="simple_product_content">
                                            <div class="tag_cate">
                                                <a href="#">Women,</a>
                                                <a href="#">Earrings</a>
                                            </div>
                                            <div class="product_name">
                                                <h3><a href="#">Bracelet</a></h3>
                                            </div>
                                            <div class="product_price">
                                                <span class="old_price">Rs. 45612.54</span>
                                                <span class="current_price">Rs. 41612.54</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="simple_product_items">
                                        <div class="simple_product_thumb">
                                            <a href="#"><img src="images/product/28.jpg" alt="" /></a>
                                        </div>
                                        <div class="simple_product_content">
                                            <div class="tag_cate">
                                                <a href="#">Women,</a>
                                                <a href="#">Earrings</a>
                                            </div>
                                            <div class="product_name">
                                                <h3><a href="#">Ring</a></h3>
                                            </div>
                                            <div class="product_price">
                                                <span class="old_price">Rs. 75612.54</span>
                                                <span class="current_price">Rs. 71612.54</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer_bottom">
                    <div class="row">
                        <div class="col-12">
                            <div class="copyright_area">
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