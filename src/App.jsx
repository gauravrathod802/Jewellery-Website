import './App.css'
// import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import SimpleSlider from './Component/Slider/SimpleSlider';
import CustomerStory from './Component/CustomerStories/CustomerStory';
import RingCategories from './Component/Ring categories/RingCategories';
import {Routes, Route} from 'react-router-dom';
import Login from './Component/Authentication/Login';
import SignUp from './Component/Authentication/SignUp';
import EssentialProduct from './Component/Kalyani Essentials/EssentialProduct';
import Cart from './Component/Cart/Cart';
import Wishlist from './Component/Wishlist/Wishlist';
import Products from './Component/Products/Products';
import SinglePageProduct from './Component/SinglePageProduct/SinglePageProduct';
import Navigation from './Component/Header/Navigation';


function App() {

  return (
    <>
    <Navigation/>
      {/* <Header/> */}

      <Routes>
        <Route path="/Jewellery-Website/" element={
          <>
            <SimpleSlider />
            <RingCategories />
            <Products/>
            <EssentialProduct/>
            <CustomerStory />

          </>
          } />

        <Route path="/Jewellery-Website/login" element={<Login/>}/>
        <Route path="/Jewellery-Website/sign-up" element={<SignUp/>}/>
        <Route path='/Jewellery-Website/cart' element={<Cart/>}/>
        <Route path='/Jewellery-Website/wishlist' element={<Wishlist/>}/>
        <Route path='/Jewellery-Website/product/:index' element={<SinglePageProduct/>} />
  
      </Routes>
      <Footer/>
    </>
  )
}

export default App;