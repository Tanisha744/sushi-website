import React from 'react';
import hero2 from "../assets/images/Hero2.png"
import lady from "../assets/images/lady.png"

function Testimonials() {
  return (
    <div className='h-[700px] w-screen relative bg-[#21243d]'>
      <img src={hero2} alt="" className='h-full w-full object-cover absolute' />
      <div className='flex flex-col items-center justify-center h-full relative z-10 text-white p-4'>
        <img src={lady} alt="" className='h-[15rem] w-[15rem] rounded-full object-cover mb-4 border-4 border-white' />
        <p className='text-center text-2xl mb-2'>
          "The best sushi I’ve ever had! Fresh, flavorful, and beautifully presented.<br/>It's truly authentic sushi experience. The attention to detail is unparalleled"
        </p>
        <p className='text-center text-lg'>
          - Alia Bhatt
        </p>
      </div>
    </div>
  );
}

export default Testimonials;
