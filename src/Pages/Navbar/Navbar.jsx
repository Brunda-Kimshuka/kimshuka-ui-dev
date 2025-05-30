import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../assets/Kimshuka-Logo.svg';
import Arrow from '../../assets/ArrowUpRight.svg';
import ArrowDwn from '../../assets/CaretDown.svg';
import DropDown from '../Services/DropDown';
import Arrowrignt from '../../assets/ArrowRight.svg';
import IndiaImg from '../../assets/IndiaImg.svg';
import USImg from '../../assets/UsImg.svg';


const Navbar = ({ onSelectService }) => {
  const location = useLocation();
  const [isVisible, setIsVisible]=useState(false)
  const dropdownRef = useRef(null);
  
  const [isDesi, setIsDesi] = useState(true);

  const handleToggle = () => {
    setIsDesi(prev => !prev);
  };
  
  const handleHoverEnter = () => {
    setIsVisible(true);
  }
  const handleOnClick = () => {
    setIsVisible(!isVisible)
  }
  const closeDropdown = () => {
    setIsVisible(false)
  }

  useEffect(()=>{
    const handleClickOutside = (event) => {
      if(isVisible && dropdownRef.current && !dropdownRef.current.contains(event.target)){
        closeDropdown();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  },[isVisible])

  const getTabName = (path) => {
    const last = path.split('/').pop();
    return last || 'home';
  };

  const activeTab = getTabName(location.pathname);


  return (
    <nav className="flex w-full justify-between py-2 px-[5%] bg-[#FCFAFA] border-b-[1px] border-[#D0D5DD]">
     <Link
          to="/home" className="w-[150px] h-[60px] items-center">
        <img src={Logo} />
      </Link> 

      <div className="flex gap-8 items-center" ref={dropdownRef}>
        <Link
          to="/home"
          className={`${
            activeTab === "home" ? "text-[#F27F0C]" : " text-[#667085]"
          } relative   hover:text-[#1B1B1D] transition-colors duration-300 
             after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-[#F27F0C] hover:after:w-full after:transition-[width] after:duration-500 after:ease-in-out cursor-pointer`}
        >
          Home
        </Link>

        <Link
          className={`flex gap-2 items-center ${
            activeTab === "services" ? "text-[#F27F0C]" : "text-[#667085]"
          } relative hover:text-[#1B1B1D] transition-colors duration-300 
             after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-[#F27F0C] hover:after:w-full after:transition-[width] after:duration-500 after:ease-in-out cursor-pointer`}
          to="/services"
          onClick={handleOnClick}
          onMouseEnter={handleHoverEnter} 
        >
          
          <h2>Services</h2>

          <div className="w-4 h-4">
            <img
              src={ArrowDwn}
              aria-haspopup="true"
              aria-expanded={isVisible}
            />
          </div>
        </Link>
        {isVisible && <DropDown onSelectService={onSelectService} onClose={closeDropdown} />}

        <Link
          to="/about"
          className={`${
            activeTab === "about" ? "text-[#F27F0C]" : "text-[#667085]"
          } relative   hover:text-[#1B1B1D] transition-colors duration-300 
             after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-[#F27F0C] hover:after:w-full after:transition-[width] after:duration-500 after:ease-in-out cursor-pointer`}
        >
          About Us
        </Link>

        <Link to="/blogs"
          className={`${activeTab === 'blogs' ? 'text-[#F27F0C]' : 'text-[#667085]'} relative   hover:text-[#1B1B1D] transition-colors duration-300 
             after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-[#F27F0C] hover:after:w-full after:transition-[width] after:duration-500 after:ease-in-out cursor-pointer`}>Blogs</Link>

        {/* <Link to="/contact"
          className={`${activeTab === 'contact' ? 'text-[#F27F0C]' : 'text-[#667085]'} relative   hover:text-[#1B1B1D] transition-colors duration-300 
             after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-[#F27F0C] hover:after:w-full after:transition-[width] after:duration-500 after:ease-in-out cursor-pointer`}>Contacts
      </Link> */}

        
      </div>

      <div className=' gap-4 flex items-center cursor-pointer' onClick={handleToggle}>
        <div className=' w-10 h-10 border rounded-full'><img src={isDesi 
          ? IndiaImg 
          : USImg } 
        alt={isDesi ? "IndiAa" : "US"}
        className="w-full h-full object-cover"/></div>
        <Link to="/contact" className='flex py-2 px-4 gap-2 text-[#FFFFFF] bg-[#1B1B1D] justify-center items-center  rounded-full group hover:bg-[#F27F0C]'>
            <h4>Contact Us</h4>
            <div className='bg-[#F27F0C] p-1 rounded-full w-6 h-6 justify-center items-center'>
                <img src={Arrow} className='group-hover:hidden'/>
                <img src={Arrowrignt} className=' hidden group-hover:block'/>               
            </div>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar
