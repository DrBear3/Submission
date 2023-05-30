import React from 'react';

const Navbar = () => {
  return (
    <div className='w-full h-[90px] bg-gray-800 text-white'>
      <div className='max-w-[1240px] mx-auto px-4 flex justify-between items-center'>
        <h1 className='text-3xl md:text-4xl font-bold text-center' style={{ color: 'blue' }}>Fly<span style={{ color: 'red' }}>Solar</span></h1>
        <div className='flex'>
          <a href='#' className='px-4 py-2 text-lg'>Home</a>
          <a href='#' className='px-4 py-2 text-lg'>About</a>
          <a href='#' className='px-4 py-2 text-lg'>Contact Us</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
