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
import NavbarMobile from '../Navbar/NavbarMobile';
import { BlogData } from '../Blogs/BlogData.js';
import OurServiceSctnMobile from '../Components/OurServiceSctnMobile.jsx';
import TestimonialsSliderMb from '../Components/TestimonialsSliderMb.jsx';
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);


const HomePage = () => {

  
// const mainRef = useRef(null);


  // useEffect(() => {
  //   ScrollTrigger.create({
  //     trigger: mainRef.current,
  //     start: "top top",
  //     end: "bottom=80% top",
  //     pin: true,
  //     scrub: true,
  //     markers: false, // Enable if you want debug
  //   });
  // }, []);
  
  
const navigate = useNavigate();

  const handleClick = () => {
    navigate('/blogs');
  };
  return (

   <div className={ ` w-full h-full flex flex-col  `}>
   <div className="fixed top-0 left-0 w-full z-20 md:block max-sm:hidden">
     <Navbar />
   </div>
   <div className="fixed top-0 left-0 w-full z-20 max-sm:block md:hidden">
     <NavbarMobile/>
   </div>
   
  <div className="pt-[64px] w-full flex-1 overflow-y-auto bg-[#FCFAFA] flex items-center flex-col z-10 " >
     
    <HeroComponent />
    
    <AboutUsHdng
    OrngHdng='Your success, our mission'
    PrimaryHdng='Why Kimshuka?'
    PyrA='Driven by product thinking, we design, deploy, and deliver premium solutions'
    PyrB='that don’t just satisfy clients-they inspire lasting partnerships.'
    />
    
    <div className='bg-pink grid grid-cols-12 gap-6 md:w-[70%] max-sm:w-[90%] lg:pt-10 xl:pb-16 max-sm:py-6'>
      <AboutUsCard
      headingA = '10 Years of '
      headingB = 'Engineering Excellence'
      text='Delivered 30+ projects over 10 years with consistent results'
      />
       <AboutUsCard
      headingA = '25+ long '
      headingB = 'Standing Customers '
      text='count on us for smart solutions and lasting results.'
      />
       <AboutUsCard
      headingA = 'Result '
      headingB = 'Oriented Culture'
      text='Our metrics are your business outcomes.'
      />
       <AboutUsCard
      headingA = 'Customer'
      headingB = 'First Approach '
      text='We prioritize what drives your bottom line.'
      />
    </div>
   
    
<div className={` w-full py-18 px-4 overflow-hidden md:block max-sm:hidden`}  >
    <OurServicesSection/>
</div> 
<div className='md:hidden max-sm:block w-full'>
<AboutUsHdng
  OrngHdng='Our Services'
    PrimaryHdng='How We Help You Succeed'
    PyrA='Our services are designed to meet your exact needs and support '
    PyrB='your long term vision.'/>
    </div>
<div className={` w-full py-8 px-4 overflow-hidden md:hidden max-sm:block`}  >
    <OurServiceSctnMobile/>
</div>

    <OurClients/>

    <AboutUsHdng
    OrngHdng='Testimonials'
    PrimaryHdng='What Our Client’s Say'
    Hidden='hidden'
    />

    <div className='py-18 w-[100%] px-[6%] md:block max-sm:hidden'>
    <TestimonialsSlider/>
    </div>
<div className={` w-full py-8 px-4 overflow-hidden md:hidden max-sm:block`}  >
      <TestimonialsSliderMb/>
</div>
    <FAQ/>

  <div className='flex md:justify-between max-sm:justify-center items-center py-4 w-full px-[6%]'>
    <h2 className='xl:text-[32px] lg:text-[28px] max-sm:text-[32px] font-medium'>Latest Blogs</h2>
    <div className='h-8  flex gap-2 justify-center items-center cursor-pointer md:block max-sm:hidden ' onClick={handleClick}
>
      <h3 className='xl:text-[18px] lg:text-[16px] font-normal text-[#667085]'>Read All</h3>
      <img src='' className='w-4 h-4'/>
    </div>
  </div>

  <div className='grid grid-cols-12 w-full gap-4 max-sm:px-4 md:px-[6%] xl:my-8 lg:my-6'>
     {BlogData.slice(0, 3).map((item, index) => (
        <BlogCards
          key={index}
          Heading={item.Heading}
          desc={item.desc}
          date={item.date}
          imgurl ={item.imgurl}
        />
      ))}
  </div>
<div className='md:hidden max-sm:block w-full my-6'>
    <div
      className='flex w-full gap-2 justify-center items-center cursor-pointer' onClick={handleClick}>
      <h3 className='text-lg font-normal text-[#667085]'>Read All</h3>
      <img src='' className='w-4 h-4'/>
    </div>
</div>
  <div className='flex w-full gap-4 px-[2%] xl:my-8 lg:my-6 max-sm:my-4 max-sm:px-4'>
  <CTABanner/>
    </div>
  </div>

  {/* <div className={`w-full bg-black relative z-0 h-[80vh] `} ref={mainRef} > */}
    
    <div className=' w-full flex  items-end overflow-auto'>
    <Footer/>
    </div>
    </div>

  // </div>
  )
}

export default HomePage;
