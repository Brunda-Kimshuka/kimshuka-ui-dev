import React from 'react'

// export interface AboutUsProps
//   extends React.InputHTMLAttributes<HTMLInputElement> {
//     flexStyle? : string;
// }

const AboutUsCard = () => {

  return (
      <div className='flex gap-4 border-[1px] border-[#D0D5DD] rounded-2xl py-10 px-8'>
        <div className='flex flex-col gap-4 w-[65%] justify-center'>
          <h2 className='font-medium text-start text-[32px]'>Lorem ipsum dolor sit amet.</h2>
          <p className='w-[85%] text-[24px] text-start font-normal text-[#667085]'>At Kimshuka Technologies, we turn your vision into reality with tailored software development solutions. As a leading tech partner, we pride ourselves on delivering innovative software that meets end-user needs with a focus on quality, usability and cutting edge technology.</p>
        </div>
        <div className='w-[35%] h-[400px] bg-blue-300 p-20'>
          <img src='' className=''/>
        </div>
      </div>
  )
}

export default AboutUsCard
