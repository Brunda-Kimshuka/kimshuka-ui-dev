import React from 'react'
import Navbar from '../Navbar/Navbar'
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from '../Navbar/Footer';
import FAQ from '../Components/FAQ';
import CTABanner from '../Components/CTABanner';
import KimshukaImg from '../../assets/flwrLogo.svg';
import LineBreaker from '../../assets/LinebreakerBlog.svg';
import Arrow from '../../assets/ArrowUpRight.svg';
import Arrowrignt from '../../assets/ArrowRight.svg';



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
        <div className='flex flex-col text-center gap-4 pt-[5%]'>
          <div className='flex gap-2 justify-center'>
            <img src={KimshukaImg}/>
            <p className='text-[#F27F0C] xl:text-lg lg:text-base max-sm:text-xs font-normal'>Fresh Ideas, Bold Perspectives.</p>
          </div>  
          <h2 className='xl:text-[62px] lg:text-[58px] max-sm:text-[24px] lg:font-bold max-sm:font-medium my-4 '>Lorem ipsum <br className='md:block max-sm:hidden'/>dolor sit amet consectetur.</h2>
          <div className='w-full  flex justify-center'>
          <img src={LineBreaker} className='w-[35%]'/>
          </div>
          
        </div>

        <div className='w-full flex justify-center my-4'>
        <div className='w-[75%] bg-[#E9E9E9] rounded-full h-14 flex items-center justify-between py-2 px-4'>
        <button className='text-2xl bg-[#F27F0C] rounded-full py-1 px-4 font-medium'><h2>All</h2></button>
        <button className='text-2xl transition-all duration-300 hover:bg-[#F27F0C] rounded-full py-1 px-4 font-medium'><h2>Product</h2></button>
        <button className='text-2xl transition-all duration-300 hover:bg-[#F27F0C] rounded-full py-1 px-4 font-medium'><h2>UX/UI</h2></button>
        <button className='text-2xl transition-all duration-300 hover:bg-[#F27F0C] rounded-full py-1 px-4 font-medium'><h2>Development & Coading</h2></button>
        <button className='text-2xl transition-all duration-300 hover:bg-[#F27F0C] rounded-full py-1 px-4 font-medium'> <h2>Marketing & SEO</h2></button>
        <button className='text-2xl transition-all duration-300 hover:bg-[#F27F0C] rounded-full py-1 px-4 font-medium'><h2>IoT</h2></button>
        <button className='text-2xl transition-all duration-300 hover:bg-[#F27F0C] rounded-full py-1 px-4 font-medium'><h2>API</h2></button>

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

export default Blogs
