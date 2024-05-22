import React from 'react';

function Card(props) {
  return (
    <div className=' h-[12rem] w-[12rem] rounded-full flex flex-col items-center justify-center'>
      <img src={props.img} alt="sushi" className='h-[12rem] w-[12rem] object-cover rounded-full'/>
      <p className='text-white mt-2'>{props.text}</p>
    </div>
  );
}

export default Card;
