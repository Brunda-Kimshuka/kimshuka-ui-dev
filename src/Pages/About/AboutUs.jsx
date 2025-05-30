import React from 'react'
import Navbar from '../Navbar/Navbar'
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from '../Navbar/Footer';
import FAQ from '../Components/FAQ';
import CTABanner from '../Components/CTABanner';
import AboutUsScrollCards from './AboutUsScrollCards';
import HeroComponent from '../Components/HeroComponent';
import AboutUsHdng from '../Home/AboutUsHdng';
import OurCoreCard from './OurCoreCard';
import OurClients from '../Home/OurClients';
gsap.registerPlugin(ScrollTrigger);



const AboutUs = () => {

  const mainRef = useRef(null);
      
        useEffect(() => {
          ScrollTrigger.create({
            trigger: mainRef.current,
            start: "top top",
            end: "bottom=80% top",
            pin: true,
            scrub: true,
            markers: false, // Enable if you want debug
          });
        }, []);
  
  
  
  return (
   <div className={ ` w-full h-full flex flex-col  `}>
   <div className="fixed top-0 left-0 w-full z-20">
     <Navbar />
   </div>
   <div  className="pt-[64px] flex-1 overflow-y-auto bg-[#FCFAFA] flex items-center flex-col z-10"  >


  <HeroComponent/>

    <AboutUsHdng
    margin='my-10'
     OrngHdng='About Us'
    PrimaryHdng='Lorem ipsum dolor sit amet.'
    PyrA='Driven by product thinking, we design, deploy, and deliver premium solutions'
    PyrB='that don’t just satisfy clients-they inspire lasting partnerships.'
    />
    <AboutUsScrollCards />

  
<div className='w-full flex flex-col gap-8 my-10'>
  <AboutUsHdng
     OrngHdng='Our Core Values'
    PrimaryHdng='Lorem ipsum dolor sit amet.'
    PyrA='Lorem ipsum dolor sit amet consectetur. Tempus varius '
    PyrB='pulvinar elit rutrum.'
    />

    <div className='w-full flex justify-between h-auto gap-6 px-[5%] my-8'>
      <div className='w-[33%] flex flex-col gap-6'>
        <OurCoreCard/>
        <OurCoreCard/>
      </div>
      
      <div className=' w-[33%] rounded-2xl border-[#D0D5DD] border-[1px] justify-between flex flex-col p-8'>
        <div className='w-11 h-11 flex justify-center items-center border-[1px] rounded-full'>3</div>

        <div className='flex flex-col gap-4'>
          <h2 className='text-2xl font-medium'>Excellence</h2>
          <p className='text-lg font-normal'>We strive for the highest standards in everything we do, ensuring exceptional quality and excellence in every project. Our commitment to continuous improvement drives us to exceed expectations and deliver outstanding results.</p>
        </div>

      </div>

      <div className='  w-[33%] flex flex-col gap-4 '>
      <OurCoreCard/>
      <OurCoreCard/>
      </div>
    </div>

</div>


 <OurClients/>

 <div className='w-full  my-24'>
<h2 className='text-center text-[38px] my-16 font-medium'>Lorem ipsum dolor sit amet.</h2>

 <div className='w-full flex gap-4 justify-between px-[10%]'>
  <div className='flex flex-col items-center border-r-[1px] border-[#D0D5DD] gap-4 w-[25%]'>
    <h2 className='text-2xl font-medium text-[#F27F0C]'>10+</h2>
    <h2 className='text-2xl font-medium'>Years of Experience</h2>
  </div>
  <div className='flex flex-col items-center border-r-[1px] border-[#D0D5DD] gap-4 w-[25%]'>
    <h2 className='text-2xl font-medium text-[#F27F0C]'>25+</h2>
    <h2 className='text-2xl font-medium'>Clients</h2>
  </div>
  <div className='flex flex-col items-center border-r-[1px] border-[#D0D5DD] gap-4 w-[25%]'>
    <h2 className='text-2xl font-medium text-[#F27F0C]'>30+</h2>
    <h2 className='text-2xl font-medium'>Projects Delivered</h2>
  </div>
  <div className='flex flex-col items-center gap-4 w-[25%]'>
    <h2 className='text-2xl font-medium text-[#F27F0C]'>100%</h2>
    <h2 className='text-2xl font-medium'>Satisfied Clients</h2>
  </div>
 </div>
 </div>
       <FAQ/>
       <div className='flex w-full gap-4 px-[2%] xl:my-8 lg:my-6'>
         <CTABanner/>
       </div>
    </div>

   <div className={`w-full bg-black relative z-0 h-[80vh]`}  ref={mainRef}>   
    <div className=' w-full flex h-[100vh] items-end'>
    <Footer/>
    </div>
    </div>
   </div>
  )
}

export default AboutUs
