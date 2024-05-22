import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/1-Navbar'
import HeroSection from './components/2-HeroSection'
import PopularMenu from './components/3-PopularMenu'
import Product from './components/4-Product'
import Statistics from './components/5-Statistics'
import AboutUs from './components/6-AboutUs'
import Testimonials from './components/7-Testimonials'
import Contact from './components/8-Contact'
import Footer from './components/9-Footer'


function App() {

  return (
    <>      
      <Navbar/>
      <HeroSection/>     
      <PopularMenu/> 
      <Product/>  
      <Statistics/>   
      <AboutUs/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
