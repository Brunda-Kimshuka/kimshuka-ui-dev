import React from 'react'
import style from './udg-style.module.css';
import { useRef, useEffect } from "react";
import OurServicesCard  from './OurServicesCard';
import AboutUsHdng from '../Home/AboutUsHdng';


const OurServicesSection = () => {

const scrollRef = useRef(null);
const sectionRef = useRef(null);

    useEffect(() => {
  const sectionEl = sectionRef.current;
  const scrollEl = scrollRef.current;

  if (!sectionEl || !scrollEl) return;

 const handleWheel = (e) => {
  const maxScrollLeft = scrollEl.scrollWidth - scrollEl.clientWidth;

  const atStart = scrollEl.scrollLeft <= 1; // Allow minor offsets
  const atEnd = scrollEl.scrollLeft >= maxScrollLeft - 1; // Avoid overshoot precision issues

  const scrollingRight = e.deltaY > 0;
  const scrollingLeft = e.deltaY < 0;

  const shouldPrevent =
    (scrollingRight && !atEnd) || (scrollingLeft && !atStart);

  if (shouldPrevent) {
    e.preventDefault();
    scrollEl.scrollLeft += e.deltaY;
  }
};


  sectionEl.addEventListener('wheel', handleWheel, { passive: false });

  return () => {
    sectionEl.removeEventListener('wheel', handleWheel);
  };
}, []);


  return ( 
<div className='cursor-pointer' ref={sectionRef} >
  <AboutUsHdng
  OrngHdng='Our Services'
    PrimaryHdng='How We Help You Succeed'
    PyrA='Our services are designed to meet your exact needs and support '
    PyrB='your long term vision.'/>

   <div className={`${style["no-Scrollbar"]}  w-full overflow-x-auto py-8 px-8`}  ref={scrollRef} >
    <div className={` flex gap-4  w-max`}>
      <OurServicesCard />
    </div>
   </div>


   </div>
  )
}

export default OurServicesSection
