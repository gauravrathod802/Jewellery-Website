import { useNavigate } from 'react-router-dom'
import EmptyCart from '../images/Empty-cart.png'
import './Cart.css'
const Cart = () => {
    const navigate = useNavigate();

    const gotoHomePage = () => {
        navigate("/Jewellery-Website/")
    }
    return (
        <div className='cart-container'>
                <h1>Cart</h1>
            <div className="cart">
                <img src={EmptyCart} alt="image not displayed" />
                <h2>Your Cart is Empty</h2>
                <button onClick={gotoHomePage}>Go to Home Page</button>
            </div>
        </div>
    )
}

export default Cart