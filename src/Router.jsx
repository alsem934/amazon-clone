import React from 'react'
import {BrowserRouter as Router ,Routes,Route } from 'react-router-dom'
import Payment from './Pages/Payment/Payment'
import Auth from './Pages/Auth/Auth'
import Orders from './Pages/Orders/Orders'
import Cart from './Pages/Cart/Cart'
import ProductDetail from './Pages/ProductDetail/ProductDetail'
import Results from './Pages/Results/Results'
import Landing from './Pages/Landing/Landing'
import NotFound from './Pages/404/NotFound'
function Routing() {
  return (
    <Router>

      <Routes>
       <Route path='/'element={<Landing/>}/>
        <Route path='/auth' element={<Auth/>}/>
        <Route path='/Payment' element={<Payment/>}/>
        <Route path='/orders' element={<Orders/>}/>
         <Route path='/category/:categoryName' element={<Results/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/products/:productId' element={<ProductDetail/>}/>
      <Route path='*' element={<NotFound/>}/>
      <Route path='auth' element={<Auth/>}/>

      </Routes>
    </Router>
  )
}

export default Routing
