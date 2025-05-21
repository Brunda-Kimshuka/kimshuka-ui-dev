import React from 'react'
import Arrow from '../../assets/ArrowUpRight.svg';
import Arrowrignt from '../../assets/ArrowRight.svg';
import style from './udg-style.module.css'

const CTABanner = () => {
  return (
    <div className='py-[10%] w-full  bg-[#E9E9E9] space-y-4 rounded-2xl flex flex-col items-center justify-center border-gray-300 border-1 my-8'>
            <h1 className={`${style['PrimaryFont']} xl:text-[48px] lg:text-[44px] text-[#0A0A0A] font-medium `}>Let's Talk About Your Next Big Move</h1>
            <h4 className={`${style['SecondaryFont']} xl:text-[24px] lg:text-[20px] text-[#667085] font-normal`}>Big plans? Let's bring them to life together</h4>
            <button className='relative group text-[#FFFFFF] bg-[#1B1B1D] hover:bg-[#F27F0C] flex w-[181px] h-[48px] rounded-[32px] items-center justify-center gap-2'>Get In Touch
                <div className=' bg-[#F27F0C] p-1 rounded-full w-8 h-8 justify-center items-center'>
                    <img src={Arrow} className='group-hover:hidden'/>
                    <img src={Arrowrignt} className=' hidden group-hover:block'/>
                </div>
            </button>
    </div>
  )
}

export default CTABanner
