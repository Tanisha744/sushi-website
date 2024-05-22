import React from 'react';
import design5 from "../assets/images/Design5.png"

function ContactUs() {

  return (
    <div id='contact' className='bg-[#ffd17e] h-[600px] flex flex-col justify-center items-center relative'>
      <img src={design5} alt="" className='absolute inset-0 object-cover w-full h-full max-sm:hidden' />
      <div className='text-center flex flex-col justify-center items-center text-[#21243d] p-8 mt-[1rem] h-[80vh]  max-sm:p-4'>
        <h1 className='text-6xl font-bold mb-8 max-sm:text-5xl'>GET IN TOUCH</h1>
        <p className='text-2xl mb-8 max-sm:text-xl'>We'd love to hear from you! Whether you have a question, want to make a reservation, or just want to share your feedback, feel free to reach out.</p>
        <div className="flex flex-col w-[500px] md:flex-row  justify-center rounded-md max-sm:flex-row max-xm:w-[400px]">
          <input type="email" placeholder="Enter your email" className="w-[80%] pl-4 rounded-md " />
          <button className="bg-[#21243d] hover:bg-[#464fa0] text-white py-4 px-6 rounded-md h-[4rem] text-lg w-[20%] flex justify-center items-center cursor-pointer"><p>Subscribe</p></button>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
