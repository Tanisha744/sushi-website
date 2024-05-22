import React from 'react'
import hero from "../assets/images/hero.jpg"

function HeroSection() {
  return (
    <section>
    <div className='relative w-screen h-[600px]'>
        <img src={hero} alt=""  className='  object-cover absolute w-screen h-[600px]'/>
        <div className =" flex  ml-[5rem] gap-6 ">
        <h1 className='absolute text-white font-bold text-6xl flex items-center justify-center mt-[30vh] leading-2 max-sm:text-4xl'>EXPERIENCE THE ART OF SUSHI</h1>
        <p className='text-white absolute font-semibold text-2xl flex mt-[45vh]  '>Authentic Sushi Creations Made with  <br />the Freshest Ingredients</p>
        <button className='text-white font-semibold absolute bg-[#21243d] hover:bg-[#464fa0] p-[1rem]  rounded-xl mt-[60vh] max-xm: mt-96'>ORDER NOW</button>
        </div>
    </div>
    </section>
  )
}

export default HeroSection