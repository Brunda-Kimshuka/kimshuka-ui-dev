import React from 'react'
import Navbar from '../Navbar/Navbar'
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from '../Navbar/Footer';
import BgImg from '../../assets/Gradient.png'
import ContactForm from './ContactForm';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {

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
     <div className="pt-[64px] flex-1 overflow-y-auto bg-[#FCFAFA] flex items-center flex-col z-10">
      <div className='w-full px-[15%] py-[2%] flex  justify-between'>
        <div className='w-[45%] py-[10%] px-6 text-[#fff] gap-4 flex flex-col justify-center rounded-2xl' style={{
            backgroundImage: `url(${BgImg})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}>
            <h1 className=' 2xl:text-5xl xl:text-[44px] lg:text-[40px] font-bold w-[80%]'>Let’s Connect and Bring Your Ideas to Life</h1>
            <p className='xl:text-xl lg:text-lg w-[95%]'>Reach out to our team today, and let’s start crafting solutions that drive your business forward.</p>

        </div>
        <div className='w-[42%]'>         
          <ContactForm/>
        </div>

      </div>
    </div>
   </div>
  )
}

export default Contact
