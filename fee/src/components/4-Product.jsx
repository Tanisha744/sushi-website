import React from 'react';
import design2 from "../assets/images/Design2.png"
import sushi1 from "../assets/images/sushi1.png"

function Product() {
  return (
    <div id='promo' className='bg-[#ffd17e] h-[700px] w-[100vw] relative max-xm:h-[550px] '>
      <img src={design2} alt="" className='h-full object-cover object-center w-full absolute max-sm:z-[-1]' />
      <div className='flex justify-center items-center  gap-24 relative z-10 h-full max-xm:flex max-xm:flex-col max-xm:gap-10'>
        <img src={sushi1} alt="" className='h-[20rem] w-[20rem] max-sm:h-[10rem] max-sm:w-[10rem]' />
        <div className='flex flex-col items-center justify-center gap-6 '>
          <h1 className=' text-[#21243d] text-6xl font-bold p-4 max-sm:text-4xl max-xm:text-center '>EXPLORE OUR DELICACIES</h1>
          <p className='text-center text-xl'>Every dish is prepared with the utmost care,<br /> ensuring a perfect balance of flavors and textures</p>
          <button className='bg-[#21243d] hover:bg-[#464fa0] text-white py-3 px-5 rounded text-lg'>Order Online</button>
        </div>
      </div>
    </div>
  );
}

export default Product;