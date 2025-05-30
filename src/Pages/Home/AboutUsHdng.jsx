import React from 'react'
import KimshukaImg from '../../assets/flwrLogo.svg';


const AboutUsHdng = ({OrngHdng, PrimaryHdng, PyrA, PyrB, Hidden,margin}) => {
  return (
    <div className={`${margin} flex flex-col gap-4 justify-center items-center py-8 text-center px-4`}>
      <div className="flex gap-2">
        <img className=" " src={KimshukaImg}/>
        <h2 className="text-[#F27F0C] 2xl:text-lg xl:text-base lg:text-sm max-sm:text-xs">{OrngHdng}</h2>
      </div>
      <h2 className="2xl:text-[48px] xl:text-[44px] lg:text-[40px] max-sm:text-2xl font-medium">{PrimaryHdng}</h2>
      <p className={`2xl:text-[24px] xl:text-[20px] lg:text-[18px] max-sm:text-base font-normal text-[#667085] ${Hidden}`}>
        {PyrA}<br className='md:block max-sm:hidden' /> {PyrB}
      </p>
    </div>
  )
}

export default AboutUsHdng
