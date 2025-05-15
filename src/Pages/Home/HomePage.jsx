import React from 'react'
import Navbar from '../Navbar/Navbar'
import HeroComponent from '../Components/HeroComponent'
import  style from "./udg-index.module.css";
import AboutUsCard from './AboutUsCard';
import AboutUsHdng from './AboutUsHdng';
import OurServicesCard from '../Components/OurServicesCard';
import { useRef, useEffect } from "react";


const HomePage = () => {

    const scrollRef = useRef(null);

    useEffect(() => {
    const el = scrollRef.current;

    const handleWheel = (e) => {
      if (el && e.deltaY !== 0) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
      }
    };

    el?.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      el?.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (

   

  <div className="pt-[64px] flex-1 overflow-y-auto flex items-center flex-col">
    <HeroComponent />
    
    <AboutUsHdng
    OrngHdng='Your success, our mission'
    PrimaryHdng='Why Kimshuka?'
    PyrA='Driven by product thinking, we design, deploy, and deliver premium solutions'
    PyrB='that don’t just satisfy clients-they inspire lasting partnerships.'
    />
    
    <div className='bg-pink grid grid-cols-12 gap-6 w-[70%] pt-10 pb-16'>
      <AboutUsCard
      headingA = '10 Years of '
      headingB = 'Engineering Excellence'
      text='Delivered 30+ projects over 10 years with consistent results'
      />
       <AboutUsCard
      headingA = '10 Years of '
      headingB = 'Engineering Excellence'
      text='Delivered 30+ projects over 10 years with consistent results'
      />
       <AboutUsCard
      headingA = '10 Years of '
      headingB = 'Engineering Excellence'
      text='Delivered 30+ projects over 10 years with consistent results'
      />
       <AboutUsCard
      headingA = '10 Years of '
      headingB = 'Engineering Excellence'
      text='Delivered 30+ projects over 10 years with consistent results'
      />
    </div>

    <AboutUsHdng
    OrngHdng='Our Services'
    PrimaryHdng='How We Help You Succeed'
    PyrA='Our services are designed to meet your exact needs and support '
    PyrB='your long term vision.'
    />

  <div className={`${style["no-Scrollbar"]}  w-full overflow-x-auto py-20 px-8`} ref={scrollRef}>
    <div className={` flex gap-4  w-max`}>
      <OurServicesCard />
      <OurServicesCard />
      <OurServicesCard />
      <OurServicesCard />
      <OurServicesCard />
      <OurServicesCard />
    </div>
   </div>

   
  </div>

  )
}

export default HomePage
