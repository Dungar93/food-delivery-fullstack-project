import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home' 
import Navbar from './components/Navbar/Navbar'
import Menu from './pages/Menu/Menu'
import Cart from './pages/Cart/Cart'
import ContactPage from './pages/ContactPage/ContactPage'
import AboutPage from './pages/AboutPage/AboutPage'
import Login from './components/Login/Login'
import SignUp from './components/SignUp/SignUp'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import VerifyPaymentPage from './pages/VerifyPaymentPage/VerifyPaymentPage'
import CheckoutPage from './pages/CheckoutPage/CheckoutPage'
import MyOrderPage from './pages/MyOrderPage/MyOrderPage'


const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/contact' element={<ContactPage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/menu' element={<Menu />} />
      <Route path='/login' element={<Home/>} />
      <Route path='/signup' element={<SignUp/>} />

      {/*payment verification */}
      <Route path='/myorder/verify' element={<VerifyPaymentPage/>} />

      <Route path='/cart' element={
        <PrivateRoute>
             <Cart/>
        </PrivateRoute>
       } />

       <Route path='/checkout' element={
        <PrivateRoute>
             <CheckoutPage/>
        </PrivateRoute>
       } />

       <Route path='/myorder' element={
        <PrivateRoute>
             <MyOrderPage/>
        </PrivateRoute>
       } />
      
      </Routes>
    </>
    
  )
}

export default App
