import React from 'react'
import Arrow from '../../assets/ArrowUpRight.svg';
import Arrowrignt from '../../assets/ArrowRight.svg';
import style from './udg-style.module.css'

const CTABanner = () => {
  return (
    <div className='py-[10%] w-full  bg-[#E9E9E9] space-y-4 rounded-2xl flex flex-col items-center justify-center border-gray-300 border-1 my-8'>
            <h1 className={`${style['PrimaryFont']} text-center xl:text-[48px] lg:text-[44px] max-sm:text-lg text-[#0A0A0A] md:w-full max-sm:w-[80%] font-medium `}>Let's Talk About Your Next Big Move</h1>
            <h4 className={`${style['SecondaryFont']} text-center xl:text-[24px] lg:text-[20px] max-sm:text-[14px] text-[#667085] font-normal`}>Big plans? Let's bring them to life together</h4>
            <div className='w-full flex justify-center mt-4'>
            <button className='relative group text-[#FFFFFF] bg-[#1B1B1D] hover:bg-[#F27F0C] px-4 py-2 flex  rounded-full items-center justify-center gap-2'>Get In Touch
                <div className=' bg-[#F27F0C] p-1 rounded-full w-8 h-8 justify-center items-center'>
                    <img src={Arrow} className='group-hover:hidden'/>
                    <img src={Arrowrignt} className=' hidden group-hover:block'/>
                </div>
            </button>
            </div>
    </div>
  )
}

export default CTABanner
