import React from 'react'
import Navbar from '../Navbar/Navbar'
import HeroComponent from '../Components/HeroComponent'
// import  style from "./udg-index.module.css";
import AboutUsCard from './AboutUsCard';
import KimshukaImg from '../../assets/flwrLogo.svg';
import FAQ from '../Components/FAQ';
import CTABanner from '../Components/CTABanner';
import OurClients from './OurClients';
import AboutUsHdng from './AboutUsHdng';
import OurServicesSection from '../Components/OurServicesSection';
import TestimonialsSlider from '../Components/TestimonialsSlider';
import BlogCards from '../Components/BlogCards';
// import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from '../Navbar/Footer';

gsap.registerPlugin(ScrollTrigger);


const HomePage = () => {
// const mainRef = useRef(null);

//  useEffect(() => {
//     ScrollTrigger.create({
//       trigger: mainRef.current,
//       start: "top top",
//       end: "bottom+=80% top", // End after scroll completes
//       pin: true,
//       scrub: true,
//       markers: true, // Set to true to debug
//     });
//   }, []);

  return (

   <div className={ ` w-full h-full flex flex-col  `}>
   <div className="fixed top-0 left-0 w-full z-20">
     <Navbar />
   </div>

  <div className="pt-[64px] flex-1 overflow-y-auto bg-[#FCFAFA] flex items-center flex-col z-10"  >
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
    
    <OurClients/>
    <div className='py-18 w-[100%] px-[6%]'>
    <TestimonialsSlider/>
    </div>

    <FAQ/>

  <div className='flex justify-between items-center py-4 w-full px-[6%]'>
    <h2 className='text-[32px] font-medium'>Latest Blogs</h2>
    <div className='h-8  flex gap-2 justify-center items-center'>
      <h3 className='text-[18px] font-normal text-[#667085]'>Read All</h3>
      <img src='' className='w-4 h-4'/>
    </div>
  </div>

  <div className='flex w-full gap-4 px-[6%]'>
     <BlogCards/>
     <BlogCards/>
     <BlogCards/>

  </div>

    <CTABanner/>
  </div>

  <div className={`w-full bg-black relative z-0 mt-8`} >
    <div className=''>
    <Footer/>
    </div>
    </div>

  </div>
  )
}

export default HomePage;
