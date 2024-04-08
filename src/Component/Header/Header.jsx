// import Logo from '../../assets/logo3.png';
// import './Header.css';
// import { IoIosSearch } from "react-icons/io";
// import { MdOutlineShoppingCart } from "react-icons/md";
// import { FaRegHeart } from "react-icons/fa6";
// import { FaRegUser } from "react-icons/fa6";
// import { FaBars } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";


// const Header = () => {
//     const navigate = useNavigate();

//     const handleAccountClick = () => {
//         navigate("/Jewellery-Website/login");
//     }

//     const handleWishlistClick = () => {
//         navigate("/Jewellery-Website/wishlist");
//     };

//     const handleCartClick = () => {
//         navigate("/Jewellery-Website/cart");
//     };

//     const handleHomeClick = () => {
//         navigate("/Jewellery-Website/");
//     }

//     return (
//         <>
//             <header>
//                 <nav>
//                     <div className="nav-left">
//                         <i><FaBars /></i>
//                         <a href="" onClick={handleHomeClick}><img className="logo_img" src={Logo} alt="" /></a>
//                     </div>

//                     <div className="nav-right">
//                         <div className="search-bar">
//                             <input className="search-input" placeholder="Search">
//                             </input>
//                             <i><IoIosSearch /></i>
//                         </div>

//                         <div onClick={handleAccountClick}>
//                             <i><FaRegUser className='icon-right' /></i>
//                             <p>Account</p>
//                         </div>

//                         <div onClick={handleWishlistClick}>
//                             <i><FaRegHeart className='icon-right' /></i>
//                             <p>Wishlist</p>
//                         </div>

//                         <div onClick={handleCartClick}>
//                             <i><MdOutlineShoppingCart className='icon-right' /></i>
//                             <p>Cart</p>
//                         </div>
//                     </div>
//                 </nav>
//             </header>



//             {/* below header */}
//             <div className="below-header-options">
//                 <div className="shop-by-category">
//                     Shop by Category
//                 </div>
//                 <div className="collections">
//                     Latest Collections
//                 </div>
//                 <div className="new-arrivals">
//                     New Arrivals
//                 </div>
//                 <div className="offers-promotions">
//                     Offers & Promotions
//                 </div>
//                 <div className="bestsellers">
//                     Bestsellers
//                 </div>
//             </div>
//         </>
//     )
// }


// export default Header;





import Logo from "../../assets/Dhriti_Logo.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

import "./Header.css";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Menu from "./Menu";



const Header = ({ toggleDrawer, routes }) => {
    console.log(routes);

    const navigate = useNavigate();

    const handleAccountClick = () => {
        navigate("/Jewellery-Website/login"); // Navigate to the account route
    };

    const handleWishlistClick = () => {
        navigate("/Jewellery-Website/wishlist"); // Navigate to the wishlist route
    };

    const handleCartClick = () => {
        navigate("/Jewellery-Website/cart"); // Navigate to the cart route
    };

    const handleHomeClick = () => {
        navigate("/Jewellery-Website/");
    };

    return (
        <>
            <header>
                <nav>
                    <div className="nav-left">
                        <i>
                            <FaBars onClick={toggleDrawer} />
                        </i>
                        <a href="#" onClick={handleHomeClick}>
                            <img className="logo_img" src={Logo} alt="" />
                        </a>
                    </div>

                    <div className="nav-right">
                        <div className="search-bar">
                            <input className="search-input" placeholder="Search"></input>
                            <i>
                                <IoIosSearch />
                            </i>
                        </div>

                        <div onClick={handleAccountClick}>
                            <i>
                                <FaRegUser className="icon-right" />
                            </i>
                            <p>Account</p>
                        </div>

                        <div onClick={handleWishlistClick}>
                            <i>
                                <FaRegHeart className="icon-right" />
                            </i>
                            <p>Wishlist</p>
                        </div>

                        <div onClick={handleCartClick}>
                            <i>
                                <MdOutlineShoppingCart className="icon-right" />
                            </i>
                            <p>Cart</p>
                        </div>
                    </div>
                </nav>
            </header>

            <SNavbar>
                <RightNav>
                    <CenteredNavRoutes>
                        <NavRoutes>
                            {routes.slice(1, 6).map((route) => {
                                if (route.subRoutes) {
                                    return <Menu route={route} key={route.name} />;
                                }
                                return (
                                    <NavRoute to={route.link} key={route.name}>
                                        {route.name}
                                    </NavRoute>
                                );
                            })}
                        </NavRoutes>
                    </CenteredNavRoutes>
                </RightNav>
            </SNavbar>

        </>
    );
};

export default Header;

const SNavbar = styled.nav`
  cursor: pointer;
  display: flex;
  justify-content: center;
  `;
  
  const CenteredNavRoutes = styled.div`
  display: flex;
  justify-content: center;
  `;
  
  const NavRoutes = styled.div`
  @media (max-width: 768px) {
      display: none;
    }
    display: flex;
    gap: 1rem;
    font-size: 1.6rem;
    align-items: center;
    justify-content: center;
    `;
    
    const NavRoute = styled(Link)`
    font-size: 1rem;
  text-decoration: none;
  color: black;
  padding: 0.5rem;
  transition: 0.5s ease;
`;

const RightNav = styled.div`
  display: flex;
  gap: 2rem;
`;



