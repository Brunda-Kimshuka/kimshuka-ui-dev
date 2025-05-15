import React from 'react'
import Arrow from '../../assets/ArrowUpRight.svg';
const CTABanner = () => {
  return (
    <div className='h-[400px] w-[95%] bg-[#E9E9E9] space-y-4 rounded-2xl flex flex-col items-center justify-center border-gray-300 border-1'>
            <h1 className='font-bold text-3xl'>Let's Talk About Your Next Move</h1>
            <h4>Big plans? Let's bring them to life together</h4>
            <button className='text-[#FFFFFF] bg-[#1B1B1D] hover:bg-[#F27F0C] flex w-[181px] h-[48px] rounded-[32px] items-center justify-center gap-2'>Get In Touch
                <div className='bg-[#F27F0C] p-1 rounded-full w-8 h-8 justify-center items-center'>
                    <img src={Arrow}/>
                </div>
            </button>
    </div>
  )
}

export default CTABanner
