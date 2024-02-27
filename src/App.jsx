import './App.css'
import Header from './Component/Header';
import Footer from './Component/Footer/Footer';
import SimpleSlider from './Component/Slider/SimpleSlider';
import CustomerStory from './Component/CustomerStories/CustomerStory';
import RingCategories from './Component/Ring categories/RingCategories';
function App() {

  return (
    <>
      <Header/>
      <SimpleSlider/>
      <RingCategories/>
      <CustomerStory/>
      <Footer/>
    </>
  )
}

export default App
