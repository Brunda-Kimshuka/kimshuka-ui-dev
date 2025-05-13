import React from 'react'
// import { useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../assets/Kimshuka-Logo.svg';
import Arrow from '../../assets/ArrowUpRight.svg';
import ArrowDwn from '../../assets/CaretDown.svg';



const Navbar = () => {
  const location = useLocation();

  const getTabName = (path) => {
    const last = path.split('/').pop();
    return last || 'home';
  };

  const activeTab = getTabName(location.pathname);


  return (
    <nav className='flex justify-between py-2 px-[5%] bg-[#FCFAFA] border-b-[1px] border-[#D0D5DD]'>
      <div className='w-[150px] h-[60px] items-center'>
        <img src={Logo}/>
      </div>

      <div className='flex gap-8 items-center'>
        
        <Link
          to="/home"
          className={`${activeTab === 'home' ? 'text-[#F27F0C]' : ' text-[#667085]'}`}
        >
          Home
        </Link>

        <Link className={`flex gap-2 items-center ${activeTab === 'services' ? 'text-[#F27F0C]' : 'text-[#667085]'}`} to="/services">
         <h2>Services</h2>
         <div className='w-4 h-4'><img src={ArrowDwn}/></div>
        </Link>

        <Link to="/about"
          className={`${activeTab === 'about' ? 'text-[#F27F0C]' : 'text-[#667085]'}`}>About Us</Link>

        <Link to="/blogs"
          className={`${activeTab === 'blogs' ? 'text-[#F27F0C]' : 'text-[#667085]'}`}>Blogs</Link>

        <Link to="/contact"
          className={`${activeTab === 'contact' ? 'text-[#F27F0C]' : 'text-[#667085]'}`}>Contacts
      </Link>

      </div>

      <div className=' gap-4 flex items-center'>
        <div className='bg-blue-300 w-16 h-16 border rounded-full'><img/></div>
        <div className='flex py-2 px-4 gap-2 text-[#FFFFFF] bg-[#1B1B1D] justify-center items-center  rounded-full'>
            <h4>Get Started</h4>
            <div className='bg-[#F27F0C] p-1 rounded-full w-8 h-8 justify-center items-center'>
                <img src={Arrow}/>
            </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
