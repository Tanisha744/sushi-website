import React from 'react';

function Card2(props) {
  return (
    <div className='h-[12rem] w-[12rem] rounded-[50%] flex flex-col items-center justify-center border-[5px] text-white  max-xm:h-[10rem] max-xm:w-[10rem] '>
      <p className='text-2xl font-bold'>{props.number}</p>
      <p className='text-center'>{props.label}</p>
    </div>
  );
}

export default Card2;
