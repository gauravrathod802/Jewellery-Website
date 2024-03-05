import './App.css'
import Header from './Component/Header/Header';
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

function App() {

  return (
    <>
      <Header/>
      {/* <SimpleSlider/> */}
      {/* <RingCategories/> */}
      {/* <CustomerStory/> */}
      <Routes>
        <Route path="/Jewellery-Website/" element={
          <>
            <SimpleSlider />
            <RingCategories />
            <CustomerStory />
            <EssentialProduct/>
          </>
          } />

        <Route path="/Jewellery-Website/login" element={<Login/>}/>
        <Route path="/Jewellery-Website/sign-up" element={<SignUp/>}/>
        <Route path='/Jewellery-Website/cart' element={<Cart/>}/>
        <Route path='/Jewellery-Website/wishlist' element={<Wishlist/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App