import React from 'react'
import Navbar from '../Navbar/Navbar'
import HeroComponent from '../Components/HeroComponent'
import  style from "./udg-index.module.css";
import AboutUsCard from './AboutUsCard';
import KimshukaImg from '../../assets/flwrLogo.svg';

const HomePage = () => {
  return (

   <div className={ ` ${style['SecondaryFont']} w-full h-full flex flex-col`}>
  {/* <div className="fixed top-0 left-0 w-full z-10">
    <Navbar />
  </div> */}

  <div className="pt-[64px] flex-1 overflow-y-auto flex items-center flex-col">
    <HeroComponent />
    
    <div className="flex flex-col gap-4 justify-center items-center py-8 text-center">
      <div className="flex gap-2">
        <img className=" " src={KimshukaImg}/>
        <h2 className="text-[#F27F0C] text-lg">About Us</h2>
      </div>
      <h2 className="text-[48px] font-medium">Lorem ipsum dolor sit amet.</h2>
      <p className="text-[24px] font-normal">
        Lorem ipsum dolor sit amet consectetur. Tempus <br /> varius pulvinar elit rutrum.
      </p>
    </div>

    <div className='flex flex-col gap-8 px-[6%] py-20'>
      <AboutUsCard/>
      <AboutUsCard/>
      <AboutUsCard/>

    </div>
  </div>
</div>

  )
}

export default HomePage
