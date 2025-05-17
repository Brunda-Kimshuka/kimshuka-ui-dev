import React from 'react'
import Logo from '../../assets/KimshukaLogoDrk.svg';
import Linkedin from '../../assets/LinkedIngry.svg';

const Footer = () => {
  return (
    <footer className={`flex gap-10 py-[5%] px-[5%] bg-[#010101] text-lg `}>
      <div className='flex flex-col gap-4 w-[30%] '>
        <div className='w-[80%]'>
          <img src={Logo}/>
          <h2 className='text-[#667085]'>Kimshuka Technologies builds impactful digital products that blend creativity, technology, and strategy for lasting business success.</h2>
        </div>
      </div>
      <div className=' gap-4 w-[70%] flex flex-row'>
        <div className=' w-[15%] flex flex-col'>
            <p className='text-[#F27F0C] h-10'>Company</p>
            <div className='flex flex-col gap-6 text-[#667085]'>
            <p>Home</p>    
            <p>About Us</p>    
            <p>Contact</p>       
            <p>Blogs</p>      
            </div>
   
       </div>
        <div className='w-[25%]'>
            <p className='text-[#F27F0C] h-10'>Services</p>
            <div className='flex flex-col gap-6 text-[#667085]'>
            <p>API Management</p>    
            <p>IoT Platforms</p>    
            <p>UX Services</p>       
            <p>Web & App Development</p>   
            <p>Product Consulting</p>   
            <p>Recruitment Services</p>
            </div>
        </div>
        <div className='w-[20%]'>
            <p className='text-[#F27F0C] h-10'>Support</p>
            <div className='flex flex-col gap-6 text-[#667085]'>
            <p>FAQs</p>    
            <p>Terms & Conditions</p>    
            <p>Privacy Policy</p>       
            <p>Cookie Policy</p>      
            </div>
        </div>
        <div className=' w-[20%]'>
            <p className='text-[#F27F0C] h-10'>Reach Us</p>
            <div className='flex flex-col gap-6 text-[#667085]'>
            <p>+91 6366967283</p>    
            <p>498, 12th Cross, Yelahanka Satellite Town, Yelahanka, Bengaluru, Karnataka 560064</p>         
            </div>
        </div>
        <div className=' w-[20%]'>
            <p className='text-[#F27F0C] h-10'>Connect With Us</p>
            <div className='flex flex-col gap-6 text-[#667085]'>
            <div className='flex gap-2'> 
             <img src={Linkedin}/>      
            <p>LinkedIn</p>    
              </div>    
            </div></div>        
      </div>  
    </footer>
  )
}

export default Footer
