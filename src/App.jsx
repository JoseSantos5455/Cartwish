
import './App.css'
import Navbar from './components/NavBar/navbar'
// import MainCarousel from './components/HomeCarousel/MainCarousel'
// import ProductCarosel from './components/HomeSectionCard/ProductCarosel'
import Footer from './components/Footer/Footer'
import Product from './components/Products/Product'
function App() {
  

  return (
    <>
     <Navbar/>
     {/* <MainCarousel/>
     <ProductCarosel/> */}
     <Product/>

     <Footer/>
    
    </>
  )
}

export default App
