import Logo from '../../assets/newLogo2.png';
import './Header.css';
import { IoIosSearch } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";


const Header = () => {
    return (
        <>
            <header>
                <nav>
                    <div className="nav-left">
                        <i><FaBars /></i>
                        <a href="#"><img className="logo_img" src={Logo} alt="" /></a>
                    </div>

                    <div className="nav-right">
                        <div className="search-bar">
                            <input className="search-input" placeholder="Search">
                            </input>
                            <i><IoIosSearch /></i>
                        </div>

                        <div>
                            <i><FaRegUser className='icon-right'/></i>
                            <p>Account</p>
                        </div>

                        <div>
                            <i><FaRegHeart className='icon-right'/></i>
                            <p>Wishlist</p>
                        </div>

                        <div>
                            <i><MdOutlineShoppingCart className='icon-right'/></i>
                            <p>Cart</p>
                        </div>
                    </div>
                </nav>
            </header>



            {/* below header */}
            <div className="below-header-options">
                <div className="shop-by-category">
                    Shop by Category
                </div>
                <div className="collections">
                    Latest Collections
                </div>
                <div className="new-arrivals">
                    New Arrivals
                </div>
                <div className="offers-promotions">
                    Offers & Promotions
                </div>
                <div className="bestsellers">
                    Bestsellers
                </div>
            </div>
        </>
    )
}

export default Header;