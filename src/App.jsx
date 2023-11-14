
import './App.css'
import Navbar from './components/NavBar/navbar'
// import MainCarousel from './components/HomeCarousel/MainCarousel'
// import ProductCarosel from './components/HomeSectionCard/ProductCarosel'
import Footer from './components/Footer/Footer'
import Product from './components/Products/Product'
import ProductDetails from './components/ProductDetails/ProductDetails'
import Cart from './components/cart/cart'
function App() {
  

  return (
    <>
     <Navbar/>
     {/* <MainCarousel/>
     <ProductCarosel/> */}
     {/* <Product/> */}
     {/* <ProductDetails/> */}
     <Cart/>

     <Footer/>
    
    </>
  )
}

export default App
