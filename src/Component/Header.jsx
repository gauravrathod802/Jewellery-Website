import Logo from '../assets/logo2.png';
import './Header.css';
import { IoIosSearch } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa6";
import { IoStorefrontOutline } from "react-icons/io5";

const Header = () => {
    return (
        <>
            <header>
                <div className="logo">
                    <a href="#"><img className="logo_img" src={Logo} alt="" /></a>
                </div>

                <div className="search">
                    <span className='search_icon'>                    <IoIosSearch /></span>
                    <input className="search_input" placeholder="Search">
                    </input>
                </div>

                <div className="icons">
                    <div className="store-icon">
                        <IoStorefrontOutline />
                        <span>Store</span>
                    </div>
                    <div className="user-icon">
                        <FaRegUser />
                        <span>Account</span>

                    </div>
                    <div className="wishlist-icon">
                        <FaRegHeart />
                        <span>Wishlist</span>

                    </div>
                    <div className="cart-icon">
                        <MdOutlineShoppingCart />
                        <span>Cart</span>

                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;