import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home' 
import Navbar from './components/Navbar/Navbar'
import Menu from './pages/Menu/Menu'
import Cart from './pages/Cart/Cart'
import ContactPage from './pages/ContactPage/ContactPage'
import AboutPage from './pages/AboutPage/AboutPage'
import Login from './components/Login/Login'
import SignUp from './components/SignUp/SignUp'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'


const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/contact' element={<ContactPage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/menu' element={<Menu />} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/login' element={<Home/>} />
      <Route path='/signup' element={<SignUp/>} />
      
      </Routes>
    </>
    
  )
}

export default App
