import React from 'react';
import Card2 from './Card2';
import design3 from "../assets/images/Design3.png"

function Statistics() {
  return (
    <div id='' className='bg-[#21243d] h-[650px] w-screen relative max-sm:h-[930px]'>
      <img src={design3} alt="" className='h-full object-cover w-screen absolute max-sm:z-[-2]' />
      <div className='flex justify-center items-center flex-col gap-[3rem] text-xl relative z-10'>
        <h1 className='text-white text-7xl font-bold mt-10 max-sm:text-5xl max-sm:text-center max-xm:text-3xl'>OUR SUSHI BY THE NUMBERS</h1>
        <p className='text-white text-center'>Serving for Over 15 Years , 30+ Unique Sushi Creations <br/>
          Top Seller: Dragon Roll - Sold Over 5,000 Times
        </p>
        <div className='flex gap-32 max-sm:gap-6 max-xm:flex-col '>
          <Card2 number="100%" label="Fresh Ingredients Sourced Daily" />
          <Card2 number="98%" label="Customer Satisfaction Rate" />
          <Card2 number="5,000+" label="Dragon Rolls Sold" />
        </div>
      </div>
    </div>
  );
}

export default Statistics;
