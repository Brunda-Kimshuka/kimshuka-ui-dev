import React from 'react'
import style from './udg-style.module.css';
import { useRef, useEffect } from "react";
import OurServicesCard  from './OurServicesCard';


const OurServicesSection = () => {

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
  )
}

export default OurServicesSection
