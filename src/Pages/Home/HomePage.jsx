import React from 'react'
import Navbar from '../Navbar/Navbar'
import HeroComponent from '../Components/HeroComponent'
// import  style from "./udg-index.module.css";
import AboutUsCard from './AboutUsCard';
import AboutUsHdng from './AboutUsHdng';
import OurServicesSection from '../Components/OurServicesSection';
import TestimonialsSlider from '../Components/TestimonialsSlider';


const HomePage = () => {

   

  return (

   <div className={ ` w-full h-full flex flex-col`}>
   <div className="fixed top-0 left-0 w-full z-10">
     <Navbar />
   </div>

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

  <OurServicesSection/>
<div className='py-18 w-[100%] px-10 bg-blue-300'>
<TestimonialsSlider/>
</div>
   
  </div>
</div>
  )
}

export default HomePage
