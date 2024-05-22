import React from 'react';
import design4 from "../assets/images/Design4.png"

function AboutUs() {
  return (
    <div id='about' className='bg-[#ffd17e] h-[700px] w-screen relative '>
      <img src={design4} alt="" className='h-full w-screen absolute object-cover max-sm:hidden' />
      <div className='flex flex-col md:flex-row justify-center items-center gap-24 relative z-10 h-full p-8 max-sm:gap-4'>
        <div className='flex flex-col items-center justify-center gap-6 max-sm:gap-2'>
          <h1 className='text-[#21243d] text-6xl font-bold text-center p-4 max-sm:text-4xl max-sm:p-2'>SUSHI SECRETS</h1>
          <p className='text-center text-xl'>
          At Sushi Sensation, we are dedicated to providing an unforgettable sushi experience with the freshest ingredients and innovative flavors. Join us to taste the artistry and tradition of sushi in every bite.
            
          </p>
          <button className='bg-[#21243d] hover:bg-[#464fa0] text-white py-3 px-5 rounded text-lg'>Order Now</button>
        </div>
        <img src="./src/assets/images/sushi2.png" alt="" className='h-[20rem] w-[20rem] object-cover max-sm:h-[15rem] max-sm:w-[15rem]' />
      </div>
    </div>
  );
}

export default AboutUs;
