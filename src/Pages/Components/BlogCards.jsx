import React from 'react'
import BlogOne from '../../assets/Blogone.svg';

const BlogCards = () => {
  return (
    <div className='w-[33%] flex flex-col gap-4 border-[1px] border-[#d5d3d3] rounded-2xl overflow-hidden' >
      <div className="relative group overflow-hidden ">
  <img
    src={BlogOne}
    className="w-full h-full object-cover transform duration-500 group-hover:scale-110"
  />

  <div className="absolute inset-0 bg-gradient-to-t from-black to-black opacity-60 group-hover:opacity-0 transition-opacity duration-500"></div>
</div>

      <div className='flex flex-col gap-4 py-4 px-6'>
        <h2 className='font-medium text-2xl'>Connecting the Future, One Device at a Time</h2>
        <p className='text-[#667085] text-base'>Step into the Internet of Things revolution. Learn how IoT platforms are reshaping industries by linking devices, data, and people in smarter, faster ways.</p>
        <p className='text-[#056C39] text-lg'>April 26, 2025</p>
      </div>
    </div>  
  )
}

export default BlogCards
