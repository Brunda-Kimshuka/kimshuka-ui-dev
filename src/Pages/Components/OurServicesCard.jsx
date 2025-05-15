import React from 'react'

const OurServicesCard = () => {
  return (
      <div className='flex flex-col gap-4  border-[1px] rounded-2xl border-[#D0D5DD] w-[550px] p-4'>
        <div className='flex w-12 h-12 justify-center items-center border-[1px] rounded-full border-[#D0D5DD]'>1</div>
        <h1 className={`font-medium text-2xl `}>API Management</h1>
        <p className={`font-normal text-lg`}>Connect systems to enable smooth data flow, better functionality, and smarter user experiences</p>

        <button className='px-4 py-2 flex justify-center items-center bg-[#0A0A0A] hover:bg-[#F27F0C] transition-all duration-300 text-[#ffff] rounded-full w-[30%]'>Read More</button>
      </div>
  )
}

export default OurServicesCard
