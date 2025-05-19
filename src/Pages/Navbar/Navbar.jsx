import React, { useState } from 'react'
// import { useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../assets/Kimshuka-Logo.svg';
import Arrow from '../../assets/ArrowUpRight.svg';
import ArrowDwn from '../../assets/CaretDown.svg';
import DropDown from '../Services/DropDown';

import Arrowrignt from '../../assets/ArrowRight.svg';


const Navbar = () => {
  const location = useLocation();
  const [isVisible, setIsVisible]=useState(false)
  
  
  // const handleHoverEnter = () => {
  //   setIsVisible(true);
  // }
  // const handleHoverLeave = () => {
  //   setIsVisible(false)
  // }
  const handleOnClick= () => {
    setIsVisible(!isVisible)
  }


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
          className={`${activeTab === 'home' ? 'text-[#F27F0C]' : ' text-[#667085]'} relative   hover:text-[#1B1B1D] transition-colors duration-300 
             after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-[#F27F0C] hover:after:w-full after:transition-[width] after:duration-500 after:ease-in-out cursor-pointer`}
        >
          Home
        </Link>

        <Link className={`flex gap-2 items-center ${activeTab === 'services' ? 'text-[#F27F0C]' : 'text-[#667085]'} relative hover:text-[#1B1B1D] transition-colors duration-300 
             after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-[#F27F0C] hover:after:w-full after:transition-[width] after:duration-500 after:ease-in-out cursor-pointer`} to="/services" 
              onClick={handleOnClick}>
              {/* onMouseEnter={handleHoverEnter} onMouseLeave={handleHoverLeave} */}
         <h2>Services</h2>
         
         <div className='w-4 h-4'>
            <img src={ArrowDwn} aria-haspopup="true"
            aria-expanded={isVisible}/>
          </div>
        </Link>
        {isVisible && <DropDown/>}
          

        <Link to="/about"
          className={`${activeTab === 'about' ? 'text-[#F27F0C]' : 'text-[#667085]'} relative   hover:text-[#1B1B1D] transition-colors duration-300 
             after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-[#F27F0C] hover:after:w-full after:transition-[width] after:duration-500 after:ease-in-out cursor-pointer`}>About Us</Link>

        <Link to="/blogs"
          className={`${activeTab === 'blogs' ? 'text-[#F27F0C]' : 'text-[#667085]'} relative   hover:text-[#1B1B1D] transition-colors duration-300 
             after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-[#F27F0C] hover:after:w-full after:transition-[width] after:duration-500 after:ease-in-out cursor-pointer`}>Blogs</Link>

        {/* <Link to="/contact"
          className={`${activeTab === 'contact' ? 'text-[#F27F0C]' : 'text-[#667085]'} relative   hover:text-[#1B1B1D] transition-colors duration-300 
             after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-[#F27F0C] hover:after:w-full after:transition-[width] after:duration-500 after:ease-in-out cursor-pointer`}>Contacts
      </Link> */}

      </div>

      <div className=' gap-4 flex items-center'>
        <div className='bg-blue-300 w-10 h-10 border rounded-full'><img/></div>
        <Link to="/contact" className='flex py-2 px-4 gap-2 text-[#FFFFFF] bg-[#1B1B1D] justify-center items-center  rounded-full group hover:bg-[#F27F0C]'>
            <h4>Get Started</h4>
            <div className='bg-[#F27F0C] p-1 rounded-full w-6 h-6 justify-center items-center'>
                <img src={Arrow} className='group-hover:hidden'/>
                <img src={Arrowrignt} className=' hidden group-hover:block'/>               
            </div>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
