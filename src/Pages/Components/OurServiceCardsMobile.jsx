import React from 'react'


const OurServiceCardsMobile = ({id, title, discription,}) => {
  return (
    <div className='flex flex-col gap-4  border-[1px] rounded-2xl border-[#D0D5DD] w-full p-4' key={id}>
        <div className='flex w-8 h-8 justify-center items-center border-[1px] rounded-full border-[#13151a]'>{id}</div>
        <h1 className={`font-medium text-2xl `}>{title}</h1>
        <p className={`font-normal text-[#667085] text-base`}>{discription}</p>

        <button className='px-3 py-2 flex justify-center items-center bg-[#0A0A0A] hover:bg-[#F27F0C] transition-all duration-300 text-[#ffff] rounded-full w-[50%]'>Read More</button>
      </div>
  )
}

export default OurServiceCardsMobile
