import React from 'react'
import BgImg from '../../assets/Lines.svg';
import KimshukaImg from '../../assets/flwrLogo.svg';
import Arrowrignt from '../../assets/ArrowRight.svg';
import Arrow from '../../assets/ArrowUpRight.svg';
import CursorGrn from '../../assets/cursorGrn.svg';
import CursorOrg from '../../assets/cursorOrg.svg';
import CursorLgrn from '../../assets/cursorLG.svg';
import CursorLOrg from '../../assets/cursorLOrg.svg';



// import { useState } from "react";


const HeroComponent = () => {
  //  const [isHovered, setIsHovered] = useState(false);
  
  return (
    
    <div className='w-full h-full justify-center items-center text-center pt-[5%] pb-[12%] relative'   
    style={{
    backgroundImage: `url(${BgImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  }}>
    <div className='absolute top-[15%] left-[12%] '>
    <div className=' py-2 px-4 rounded-full bg-[#0BF480]'><p className='xl:text-2xl lg:text-xl'>Business-First</p></div>
    <img src={CursorGrn} className='right-[-15%] top-[60%] absolute'/>
    </div>

    <div className='absolute top-[10%] right-[12%]'>
    <div className=' py-2 px-4 rounded-full bg-[#FEE4AA] '><p className='xl:text-2xl lg:text-xl'> Collabrative Model</p></div>
        <img src={CursorLOrg} className='left-[-8%] top-[45%] absolute'/>
    </div>

    <div className='absolute bottom-[15%] right-[12%]'>
    <div className=' py-2 px-4 rounded-full bg-[#B2FFD7]'><p className='xl:text-2xl lg:text-xl'>Result-Orirnted</p></div>
        <img src={CursorLgrn} className='left-[-15%] top-[-40%] absolute'/>
    </div>

    <div className='absolute bottom-[10%] left-[12%]'>
    <div className=' py-2 px-4 rounded-full bg-[#F27F0C]'><p className='xl:text-2xl lg:text-xl'>Proven Delivery</p></div>
        <img src={CursorOrg} className='right-[-10%] top-[-50%] absolute'/>
    </div>
          <div className='flex gap-2 justify-center'>
            <img src={KimshukaImg}/>
            <p className='text-[#F27F0C] xl:text-lg lg:text-base max-sm:text-xs font-normal'>Your Vision. Our Expertise.</p>
          </div>  
            <h2 className='xl:text-[62px] lg:text-[58px] max-sm:text-[24px] lg:font-bold max-sm:font-medium my-4 '>Bright Minds <br className='md:block max-sm:hidden'/> Solving Challenges, Side by Side</h2>
            <p className='xl:text-[24px] lg:text-[20px] max-sm:text-base font-normal'>We co-create tech solutions for growing businesses blending cost-efficiency, <br/> precision and innovation.</p>

          <div className='flex w-full justify-center mt-8'>
          <button className='flex gap-4 bg-[#1B1B1D] w-auto px-4 py-2 text-[#FCFAFA] items-center rounded-full group hover:bg-[#F27F0C] cursor-pointer'> 
                        <h2 className='lg:text-lg max-sm:text-base'>Explore Services</h2>
                        <div className='w-8 h-8 bg-[#F27F0C] rounded-full flex justify-center items-center'>
                          <img src={Arrow} className='group-hover:hidden'/>
                          <img src={Arrowrignt} className=' hidden group-hover:block'/> </div>
          </button>
          </div>
          </div>
  )
}

export default HeroComponent
