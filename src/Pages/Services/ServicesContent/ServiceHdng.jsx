import React from 'react'
import KimshukaImg from '../../../assets/flwrLogo.svg';

const ServiceHdng = ({PriHdng, SecHdng, Para}) => {
    return (
        <div className="flex flex-col gap-2 pt-20 pb-2">
          <div className="flex gap-2">
            <img className=" " src={KimshukaImg}/>
            <h2 className="text-[#F27F0C] 2xl:text-lg xl:text-base lg:text-sm">{PriHdng}</h2>
          </div>
          <h2 className="2xl:text-[62px] xl:text-[58px] lg:text-[54px] font-bold" >{SecHdng}</h2>
          <p className="2xl:text-[18px] xl:text-[16px] lg:text-[14px] font-normal text-[#667085]">
            {Para}
          </p>
          
        </div>
    )
}


export default ServiceHdng
