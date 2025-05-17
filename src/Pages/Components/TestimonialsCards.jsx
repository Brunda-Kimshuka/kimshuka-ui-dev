import React from 'react'
import orngImg from '../../assets/TestimonalsImg.svg'

const TestimonialsCards = ({ text, OrgImg, orgName }) => {
  return (
    <div className=' bg-[#FCFAFA] flex flex-col gap-8 p-4 w-[100%] rounded-2xl border-[#D0D5DD] border-[1px]'>
      <div className='flex flex-col justify-between gap-4'>
        <div className='w-16 h-16 flex '><img src={orngImg}/></div>
        <div className='text-[18px] font-normal h-[180px]'> <p>{text}</p></div>
    </div>    
        <div className='flex gap-4 justify-start items-center '>
            <div className='w-16 h-16 rounded-full border-[1px] border-[#D0D5DD] bg-[#FFFAED]'><img src={OrgImg} className='w-full h-full object-cover rounded-full' /></div>
            <div>{orgName}</div>
        </div>
    </div>
  )
}

export default TestimonialsCards
