import './App.css'
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import SimpleSlider from './Component/Slider/SimpleSlider';
import CustomerStory from './Component/CustomerStories/CustomerStory';
import RingCategories from './Component/Ring categories/RingCategories';
import {Routes, Route} from 'react-router-dom';
import Login from './Component/Authentication/Login';
import SignUp from './Component/Authentication/SignUp';

function App() {

  return (
    <>
      <Header/>
      {/* <SimpleSlider/> */}
      {/* <RingCategories/> */}
      {/* <CustomerStory/> */}
      <Routes>
        <Route path="/" element={
          <>
            <SimpleSlider />
            <RingCategories />
            <CustomerStory />
          </>
          } />

        <Route path="/login" element={<Login/>}/>
        <Route path="/sign-up" element={<SignUp/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
