import React from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import Cart from './Pages/Cart/Cart'
import ProductDetails from './Pages/ProductDetails'
import Footer from './Components/Footer'

const App = () => {
  return (
     <>
    <Router>
     <Navbar/>
      
       
        <Routes>
          <Route path = "/" element = {<HomePage/>}/>
          <Route path = "/cart" element = {<Cart/>}/>
          <Route path = "/product/:id" element = {<ProductDetails/>}/>
        </Routes>
      
      <Footer/>
    </Router>
    </>
  )
}


export default App
