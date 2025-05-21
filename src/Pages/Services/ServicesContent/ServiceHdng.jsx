import React from 'react'
import KimshukaImg from '../../../assets/flwrLogo.svg';
const ServiceHdng = ({PriHdng, SecHdng, Para}) => {
    return (
        <div className="flex flex-col gap-4 py-8 px-16">
          <div className="flex gap-2">
            <img className=" " src={KimshukaImg}/>
            <h2 className="text-[#F27F0C] text-lg">{PriHdng}</h2>
          </div>
          <h2 className="text-[48px] font-medium">{SecHdng}</h2>
          <p className="text-[24px] font-normal text-[#667085]">
            {Para}
          </p>
        </div>
    )
}


export default ServiceHdng
