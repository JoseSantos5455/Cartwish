// import React from 'react'
import './App.css'
// import { Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar/navbar'
// import MainCarousel from './components/HomeCarousel/MainCarousel'
// import ProductCarosel from './components/HomeSectionCard/ProductCarosel'
import Footer from './components/Footer/Footer'

// import OrderDetails from './components/Order/OrderDetails';
import HomePage from './components/HomePage/HomePage';
// import ComponentsRoutes from './Routes/ComponentsRoutes';
import Product from './components/Product/Product';
// import ProductDetails from './components/ProductDetails/ProductDetails'
import Cart from './components/cart/cart';
// import CheckOut from './components/Checkout/CheckOut'
// import Order from './components/Order/Order'


import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (<HomePage/>)
  },
 
  {
    path: "/cart",
    element: (<Cart/>),
  },
  {
    path: "/:levelOne/:levelTwo/:levelThree",
    element: (<Product/>),
  },
 
]);


function App() {
  

  return (
    <>
     <Navbar/>
 <RouterProvider router={router} />
    {/* <Routes><Route path="/*" element={<ComponentsRoutes />}/></Routes> */}
     {/* <Navbar/> */}
     {/* <HomePage/> */}
     {/* <MainCarousel/>
     <ProductCarosel/> */}
     {/* <Product/> */}
     {/* <ProductDetails/> */}
     {/* <Cart/> */}
     {/* <CheckOut/> */}
     {/* <Order/> */}
     {/* <OrderDetails/> */}
     
     <Footer/>
    
    </>
  )
}

export default App
