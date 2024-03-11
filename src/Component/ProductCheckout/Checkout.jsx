import React from 'react'
import "./Checkout.css";

const Checkout = () => {
  return (
    <div className='checkout-main'>
        <div className='checkout-leftpart'>
            <div className="checkout-bottom">
                <p>Delivery Address</p>
                <form action="submit">
                    <div className="checkout-leftpart-namefield">
                        <input type="text" id='firstname' placeholder='First name'/>
                        <input type="text" id='lastname' placeholder='Last name'/>
                    </div>
                    <input type="text" id='address' placeholder='Address'/>
                    <input type="text" id='apartment' placeholder='Apartment, suite, etc (optional)' />
                    <div className='checkout-citydetails'>
                        <input type="text" id='city' placeholder="City" />
                        <select name="state" id="state">
                            <option value="Maharashtra">Maharashtra</option>
                            <option value="Maharashtra">Karnataka</option>
                            <option value="Maharashtra">Tamilnadu</option>
                            <option value="Maharashtra">Rajasthan</option>
                            <option value="Maharashtra">Maharashtra</option>
                            <option value="Maharashtra">Karnataka</option>
                            <option value="Maharashtra">Tamilnadu</option>
                            <option value="Maharashtra">Rajasthan</option>
                        </select>
                        <input type="text" id='pincode' placeholder="Pincode" />
                    </div>
                    <input type="number" id='phone' placeholder='Mobile Number'/>
                </form>
            <hr />
            </div>
            <div className="checkout-payment">
                    <h1>Payment Option</h1>
                <div className='checkout-payment-by-upi'>
                    <div className='checkout-payment-option'>
                        <input type="radio" id="upi" name="UPI" value="HTML"/> 
                        <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/batman-returns/logos/UPI.gif" alt="image" />
                        <p>UPI</p>
                    </div>
                    <div className='checkout-payment-option-text'>
                        <p>Choose an option</p>
                    </div>
                    <div className='checkout-payment-phonepay'>
                        <input type="radio" id="phonePay" name="phone_pay" value="HTML"/>
                        <p>PhonePay</p>
                    </div>
                    <div className='checkout-payment-phonepay'>
                        <input type="radio" id="upiId" name="phone_pay" value="HTML"/>
                        <p>Pay using your UPI ID</p>
                    </div>
                </div>
                <hr />
                <div className='checkout-payment-option-by-wallete'>
                        <input type="radio" id="wallete" name="UPI" value="HTML"/> 
                        <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/batman-returns/logos/UPI.gif" alt="image" />
                        <p>UPI</p>
                </div>
                <hr />
                <div className='checkout-payment-option-by-creditcard'>
                        <div className='checkout-payment-option-by-creditcard-contains'>
                            <input type="radio" id="creditCard" name="UPI" value="HTML"/> 
                            <p>Credit / Debit / ATM Card</p>
                        </div>
                        <div className='checkout-payment-option-by-creditcard-text'>
                            <p>Add and secure cards as per RBI guidlines</p>
                        </div>
                </div>
                <hr/>
                <div className='checkout-payment-option-by-creditcard'>
                        <div className='checkout-payment-option-by-creditcard-contains'>
                            <input type="radio" id="netBanking" name="UPI" value="HTML"/> 
                            <p>Net Banking</p>
                        </div>
                        <div className='checkout-payment-option-by-creditcard-text'>
                            <p>This instrument has low success us UPI or card for better experience</p>
                        </div>
                </div>
                <hr/>
                <div className='checkout-payment-option-by-creditcard'>
                        <div className='checkout-payment-option-by-creditcard-contains'>
                            <input type="radio" id="COD" name="UPI" value="HTML"/> 
                            <p>Cash on Delivary</p>
                        </div>
                </div>
                <hr/>
            </div>
        </div>
        <div className="checkout-rightpart">
            <h1>Product Details</h1>
            <div className="checkout-product-details-container">
                <div className='checkout-productdetailes'>
                    <img src="https://www.giva.co/cdn/shop/products/BR046_1_2_a91b3ca0-1829-4267-a462-48ac2187e87b.jpg?v=1652443622&width=713" alt="product image" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                    <p className='price'>Rs.12300</p>
                </div>
                <div className='checkout-calculated-price'>
                    <p>SubTotal</p>
                    <p className='price'>Rs.12300</p>
                </div>
                <div className='checkout-calculated-price'>
                    <p>Total</p>
                    <p className='price'><span style={{fontSize:10}}>INR</span> Rs.12300</p>
                </div>
                <div className='checkout-calculated-price'>
                    <p>Including Rs.37.80 in taxes</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Checkout;