import React, {useState} from 'react'
import Logo from '../../assets/KimshukaLogoDrk.svg';
import OrngArrow from '../../assets/orngArrow.svg';
import Linkedin from '../../assets/LinkedIngry.svg';
import { Link } from 'react-router-dom';
import style from './style.module.css'


const Footer = () => {
    const currentYear = new Date().getFullYear();
    const [isHovered, setIsHovered] = useState(false);

  return (
    <footer className={`flex flex-col gap-2 pt-[5%] pb-[1%] px-[5%] bg-[#010101]  `}>
      <div className='flex gap-10  text-lg'>
      <div className='flex flex-col gap-4 w-[30%] '>
        <div className='w-[80%]'>
          <img src={Logo}/>
          <p className='text-[#667085] xl:text-lg lg:text-[14px]'>Kimshuka Technologies builds impactful digital products that blend creativity, technology, and strategy for lasting business success.</p>
        </div>
      </div>
      <div className=' lg:gap-4  w-[70%] flex flex-row'>
        <div className=' w-[15%] flex flex-col'>
            <p className='text-[#F27F0C] xl:text-lg lg:text-[14px]  h-auto py-2'>Company</p>
            <div className='flex flex-col 2xl:gap-6 xl:gap-4 text-[#667085]'>
          <Link to='/Home'>    
           <p className={`${style['footer-link']} xl:text-lg lg:text-[14px]`}>
             Home
          </p>
          </Link> 

          <Link to='/about'>   
           <p className={`${style['footer-link']} xl:text-lg lg:text-[14px]`}>About Us</p>
          </Link>    

          <Link to='/contact'>   
           <p className={`${style['footer-link']} xl:text-lg lg:text-[14px]`}>Contact</p>
          </Link> 

          <Link to='/blogs'>   
           <p className={`${style['footer-link']} xl:text-lg lg:text-[14px]`}>Blogs</p>
          </Link>      
            </div>
   
       </div>
        <div className='w-[25%]'>
            <p className='text-[#F27F0C] xl:text-lg lg:text-[14px]  h-auto py-2'>Services</p>
            <div className='flex flex-col 2xl:gap-6 xl:gap-4 text-[#667085]'>
               <Link to='/services'>   
                <p className={`${style['footer-link']} xl:text-lg lg:text-[14px]`}>API Management</p>
              </Link>   
               <Link to='/services'>   
               <p className={`${style['footer-link']} xl:text-lg lg:text-[14px]`}>IoT Platforms</p>
              </Link>   
              <Link to='/services'>   
              <p className={`${style['footer-link']} xl:text-lg lg:text-[14px]`}>UX Services</p>
              </Link>
              <Link to='/services'>   
              <p className={`${style['footer-link']} xl:text-lg lg:text-[14px]`}>Web & App Development</p>
              </Link>
              <Link to='/services'>   
              <p className={`${style['footer-link']} xl:text-lg lg:text-[14px]`}>Product Consulting</p>
              </Link>
              <Link to='/services'>   
              <p className={`${style['footer-link']} xl:text-lg lg:text-[14px]`}>Recruitment Services</p>
              </Link>   
            
            </div>
        </div>
        <div className='w-[20%]'>
            <p className='text-[#F27F0C] xl:text-lg lg:text-[14px]  h-auto py-2'>Support</p>
            <div className='flex flex-col 2xl:gap-6 xl:gap-4 text-[#667085]'>
              <Link to='/'>   
              <p className={`${style['footer-link']} xl:text-lg lg:text-[14px]`}>FAQs</p>
              </Link>
              <Link to='/'>   
              <p className={`${style['footer-link']} xl:text-lg lg:text-[14px]`}>Terms & Conditions</p>
              </Link>
              <Link to='/'>   
              <p className={`${style['footer-link']} xl:text-lg lg:text-[14px]`}>Privacy Policy</p>
              </Link>
              <Link to='/'>   
              <p className={`${style['footer-link']} xl:text-lg lg:text-[14px]`}>Cookie Policy</p>
              </Link>
                  
            </div>
        </div>
        <div className=' w-[20%]'>
            <p className='text-[#F27F0C] xl:text-lg lg:text-[14px]  h-auto py-2'>Reach Us</p>
            <div className='flex flex-col 2xl:gap-6 xl:gap-4 text-[#667085]'>
            <div>  
            <p className={`${style['footer-link']} xl:text-lg lg:text-[14px] cursor-pointer`}>+91 6366967283</p>  
            </div>
            <div>
            <p className={`${style['footer-link']} xl:text-lg lg:text-[14px] cursor-pointer`}>498, 12th Cross, Yelahanka Satellite Town, Yelahanka, Bengaluru, Karnataka 560064</p>     
            </div>    
            </div>
        </div>
        <div className=' w-[20%]'>
            <p className='text-[#F27F0C] xl:text-lg lg:text-[14px]  h-auto py-2'>Connect With Us</p>
            <div className='flex flex-col 2xl:gap-6 xl:gap-4 ' onMouseEnter={() => setIsHovered(true)}
                                                  onMouseLeave={() => setIsHovered(false)}>
      {!isHovered ? (      <div className='flex gap-2 text-[#667085] cursor-pointer '  > 
               <img src={Linkedin}/>      
               <p className='xl:text-lg lg:text-[14px]'>LinkedIn</p>    
              </div> ) :(  
                <div className='flex gap-2 text-[#F27F0C] cursor-pointer'  >  
                    
               <p className='xl:text-lg lg:text-[14px]'>LinkedIn</p> 
               <img src={OrngArrow}/>    
              </div>
              )}   
            </div>
            </div>        
      </div>  
      </div>
      <hr className="h-[2px] border-0 bg-gradient-to-r from-[#1A1A1A80] via-[#494949] to-[#1A1A1A80] my-2 "/>

    <div className=' w-full flex flex-col'>
      <h2 className="2xl:text-[6rem]  xl:text-[4.5rem] lg:text-[4rem] text-center font-normal bg-gradient-to-b from-[#a4a3a3] to-[#50505080] bg-clip-text text-transparent">
  Kimshuka Technologies</h2>
<div className='flex justify-between text-[#717171] text-[18px]'>
  <p>@ {currentYear}</p>
  <p>All Rights Reserved.</p>
</div>
    </div>
    </footer>
  )
}

export default Footer
