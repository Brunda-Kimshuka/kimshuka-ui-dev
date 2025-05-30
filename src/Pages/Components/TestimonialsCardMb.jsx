import React from 'react';
import orngImg from '../../assets/TestimonalsImg.svg';

const TestimonialsCardMb = ({ text, OrgImg, orgName }) => {
  return (
    <div className=' bg-[#FCFAFA] flex flex-col gap-8 p-4 w-full rounded-2xl border-[#D0D5DD] border-[1px]'>
          <div className='flex flex-col justify-between gap-4'>
            <div className='w-10 h-10 flex '><img src={orngImg}/></div>
            <div className=' max-sm:text-[16px] font-normal max-sm:h-[120px]'> <p>{text}</p></div>
        </div>    
            <div className='flex gap-4 justify-start items-center '>
                <div className='max-sm:h-12 max-sm:w-12 rounded-full border-[1px] border-[#D0D5DD] bg-[#FFFAED]'><img src={OrgImg} className='w-full h-full object-cover rounded-full' /></div>
                <p className='max-sm:text-[16px]'>{orgName}</p>
            </div>
        </div>
  )
}

export default TestimonialsCardMb
