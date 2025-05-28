import React from 'react'
import KimshukaImg from '../../../assets/flwrLogo.svg';

const ServiceHdng = ({PriHdng, SecHdng, Para}) => {
    return (
        <div className="flex flex-col gap-2 pt-20 pb-2">
          <div className="flex gap-2">
            <img className=" " src={KimshukaImg}/>
            <h2 className="text-[#F27F0C] text-sm">{PriHdng}</h2>
          </div>
          <h2 className="text-[40px] font-bold" >{SecHdng}</h2>
          <p className="text-[14px] font-normal text-[#667085]">
            {Para}
          </p>
          
        </div>
    )
}


export default ServiceHdng
