import React from 'react'
import BgImg from '../../assets/Lines.svg';
import KimshukaImg from '../../assets/flwrLogo.svg';
import { useState } from "react";


const HeroComponent = () => {
   const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div className='w-full h-full justify-center items-center text-center py-[10%] '   
    style={{
    backgroundImage: `url(${BgImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  }}>
    
          <div className='flex gap-2 justify-center'>
            <img src={KimshukaImg}/>
            <p className='text-[#F27F0C] text-lg font-normal'>Your Vision. Our Expertise.</p>
          </div>  
            <h2 className='text-[62px] font-bold my-4 '>Bright Minds <br/> Solving Challenges, Side by Side</h2>
            <p className='text-[24px] font-normal'>Lorem ipsum dolor sit amet consectetur <br/>  Tempus varius pulvinar elit rutrum</p>

          <div className='w-full flex justify-center my-6' onMouseEnter={() => setIsHovered(true)}
                                                           onMouseLeave={() => setIsHovered(false)}>
   {!isHovered ? (<button className='flex gap-4 bg-[#1B1B1D] px-4 py-2 text-[#FCFAFA] items-center rounded-full'> 
              <h2 className='text-lg'>Explore Services</h2>
              <div className='w-10 h-10 bg-[#F27F0C] rounded-full'><img/></div>
            </button>) : (<button className='flex gap-4 bg-[#F27F0C] px-4 py-2 text-[#FCFAFA] items-center rounded-full'> 
              <h2 className='text-lg'>Explore Services</h2>
              <div className='w-10 h-10 bg-[#F27F0C]'><img/></div>
            </button>)}
          </div>  
          </div>
  )
}

export default HeroComponent
