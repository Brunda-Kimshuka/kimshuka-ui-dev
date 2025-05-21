import React from 'react'
import orngImg from '../../assets/TestimonalsImg.svg'

const TestimonialsCards = ({ text, OrgImg, orgName }) => {
  return (
    <div className=' bg-[#FCFAFA] flex flex-col gap-8 p-4 w-[100%] rounded-2xl border-[#D0D5DD] border-[1px]'>
      <div className='flex flex-col justify-between gap-4'>
        <div className='w-16 h-16 flex '><img src={orngImg}/></div>
        <div className='xl:text-[18px] lg:text-[16px] font-normal xl:h-[180px] lg:h-[160px]'> <p>{text}</p></div>
    </div>    
        <div className='flex gap-4 justify-start items-center '>
            <div className='xl:w-16 xl:h-16 lg:w-14 lg:h-14 rounded-full border-[1px] border-[#D0D5DD] bg-[#FFFAED]'><img src={OrgImg} className='w-full h-full object-cover rounded-full' /></div>
            <p className='xl:text-[18px] lg:text-[16px]'>{orgName}</p>
        </div>
    </div>
  )
}

export default TestimonialsCards
