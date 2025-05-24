import React from 'react'
// import style from './udg-style.module.css';
import { useRef, useEffect } from "react";
import OurServicesCard  from './OurServicesCard';
import AboutUsHdng from '../Home/AboutUsHdng';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const OurServicesSection = () => {
  const containerRef = useRef(null); // Whole section
  const cardsRef = useRef(null);     // Cards wrapper


   useEffect(() => {
    const container = containerRef.current;
    const cards = cardsRef.current;

    if (!container || !cards) return;

    const totalScrollWidth = cards.scrollWidth;
    const viewportWidth = window.innerWidth;
    const scrollDistance = totalScrollWidth - viewportWidth;

    const ctx = gsap.context(() => {
      gsap.to(cards, {
        x: () => `-${scrollDistance}`,
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top 8%',
          end: () => `+=${scrollDistance}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          markers: false, // set to true for debugging
        },
      });
    }, container);

    return () => ctx.revert();
  }, []);


  return ( 
<section className='cursor-pointer w-full relative ' ref={containerRef}>
  <AboutUsHdng
  OrngHdng='Our Services'
    PrimaryHdng='How We Help You Succeed'
    PyrA='Our services are designed to meet your exact needs and support '
    PyrB='your long term vision.'/>

  <div
    ref={cardsRef}
    className="flex gap-4 w-max px-8 py-20"
  >
    <OurServicesCard />
  </div>


   </section>
  )
}

export default OurServicesSection
