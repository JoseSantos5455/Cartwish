// import React from 'react'
import './App.css'
import Navbar from './components/NavBar/navbar'
// import MainCarousel from './components/HomeCarousel/MainCarousel'
// import ProductCarosel from './components/HomeSectionCard/ProductCarosel'
import Footer from './components/Footer/Footer'

import OrderDetails from './components/Order/OrderDetails';
// import Product from './components/Products/Product'
// import ProductDetails from './components/ProductDetails/ProductDetails'
// import Cart from './components/cart/cart'
// import CheckOut from './components/Checkout/CheckOut'
// import Order from './components/Order/Order'
function App() {
  

  return (
    <>
     <Navbar/>
     {/* <MainCarousel/>
     <ProductCarosel/> */}
     {/* <Product/> */}
     {/* <ProductDetails/> */}
     {/* <Cart/> */}
     {/* <CheckOut/> */}
     {/* <Order/> */}
     <OrderDetails/>
     
     <Footer/>
    
    </>
  )
}

export default App
