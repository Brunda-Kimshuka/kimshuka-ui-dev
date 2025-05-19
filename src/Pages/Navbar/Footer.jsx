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
          <p className='text-[#667085]'>Kimshuka Technologies builds impactful digital products that blend creativity, technology, and strategy for lasting business success.</p>
        </div>
      </div>
      <div className=' gap-4 w-[70%] flex flex-row'>
        <div className=' w-[15%] flex flex-col'>
            <p className='text-[#F27F0C] h-10'>Company</p>
            <div className='flex flex-col gap-6 text-[#667085]'>
          <Link to='/Home'>    
           <p className={`${style['footer-link']}`}>
             Home
          </p>
          </Link> 

          <Link to='/about'>   
           <p className={`${style['footer-link']}`}>About Us</p>
          </Link>    

          <Link to='/contact'>   
           <p className={`${style['footer-link']}`}>Contact</p>
          </Link> 

          <Link to='/blogs'>   
           <p className={`${style['footer-link']}`}>Blogs</p>
          </Link>      
            </div>
   
       </div>
        <div className='w-[25%]'>
            <p className='text-[#F27F0C] h-10'>Services</p>
            <div className='flex flex-col gap-6 text-[#667085]'>
               <Link to='/services'>   
                <p className={`${style['footer-link']}`}>API Management</p>
              </Link>   
               <Link to='/services'>   
               <p className={`${style['footer-link']}`}>IoT Platforms</p>
              </Link>   
              <Link to='/services'>   
              <p className={`${style['footer-link']}`}>UX Services</p>
              </Link>
              <Link to='/services'>   
              <p className={`${style['footer-link']}`}>Web & App Development</p>
              </Link>
              <Link to='/services'>   
              <p className={`${style['footer-link']}`}>Product Consulting</p>
              </Link>
              <Link to='/services'>   
              <p className={`${style['footer-link']}`}>Recruitment Services</p>
              </Link>   
            
            </div>
        </div>
        <div className='w-[20%]'>
            <p className='text-[#F27F0C] h-10'>Support</p>
            <div className='flex flex-col gap-6 text-[#667085]'>
              <Link to='/'>   
              <p className={`${style['footer-link']}`}>FAQs</p>
              </Link>
              <Link to='/'>   
              <p className={`${style['footer-link']}`}>Terms & Conditions</p>
              </Link>
              <Link to='/'>   
              <p className={`${style['footer-link']}`}>Privacy Policy</p>
              </Link>
              <Link to='/'>   
              <p className={`${style['footer-link']}`}>Cookie Policy</p>
              </Link>
                  
            </div>
        </div>
        <div className=' w-[20%]'>
            <p className='text-[#F27F0C] h-10'>Reach Us</p>
            <div className='flex flex-col gap-6 text-[#667085]'>
            <div>  
            <p className={`${style['footer-link']} cursor-pointer`}>+91 6366967283</p>  
            </div>
            <div>
            <p className={`${style['footer-link']} cursor-pointer`}>498, 12th Cross, Yelahanka Satellite Town, Yelahanka, Bengaluru, Karnataka 560064</p>     
            </div>    
            </div>
        </div>
        <div className=' w-[20%]'>
            <p className='text-[#F27F0C] h-10'>Connect With Us</p>
            <div className='flex flex-col gap-6 ' onMouseEnter={() => setIsHovered(true)}
                                                  onMouseLeave={() => setIsHovered(false)}>
      {!isHovered ? (      <div className='flex gap-2 text-[#667085] cursor-pointer '  > 
               <img src={Linkedin}/>      
               <p>LinkedIn</p>    
              </div> ) :(  
                <div className='flex gap-2 text-[#F27F0C] cursor-pointer'  >  
                    
               <p>LinkedIn</p> 
               <img src={OrngArrow}/>    
              </div>
              )}   
            </div>
            </div>        
      </div>  
      </div>
      <hr class="h-[2px] border-0 bg-gradient-to-r from-[#1A1A1A80] via-[#494949] to-[#1A1A1A80] my-2 "/>

    <div className=' w-full flex flex-col'>
      <h2 className="text-[6rem] text-center font-normal bg-gradient-to-b from-[#a4a3a3] to-[#50505080] bg-clip-text text-transparent">
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
