import React from 'react'
import KimshukaImg from '../../assets/flwrLogo.svg';


const AboutUsHdng = ({OrngHdng, PrimaryHdng, PyrA, PyrB, Hidden,margin}) => {
  return (
    <div className={`${margin} flex flex-col gap-4 justify-center items-center py-8 text-center px-4`}>
      <div className="flex gap-2">
        <img className=" " src={KimshukaImg}/>
        <h2 className="text-[#F27F0C] xl:text-lg lg:text-base max-sm:text-xs">{OrngHdng}</h2>
      </div>
      <h2 className="xl:text-[48px] lg:text-[44px] max-sm:text-2xl font-medium">{PrimaryHdng}</h2>
      <p className={`xl:text-[24px] lg:text-[20px] max-sm:text-base font-normal text-[#667085] ${Hidden}`}>
        {PyrA}<br className='md:block max-sm:hidden' /> {PyrB}
      </p>
    </div>
  )
}

export default AboutUsHdng
