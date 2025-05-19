import React from 'react'
import style from './udg-index.module.css'
import FrameT from '../../assets/Frametop.svg'
import { useState } from "react";


const AboutUsCard = ({ headingA,headingB, text }) => {

  

 const [isHovered, setIsHovered] = useState(false);

  return (

     <div className={`relative bg-[#f5f2f262] border-[1px] border-[#D0D5DD] rounded-2xl col-span-6 p-14 text-center overflow-hidden transition-all duration-300 hover:bg-[#FCFAFA]`}  onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
{isHovered ? (
    < >   
      <div className='absolute top-0 right-0 '>
        <div className='w-18 h-18 rounded-bl-full'><img src={FrameT} className='w-full h-full'/>  </div>
      </div>

        <h2 className={`${style['PrimaryFont']} text-[28px] text-[#0A0A0A] font-medium`}>{ headingA}<br/>{headingB}</h2>
        <p className={`${style['SecondaryFont']} text-[24px] text-[#667085] font-normal`}>{text}</p>
       
       <div className='absolute bottom-0 left-0 rotate-180 '>
        <div className='w-18 h-18 rounded-tr-full'><img src={FrameT} className='w-full h-full'/>  </div>
      </div>
    </> ) : (
    <>
     <h2 className={`${style['PrimaryFont']} text-[28px] text-[#716e6e] font-medium`}>{ headingA}<br/>{headingB} </h2>
        <p className={`${style['SecondaryFont']} text-[24px] text-[#9e9e9f] font-normal`}>{text}</p>
    </>
    )}
    </div>
  )
}

export default AboutUsCard
