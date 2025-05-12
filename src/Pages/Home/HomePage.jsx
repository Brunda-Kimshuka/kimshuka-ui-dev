import React from 'react'
import Navbar from '../Navbar/Navbar'
import HeroComponent from '../Components/HeroComponent'
// import BgImg from "../../assets/Hero Element.svg";

// import {  style} from "./udg-index.css";
const HomePage = () => {
  return (

   <div className="w-full h-full flex flex-col">
  <div className="fixed top-0 left-0 w-full z-10">
    <Navbar />
  </div>

  <div className="pt-[64px] flex-1 overflow-y-auto flex items-center flex-col">
    <HeroComponent />
    
    <div className="flex flex-col gap-4 justify-center items-center py-8 text-center">
      <div className="flex gap-4">
        <img className="w-6 h-6" />
        <h2 className="text-[#F27F0C] text-lg">About Us</h2>
      </div>
      <h2 className="text-[48px] font-medium">Lorem ipsum dolor sit amet.</h2>
      <p className="text-[24px] font-normal">
        Lorem ipsum dolor sit amet consectetur. Tempus <br /> varius pulvinar elit rutrum.
      </p>
    </div>

    <div className='flex flex-col gap-4 '>
      <div className='flex gap-4 '>
        <div className='flex flex-col gap-4 w-[65%]'>
          <h2 className='font-medium text-start text-[32px]'>Lorem ipsum dolor sit amet.</h2>
          <p className='text-2xl text-start font-normal text-[#667085]'>At Kimshuka Technologies, we turn your vision into reality with tailored software development solutions. As a leading tech partner, we pride ourselves on delivering innovative software that meets end-user needs with a focus on quality, usability and cutting edge technology.</p>
        </div>
        <div className='w-[35%] bg-blue-300'>
          <img src=''/>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default HomePage
