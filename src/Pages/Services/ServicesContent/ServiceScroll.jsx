import React, { useState } from 'react'

const ServiceScroll = ({ services }) => {
    if(!services || services.length === 0){
        return <p>No data to display.</p>
    }

  return (
    <div className='flex flex-col gap-6 p-4 overflow-y-scroll hide-scrollbar'>
      {services.map(service => (
        <div className='flex flex-col gap-4 border-[1px] rounded-2xl border-[#D0D5DD] p-4 opacity-25 hover:opacity-100 hover:border-[#F27F0C]/25 '>
            <div key={service.id} className='flex w-12 h-12 justify-center items-center border-[1px] rounded-full border-[#D0D5DD]'>{service.id}</div>
            <h1 className={`font-medium text-2xl `}>{service.name}</h1>
            <p className={`font-normal text-lg text-[#667085]`}>{service.description}</p>
        </div>
      ))}
    </div>
  )
}

export default ServiceScroll
