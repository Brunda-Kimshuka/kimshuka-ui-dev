import React from 'react'
import Navbar from '../Navbar/Navbar'
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from '../Navbar/Footer';
import FAQ from '../Components/FAQ';
import CTABanner from '../Components/CTABanner';

gsap.registerPlugin(ScrollTrigger);

const Blogs = () => {
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
    <div className="pt-[64px] flex-1 overflow-y-auto bg-[#FCFAFA] flex items-center flex-col z-10"  >
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

export default Blogs
